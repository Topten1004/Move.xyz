/* eslint-disable no-inner-declarations */
import { error } from '@sveltejs/kit';
import type { RouteItem, FullPathListType } from 'src/app';

/** @type {import('./$types').PageLoad} */
export async function load() {
	let docs = null;
	const fullPathList: Array<FullPathListType> = [];
	try {
		docs = await import(`../docs.json`);
		function getFullpathList(items: Array<RouteItem>) {
			for (const item of items) {
				for (const leaf of item.leaves) {
					fullPathList.push({
						title: leaf.label ? leaf.label : leaf.leaf,
						path: leaf.fullpath
					});
				}
				getFullpathList(item.items);
			}
		}
		getFullpathList(docs.default);
	} catch (e) {
		// TODO: more helpful error + 404 page
		throw error(404, 'Not found');
	}

	return {
		docs: docs?.default,
		fullPathList: fullPathList
	};
}
