export default function highlight_blocks() {
	// escape curlies, backtick, \t, \r, \n to avoid breaking output of {@html `here`} in .svelte

	function _optionalChain(ops) {
		let lastAccessLHS = undefined;
		let value = ops[0];
		let i = 1;
		while (i < ops.length) {
			const op = ops[i];
			const fn = ops[i + 1];
			i += 2;
			if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
				return undefined;
			}
			if (op === 'access' || op === 'optionalAccess') {
				lastAccessLHS = value;
				value = fn(value);
			} else if (op === 'call' || op === 'optionalCall') {
				value = fn((...args) => value.call(lastAccessLHS, ...args));
				lastAccessLHS = undefined;
			}
		}
		return value;
	}

	var matchHtmlRegExp = /["'&<>]/;

	function escapeHtml(string) {
		
		var str = '' + string;
		var match = matchHtmlRegExp.exec(str);

		if (!match) {
			return str;
		}

		var escape;
		var html = '';
		var index = 0;
		var lastIndex = 0;

		for (index = match.index; index < str.length; index++) {
			switch (str.charCodeAt(index)) {
				case 34: // "
					escape = '&quot;';
					break;
				case 38: // &
					escape = '&amp;';
					break;
				case 39: // '
					escape = '&#39;';
					break;
				case 60: // <
					escape = '&lt;';
					break;
				case 62: // >
					escape = '&gt;';
					break;
				default:
					continue;
			}

			if (lastIndex !== index) {
				html += str.substring(lastIndex, index);
			}

			lastIndex = index + 1;
			html += escape;
		}

		return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	}

	const escape_svelty = (str) =>
		str
			.replace(
				/[{}`]/g,
				//@ts-ignore
				(c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' }[c])
			)
			.replace(/\\([trn])/g, '&#92;$1');

	const code_highlight = (code, lang) => {
		const normalised_lang = _optionalChain([
			lang,
			'optionalAccess',
			(_) => _.toLowerCase,
			'call',
			(_2) => _2()
		]);
		
		const highlighted = escape_svelty(escapeHtml(code));
		const resultCode =
			normalised_lang === 'notice' ? highlighted.replaceAll('\\', '\\\\') : highlighted;
		
		var color='#859900';
		// const firstChar = resultCode.charAt(0);

		// if (firstChar === '-') {
		// // eslint-disable-next-line no-const-assign
		// color = 'red';
		// } else if (firstChar === '+') {
		// // eslint-disable-next-line no-const-assign
		// color = 'green';
		// } 
	return `<pre  style="
		padding:10px;
		max-width: 100%;
		white-space: pre-wrap;
		display: block;
		margin: 0 0 10px;
		word-break: break-all;
		word-wrap: break-word;
		color: #333;
		background-color: #f5f5f5;
		border: 1px solid #ccc;
		border-radius: 4px;" class="language-${normalised_lang}">{@html \`<code style="
		color: ${color}" class="language-${normalised_lang}">${resultCode}</code>\`}</pre>`;
	};

	let visit;
	return async function (tree) {
		if (code_highlight) {
			if (!visit) {
				visit = (await import('unist-util-visit')).visit;
			}

			const nodes = [];
			visit(tree, 'code', (node) => {
				nodes.push(node);
			});

			await Promise.all(
				nodes.map(async (node) => {
					node.type = 'html';
					node.value = await code_highlight(node.value, node.lang, node.meta);
				})
			);
		}
	};
}
