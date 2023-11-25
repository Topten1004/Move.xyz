const customDirectives = ['tip', 'info', 'caution', 'warning'];

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function directive() {
	let visit;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return async (tree, file) => {
		if (!visit) {
			visit = (await import('unist-util-visit')).visit;
		}
		visit(tree, (node) => {
			if (node.type === 'heading') {
				// Assuming the heading is the only child
				const child = node.children[0];
				if (child.type === 'text' && child.value.includes(':')) {
					const data = node.data || (node.data = {});
					let [heading, classes] = child.value.split(':');
					classes = classes.replaceAll('.', '');
					data.hProperties = {
						class: classes
					};
					child.value = heading;
				}
			}
			if (
				node.type === 'textDirective' ||
				node.type === 'leafDirective' ||
				node.type === 'containerDirective'
			) {
				if (customDirectives.includes(node.name)) {
					const data = node.data || (node.data = {});

					data.hName = 'div';
					data.hProperties = {
						class: node.name
					};
				}
			}
		});
	};
}
