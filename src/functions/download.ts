import { Buffer } from 'buffer';
import {
	AlignmentType,
	convertInchesToTwip,
	Document,
	Packer,
	Paragraph,
	TextRun,
	UnderlineType,
	Table,
	TableCell,
	TableRow,
	ExternalHyperlink,
	ImageRun,
	BorderStyle,
	ShadingType,
	VerticalAlign,
	PageBreak,
	PageNumber,
	NumberFormat,
	Footer,
	WidthType
} from 'docx';
import { saveAs } from 'file-saver';
import { DISCLAIMER, CREATOR, WORD_DESCRIPTION } from '$constants/wordConstants';
import type { VariableType, TagIndexListType } from 'src/app';

const getBase64FromUrl = async (url: string) => {
	const data = await fetch(url);
	const blob = await data.blob();
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onloadend = () => {
			const base64data = reader.result;
			resolve(base64data);
		};
	});
};

export const downloadPdf = async (title: string, content: string) => {
	const printWindow = window.open('', '', 'height=400,width=800');
	printWindow?.document.write(`<html><head><title>${title}</title>`);
	printWindow?.document.write('</head><body >');
	printWindow?.document.write(content);
	printWindow?.document.write('</body></html>');
	printWindow?.document.close();
	printWindow?.print();
};

export const downloadWord = async (path: string, variables: VariableType[]) => {
	const images = document.getElementsByTagName('img');
	let imageIndex = 1;
	const ratio = 0.7;
	// get dynamic data
	const pathWithoutExtension = path.substring(1).replace(/\.[^/.]+$/, '');
	const globs = import.meta.glob('../docs/**/*.{md,svx,json}', { as: 'raw' });
	// NOTE: this worked locally await import('..docs/' + pathWithoutExtension + '.md');
	// not below i.e. the string literal, but above, the import.meta.glob - works in production.
	// Looks insane.
	let imported: any;
	try {
		imported = await globs?.[`../docs/${pathWithoutExtension}.md`]();
	} catch (e) {
		console.log(e);
	}

	if (variables && variables.length > 0) {
		variables.forEach((variable: VariableType) => {
			if (variable.default) {
				if (variable.name === 'Entity-name') {
					imported = imported.replace(
						new RegExp(`\\[${variable.name}\\]`, 'g'),
						variable.default.toUpperCase()
					);
				}
				imported = imported.replace(new RegExp(`\\[${variable.name}\\]`, 'g'), variable.default);
			}
		});
	}

	const fileName = path.replaceAll('/', '_').substring(1);

	console.log('Saving ' + fileName + ' as docx');
	imported = imported.split('\n'); //split markdown into array by every newline

	let title = 'Placeholder Title';
	let heading = 'Placeholder Heading';
	let heading2 = 'Placeholder Heading 2';
	let heading3 = 'Placeholder Heading 3';
	let paragraph = 'Placeholder Paragraph';
	let sectionStartIndex = -1;

	const children: Array<any> = [];
	if (imported[0].includes('---')) {
		sectionStartIndex = imported.findIndex(
			(el: string, index: number) => el.includes('---') && index > 0
		);
	}

	const formatedText: any = (text: string, lineBreak = false) => {
		// lineBreak is not used
		// get main header
		if (text.includes('# ') && !text.includes('## ')) {
			heading = text.substring(text.indexOf('# ') + 2);
			return [new TextRun({ children: formatedText(heading), size: 40, bold: true })];
		}
		//get section headers
		else if (text.includes('## ') && !text.includes('### ')) {
			heading2 = text.substring(text.indexOf('# ') + 2);
			return [
				new TextRun({ text: '', break: lineBreak ? 2 : 0 }),
				new TextRun({ children: formatedText(heading2), size: 32, bold: true })
			];
		}
		// get section headers
		else if (text.includes('### ')) {
			heading3 = text.substring(text.indexOf('# ') + 2);
			return [
				new TextRun({ text: '', break: lineBreak ? 1 : 0 }),
				new TextRun({ children: formatedText(heading3), size: 28, bold: true })
			];
		}

		const str = ' ' + text.replaceAll('`', '').replaceAll('_ _', ' ') + ' ';
		let regex = /\*\*([^*\n]*(?:\*(?!\*)[^*\n]*)*)\*\*/g;
		const boldText = '<b>$1</b>';
		text = str.replace(regex, boldText);

		regex = /([^a-zA-Z])_([^_\n]*(?:_[a-zA-Z][^_\n]*)*)_([^a-zA-Z])/g;
		const italicText = '$1<i>$2</i>$3';
		text = text.replace(regex, italicText);

		const tagIndexList: TagIndexListType[] = [];
		const findTagIndex = (str: string, position: number) => {
			if (str.includes('](')) {
				const linkPosition = str.indexOf('](');
				const startPosition = str.lastIndexOf('[', linkPosition);
				const endPosition = str.indexOf(')', linkPosition);
				let link = str.substring(linkPosition + 2, endPosition);
				if (link.startsWith('0x') && link.endsWith('.email')) {
					link = 'mailto:' + link;
				} else if (!link.includes('http')) {
					link = 'https://daolabs-docs.on.fleek.co' + link;
				}
				tagIndexList.push({
					index: startPosition + position,
					tag: 'a',
					link: link
				});
				tagIndexList.push({
					index: linkPosition + position,
					tag: '/a'
				});
				tagIndexList.push({
					index: linkPosition + position + 1,
					tag: 'l'
				});
				tagIndexList.push({
					index: endPosition + position,
					tag: '/l'
				});
				findTagIndex(str.substring(0, startPosition), position);
				findTagIndex(str.substring(startPosition + 1, linkPosition), position + startPosition + 1);
				findTagIndex(str.substring(endPosition + 1), position + endPosition + 1);
			} else if (str.includes('<b>')) {
				const openBold = str.indexOf('<b>');
				tagIndexList.push({
					index: openBold + position,
					tag: 'b'
				});
				findTagIndex(str.substring(0, openBold), position);
				findTagIndex(str.substring(openBold + 3), position + openBold + 3);
			} else if (str.includes('</b>')) {
				const closeBold = str.indexOf('</b>');
				tagIndexList.push({
					index: closeBold + position,
					tag: '/b'
				});
				findTagIndex(str.substring(0, closeBold), position);
				findTagIndex(str.substring(closeBold + 4), position + closeBold + 4);
			} else if (str.includes('<i>')) {
				const openItalics = str.indexOf('<i>');
				tagIndexList.push({
					index: openItalics + position,
					tag: 'i'
				});
				findTagIndex(str.substring(0, openItalics), position);
				findTagIndex(str.substring(openItalics + 3), position + openItalics + 3);
			} else if (str.includes('</i>')) {
				const closeItalics = str.indexOf('</i>');
				tagIndexList.push({
					index: closeItalics + position,
					tag: '/i'
				});
				findTagIndex(str.substring(0, closeItalics), position);
				findTagIndex(str.substring(closeItalics + 4), position + closeItalics + 4);
			}
		};
		findTagIndex(text, 0);
		tagIndexList.sort((a, b) => a.index - b.index);
		tagIndexList.push({
			index: text.length - 1,
			tag: ''
		});

		const childText = [];
		if (tagIndexList.length > 0) {
			const currentTags: string[] = [];
			let linkTo = '';

			childText.push(new TextRun(text.substring(1, tagIndexList[0].index)));
			tagIndexList.forEach((el, index) => {
				if (el.tag === '') return;
				if (el.tag[0] === '/') currentTags.pop();
				else currentTags.push(el.tag);

				if (el.tag === 'l') return;
				linkTo = el.link || linkTo;

				let padding = 1;
				if (el.tag === 'b' || el.tag === 'i') padding = 3;
				else if (el.tag === '/b' || el.tag === '/i') padding = 4;

				const substring = text.substring(el.index + padding, tagIndexList[index + 1].index);
				if (currentTags.includes('a')) {
					childText.push(
						new ExternalHyperlink({
							children: [
								new TextRun({
									text: substring,
									bold: currentTags.includes('b'),
									italics: currentTags.includes('i'),
									style: 'Hyperlink'
								})
							],
							link: linkTo
						})
					);
				} else {
					childText.push(
						new TextRun({
							text: substring,
							bold: currentTags.includes('b'),
							italics: currentTags.includes('i')
						})
					);
				}
			});
		} else {
			childText.push(new TextRun(text.trim()));
		}
		return childText;
	};

	children.push(
		new Paragraph({
			text: DISCLAIMER.toUpperCase(),
			border: {
				left: {
					color: 'auto',
					space: 10,
					style: BorderStyle.SINGLE,
					size: 6
				},
				right: {
					color: 'auto',
					space: 10,
					style: BorderStyle.SINGLE,
					size: 6
				},
				top: {
					color: 'auto',
					space: 10,
					style: BorderStyle.SINGLE,
					size: 6
				},
				bottom: {
					color: 'auto',
					space: 10,
					style: BorderStyle.SINGLE,
					size: 6
				}
			},
			shading: {
				type: ShadingType.CLEAR,
				fill: 'C3C3C3'
			}
		}),
		new Paragraph('')
	);

	for (const [index, line] of imported.entries()) {
		if (line === '\r') continue;
		if (line.includes('title:')) {
			title = line.substring(line.indexOf(':') + 1);
			const regex = /['"`]([0-9a-zA-Z\s,.\-_[\]()]*)['"`]/g;
			title = title.replace(regex, '$1').trim();
			if (title === 'Disclaimers') {
				children.pop();
				children.pop();
			}
			children.push(
				new Paragraph({
					children: [new TextRun({ text: title, size: 40, bold: true })]
				})
			);
		}
		// get section paragraphs
		else if (line.length != 0 && index > sectionStartIndex) {
			paragraph = line.replaceAll('<p align="center">', '<p>');
			if (line === '---') {
				children.push(
					new Paragraph({
						children: [new PageBreak()]
					})
				);
			} else if (line.includes('![](')) {
				const imagePosition = line.indexOf('![](');
				const endPosition = line.indexOf(')', imagePosition);
				let base64data = (await getBase64FromUrl(
					line.substring(imagePosition + 4, endPosition)
				)) as string;
				base64data = base64data.substring(base64data.indexOf('base64,') + 7);
				children.push(
					new Paragraph({
						children: [
							new ImageRun({
								data: base64data,
								transformation: {
									width: images[imageIndex].width * ratio,
									height: images[imageIndex].height * ratio
								}
							})
						],
						alignment: AlignmentType.CENTER
					})
				);
				imageIndex++;
			} else if (line.includes('<img')) {
				const imagePosition = line.indexOf('src="') + 5;
				const endPosition = line.indexOf('"', imagePosition);
				let base64data = (await getBase64FromUrl(
					line.substring(imagePosition, endPosition)
				)) as string;
				base64data = base64data.substring(base64data.indexOf('base64,') + 7);
				children.push(
					new Paragraph({
						children: [
							new ImageRun({
								data: base64data,
								transformation: {
									width: images[imageIndex].width * ratio,
									height: images[imageIndex].height * ratio
								}
							})
						],
						alignment: AlignmentType.CENTER
					})
				);
				imageIndex++;
			} else if (line.includes('<iframe')) {
				const videoPosition = line.indexOf('src="') + 5;
				const endPosition = line.indexOf('"', videoPosition);
				children.push(
					new Paragraph({
						children: [
							new TextRun('Click '),
							new ExternalHyperlink({
								children: [
									new TextRun({
										text: 'here',
										style: 'Hyperlink'
									})
								],
								link: line.substring(videoPosition, endPosition)
							}),
							new TextRun(' to see the video.')
						]
					})
				);
			} else if (line.includes('<style>')) {
				sectionStartIndex = imported.findIndex((el: string) => el.includes('</style>'));
			} else if (line.includes('<br />') || line.includes('```')) {
				children.push(new Paragraph(''));
			} else if (
				paragraph.includes('<p>') &&
				paragraph.indexOf('<p>') < paragraph.indexOf('</p>')
			) {
				const childText: TextRun[] = [];
				paragraph
					.substring(paragraph.indexOf('<p>') + 3, paragraph.indexOf('</p>'))
					.split('<br />')
					.map((str: string) =>
						childText.push(
							new TextRun({
								text: str,
								break: 1
							})
						)
					);
				if (paragraph.includes('[New page]')) {
					childText.push(new PageBreak());
				}
				if (paragraph.includes('[Signature page to follow]')) {
					childText.push(new PageBreak());
				}
				children.push(
					new Paragraph({
						children: childText,
						alignment: AlignmentType.CENTER
					})
				);
			} else if (line.includes('<')) {
				// ignore other html tags
				paragraph = line.replaceAll(/(<[a-z\s'"-_=/]*>)/g, '').trim();
				if (paragraph.length > 1) {
					children.push(
						new Paragraph({
							children: formatedText(paragraph),
							style: 'wellSpaced'
						})
					);
				}
			} else if (line.includes('>') && !line.includes('> >')) {
				// indented text
				const indentedText = line.substring(line.indexOf('>') + 2);
				children.push(
					new Paragraph({
						children: formatedText(indentedText),
						style: 'aside1'
					})
				);
			} else if (line.includes('> >') && !line.includes('> > >')) {
				// indented text
				const indentedText = line.substring(line.indexOf('>') + 4);
				children.push(
					new Paragraph({
						children: formatedText(indentedText),
						style: 'aside2'
					})
				);
			} else if (line.includes('> > >')) {
				// indented text
				const indentedText = line.substring(line.indexOf('>') + 6);
				children.push(
					new Paragraph({
						children: formatedText(indentedText),
						style: 'aside3'
					})
				);
			} else if (line.includes('|') && title !== 'Example Notices') {
				const tableHeaderCells: TableCell[] = [];
				const tableRows: TableRow[] = [];
				const tableHeaders = line.split('|').slice(1, -1);
				const tableWidth = 10500;
				let len = imported[index + 1].length;
				const columnWidths: number[] = [];
				imported[index + 1]
					.split('|')
					.slice(1, -1)
					.map((el: string) => {
						let prop = el.length;
						if (prop * 2 > len) {
							const diff = Math.floor(prop / 2);
							prop -= diff;
							len -= diff;
						}
						columnWidths.push(Math.floor((tableWidth * prop) / len));
					});

				tableHeaders.map((cellContent: string, index: number) => {
					tableHeaderCells.push(
						new TableCell({
							children: [
								new Paragraph({
									children: formatedText(cellContent.trim()),
									alignment: AlignmentType.CENTER
								})
							],
							verticalAlign: VerticalAlign.CENTER,
							shading: {
								type: ShadingType.CLEAR,
								fill: 'CFCFCF'
							},
							width: {
								size: columnWidths[index],
								type: WidthType.DXA
							}
						})
					);
				});

				for (
					sectionStartIndex = index + 2;
					imported[sectionStartIndex][0] === '|';
					sectionStartIndex++
				) {
					const tableContents = imported[sectionStartIndex].split('|').slice(1, -1);
					const tableCells: TableCell[] = [];
					tableContents.map((cellContent: string, index: number) => {
						tableCells.push(
							new TableCell({
								children: [
									new Paragraph({
										children: formatedText(cellContent)
									})
								],
								width: {
									size: columnWidths[index],
									type: WidthType.DXA
								}
							})
						);
					});
					tableRows.push(
						new TableRow({
							children: tableCells
						})
					);
				}

				const table = new Table({
					columnWidths: columnWidths,
					rows: [
						new TableRow({
							children: tableHeaderCells,
							tableHeader: true
						}),
						...tableRows
					]
				});
				children.push(table);
			} else if (line.includes(':::')) {
				for (
					sectionStartIndex = index + 1;
					!imported[sectionStartIndex].includes(':::');
					sectionStartIndex++
				) {
					children.push(
						new Paragraph({
							children: formatedText(imported[sectionStartIndex], false),
							border: {
								left: {
									color: 'auto',
									space: 10,
									style: BorderStyle.SINGLE,
									size: 6
								},
								right: {
									color: 'auto',
									space: 10,
									style: BorderStyle.SINGLE,
									size: 6
								},
								top: {
									color: 'auto',
									space: 10,
									style: BorderStyle.SINGLE,
									size: 6
								},
								bottom: {
									color: 'auto',
									space: 10,
									style: BorderStyle.SINGLE,
									size: 6
								}
							},
							shading: {
								type: ShadingType.CLEAR,
								fill: 'C3C3C3'
							}
						})
					);
				}
			} else if (title === 'Example Notices' && !line.includes('#')) {
				// no special formatting on this line
				children.push(
					new Paragraph({
						text: paragraph.replaceAll('\\\\', '\\'),
						style: 'copyright'
					})
				);
			} else {
				//no special formatting on this line
				children.push(
					new Paragraph({
						children: formatedText(paragraph),
						style: paragraph.includes('# ') && !paragraph.includes('### ') ? '' : 'wellSpaced',
						pageBreakBefore: paragraph.toLowerCase().includes('## exhibit')
					})
				);
			}
		}
	}

	const doc = new Document({
		creator: CREATOR,
		title: title,
		description: WORD_DESCRIPTION,
		styles: {
			default: {
				heading1: {
					run: {
						size: 38,
						bold: true
					},
					paragraph: {
						spacing: {
							after: 120
						}
					}
				},
				heading2: {
					run: {
						size: 28,
						bold: true
					},
					paragraph: {
						spacing: {
							before: 240,
							after: 120
						}
					}
				}
			},
			paragraphStyles: [
				{
					id: 'aside1',
					name: 'Aside',
					basedOn: 'Normal',
					next: 'Normal',
					run: {
						color: '000000',
						italics: false,
						size: 21
					},
					paragraph: {
						indent: {
							left: convertInchesToTwip(0.4)
						},
						alignment: AlignmentType.JUSTIFIED
					}
				},
				{
					id: 'aside2',
					name: 'Aside',
					basedOn: 'Normal',
					next: 'Normal',
					run: {
						color: '000000',
						italics: false,
						size: 21
					},
					paragraph: {
						indent: {
							left: convertInchesToTwip(0.7)
						},
						alignment: AlignmentType.JUSTIFIED
					}
				},
				{
					id: 'aside3',
					name: 'Aside',
					basedOn: 'Normal',
					next: 'Normal',
					run: {
						color: '000000',
						italics: false,
						size: 21
					},
					paragraph: {
						indent: {
							left: convertInchesToTwip(1)
						},
						alignment: AlignmentType.JUSTIFIED
					}
				},
				{
					id: 'wellSpaced',
					name: 'Well Spaced',
					basedOn: 'Normal',
					quickFormat: true,
					paragraph: {
						spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
						alignment: AlignmentType.JUSTIFIED
					}
				},
				{
					id: 'copyright',
					name: 'Copyright Font',
					basedOn: 'Normal',
					quickFormat: true,
					run: {
						color: '000000',
						italics: false,
						size: 15,
						font: 'Cascadia Mono Light'
					},
					paragraph: {
						spacing: { line: 150, before: 0, after: 0 }
					}
				},
				{
					id: 'strikeUnderline',
					name: 'Strike Underline',
					basedOn: 'Normal',
					quickFormat: true,
					run: {
						strike: true,
						underline: {
							type: UnderlineType.SINGLE
						}
					}
				}
			],
			characterStyles: [
				{
					id: 'strikeUnderlineCharacter',
					name: 'Strike Underline',
					basedOn: 'Normal',
					quickFormat: true,
					run: {
						strike: true,
						underline: {
							type: UnderlineType.SINGLE
						}
					}
				}
			]
		},
		sections: [
			{
				properties: {
					page: {
						pageNumbers: {
							start: 1,
							formatType: NumberFormat.DECIMAL
						}
					}
				},
				children: children,
				footers: {
					default: new Footer({
						children: [
							new Paragraph({
								alignment: AlignmentType.CENTER,
								children: [
									new TextRun({
										children: ['Page ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES]
									})
								]
							})
						]
					})
				}
			}
		]
	});

	Packer.toBlob(doc).then((blob) => {
		saveAs(blob, fileName.split('.')[0]);
		console.log('Document created successfully');
	});
};

export const downloadMd = async (path: string, variables: VariableType[]) => {
	const pathWithoutExtension = path.substring(1).replace(/\.[^/.]+$/, '');
	const globs = import.meta.glob('../docs/**/*.{md,svx,json}', { as: 'raw' });
	let imported: any;

	try {
		imported = await globs?.[`../docs/${pathWithoutExtension}.md`]();
	} catch (e) {
		console.log(e);
	}

	if (variables && variables.length > 0) {
		variables.forEach((variable: VariableType) => {
			if (variable.default) {
				if (variable.name === 'Entity-name') {
					imported = imported.replace(
						new RegExp(`\\[${variable.name}\\]`, 'g'),
						variable.default.toUpperCase()
					);
				}
				imported = imported.replace(new RegExp(`\\[${variable.name}\\]`, 'g'), variable.default);
			}
		});
	}

	const fileName = path.split('/').pop();
	const mdContent =
		'data:text/markdown;charset=utf-8;base64,' + Buffer.from(imported).toString('base64');
	const encodedUri = encodeURI(mdContent);
	const link = document.createElement('a');
	link.setAttribute('href', encodedUri);
	link.setAttribute('download', `${fileName}`);
	document.body.appendChild(link);
	link.click();
};
