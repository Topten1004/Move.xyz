import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
//import remarkPrism from 'remark-prism';
import rehypeRaw from 'rehype-raw';
import headings from './md_plugins/headings.js';
import highlighter from './md_plugins/highlighter.js';
import brackets from './md_plugins/brackets.js';
import { directive } from './md_plugins/directive.js';

var newline = '\n';

const mdPreprocess = () => ({
	markup: async ({ content, filename }) => {
		if (!filename.endsWith('.md')) {
			return {
				code: content
			};
		}

		const vFile = await remark()
			.use(headings)
			.use(brackets)
			.use(remarkParse)
			.use(remarkGfm)
			.use(remarkFrontmatter)
			.use(remarkDirective)
			//.use(remarkPrism)
			.use(directive)
			.use(highlighter)
			.use(remarkRehype, { allowDangerousHtml: true })
			.use(rehypeRaw)
			.use(rehypeSlug)
			.use(rehypeAutolinkHeadings)
			.use(rehypeStringify)
			.process(content);

		const { fm: metadata } = vFile.data;

		// Workaround for script and style tags in strings
		// https://github.com/sveltejs/svelte/issues/5292
		const stringified =
			metadata && JSON.stringify(metadata).replace(/<(\/?script|\/?style)/g, '<"+"$1');

		const fm =
			metadata &&
			`export const metadata = ${stringified};${newline}` +
				`\tconst { ${Object.keys(metadata).join(', ')} } = metadata;`;

		const insertModule = `<script context="module">${newline}\t${fm}${newline}</script>`;

		const resultCode = `${insertModule}${newline}${vFile.value}`;

		return {
			code: resultCode
		};
	}
});

export default mdPreprocess;
