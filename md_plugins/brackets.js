/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function images() {
	let visit;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return async (tree, file) => {
		if (!visit) {
			visit = (await import('unist-util-visit')).visit;
		}
		visit(tree, 'element', (node) => {
			if (node.tagName === 'a' && node.properties && typeof node.properties.href === 'string') {
				node.properties.href = node.properties.href.replace(/%7B/g, '{').replace(/%7D/g, '}');
			}

			if (node.tagName === 'img' && node.properties && typeof node.properties.src === 'string') {
				node.properties.src = node.properties.src.replace(/%7B/g, '{').replace(/%7D/g, '}');
			}
		});
	};
}
