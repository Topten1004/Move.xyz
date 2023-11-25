// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
}

declare;
'marked-extended-tables' = {};

declare module 'marked-extended-tables';

type Leaf = {
	leaf: string;
	position: number;
};

type RouteItem = {
	label: string;
	position: number;
	items?: RouteItem[];
	hasRootDoc?: boolean;
	path?: string;
	leaves?: Leaf[];
};

type FullPathListType = {
	title: string;
	path: string;
};

type SvgOption = {
	viewBox: string;
};

type SvgPathType = {
	svg: SvgOption;
	paths: string[];
};

type HeadingType = {
	level: number;
	title: string;
};

type MetadataType = {
	title: string;
	sidebar_position?: string;
	headings?: Array<HeadingType>;
};

type BookmarkType = {
	id: number;
	title: string;
	level: number;
};
type VariableType = {
	name: string;
	type: string;
	label: string;
	value: string;
	default?: string;
	placeholder?: string;
};

type TagIndexListType = {
	index: number;
	tag: string;
	link?: string;
};

type DeepDaoData = {
	isActive: boolean;
	isSmartContract: boolean;
	score: number;
	votes: number;
	proposals: number;
	rank: number;
	relativeScore: number;
};
