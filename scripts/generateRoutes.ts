// Generates a routes file for the app to create a sidebar, see README.md for more info.
import * as fs from 'fs';

const verbosity = process.argv[2] === '-v' ? true : false;

const dir = './src/docs';
const filterFormats = ['doc', 'docx', 'pdf', 'DS_Store'];

type Leaf = {
	label: string;
	leaf: string;
	position: number;
	fullpath: string;
};

type RouteItem = {
	label: string;
	position: number;
	items?: RouteItem[];
	hasRootDoc?: boolean;
	path?: string;
	leaves?: Leaf[];
};

type Category = {
	label: string;
	position: number;
};

function readMarkdownFrontmatter(path: string): { [key: string]: string } {
	const markdown = fs.readFileSync(path, 'utf8');
	// Check if first line is a frontmatter
	const hasFrontmatter = markdown.split('\n')[0];
	if (!hasFrontmatter.startsWith('---')) {
		return {};
	}
	const frontmatter = markdown.split('---')[1];
	const frontmatterJson = frontmatter
		.split('\n')
		.map((line) => line.split(': '))
		.reduce((acc, [key, value]) => {
			if (key && value) {
				acc[key] = value;
				return acc;
			} else return acc;
		}, {} as { [key: string]: string });
	return frontmatterJson;
}

function readCategoryJson(path: string): Category {
	const json = fs.readFileSync(path, 'utf8');
	return JSON.parse(json);
}

function recursiveCreateRoutes(path: string, fullPath = ''): RouteItem[] {
	const files = fs.readdirSync(path);
	const routes: RouteItem[] = [];
	for (const file of files) {
		const filePath = `${path}/${file}`;
		const stats = fs.statSync(filePath);
		if (filterFormats.includes(file.split('.')[1])) continue;

		if (stats.isDirectory()) {
			let categoryJson: Category = { label: '', position: 0 };
			try {
				categoryJson = readCategoryJson(`${filePath}/_category_.json`);
				// verbosity ? console.log(categoryJson) : null;
			} catch (e) {
				fs.existsSync(`${filePath}/_ignore_`)
					? verbosity
						? console.log(`OK: Ignoring category json for ${filePath}/_ignore_`)
						: null
					: verbosity
					? console.warn('NOTE: No category json found for', filePath)
					: null;
				continue;
			}
			// Check if the category has a README.md
			const readmePath = `${filePath}/README.md`;
			const readmeExists = fs.existsSync(readmePath);

			const items = recursiveCreateRoutes(filePath, `${fullPath}/${filePath}`);
			const item = {
				label: categoryJson.label,
				position: categoryJson.position,
				path: file,
				hasRootDoc: readmeExists
			} as RouteItem;

			item.leaves = [];
			item.items = [];

			for (const newItem of items) {
				if (typeof newItem === 'string') {
					const frontmatter = readMarkdownFrontmatter(`${path}/${item.path}/${newItem}`);
					const fullPath =
						path === './src/docs'
							? `${item.path}/${newItem}`
							: `${path.replace('./src/docs/', '')}/${item.path}/${newItem}`;
					item.leaves.push({
						leaf: newItem,
						label: frontmatter.title && frontmatter.title['replaceAll']("'", ''),
						position: Number(frontmatter.sidebar_position),
						fullpath: fullPath
					});
				} else {
					item.items.push(newItem);
				}
			}
			item.leaves = item.leaves.sort((a, b) => Number(a.position) - Number(b.position));
			item.items = item.items.sort((a, b) => Number(a.position) - Number(b.position));
			routes.push(item);
		} else {
			if (file.endsWith('.json')) {
				continue;
			}
			routes.push(`${file}` as unknown as RouteItem);
		}
	}
	return routes;
}

const routes = recursiveCreateRoutes(dir);
const sortedRoutes = routes.sort((a: RouteItem, b: RouteItem) => {
	return Number(a.position) - Number(b.position);
});

fs.writeFileSync('./src/docs.json', JSON.stringify(sortedRoutes, null, 2));
JSON.stringify(sortedRoutes, null, 2).length
	? verbosity
		? console.log('OK: Routes generated')
		: null
	: verbosity
	? console.warn('OK: Routes not generated')
	: null;
