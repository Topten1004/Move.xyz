/** Dispatch event on click outside of node */
function clickOutsideDirective(node: HTMLElement) {
	const handleClick = (event: Event) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickOutside', node as CustomEventInit<unknown>));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

export default clickOutsideDirective;
