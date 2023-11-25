<script lang="ts">
	/* eslint-disable @typescript-eslint/no-explicit-any */
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Slugger from 'github-slugger';
	import { writable } from 'svelte/store';

	// TODO: Create custom markdown to docx converter for docx download, where https://www.npmjs.com/package/docx is used after markdown is generated

	import { marked } from 'marked';
	import extendedTables from 'marked-extended-tables';
	import admonition from 'marked-admonition-extension';

	import Button from './basics/Button.svelte';
	import Input from './basics/Input.svelte';
	import Icon from './basics/Icon.svelte';
	import { formboxCollapsed, sidebarCollapsed } from '../store';
	import './article.css';
	import type {
		RouteItem,
		FullPathListType,
		MetadataType,
		BookmarkType,
		VariableType
	} from 'src/app';
	import { downloadPdf, downloadWord, downloadMd } from '$functions/download';

	marked.use(admonition);
	marked.use(extendedTables());

	export let data: { docs: RouteItem[]; fullPathList: Array<FullPathListType> };
	const fullPathList = data.fullPathList;

	let path: string;
	let rendered: any;
	let metadata: MetadataType = {};
	let bookmarks: Array<BookmarkType> = [];
	let currentBookmark: string;
	let variables: any;
	let contentRef: HTMLDivElement;
	let prevNode: FullPathListType;
	let nextNode: FullPathListType;
	let overlap = false;
	let showForm = false;
	let isDraft = true;

	let historyPath: string[];
	$: if (browser) {
		historyPath = JSON.parse(localStorage.getItem('history') as string);
	}

	function onscroll() {
		const sections = document.querySelectorAll('h1, h2, h3');

		sections.forEach((section) => {
			const sectionTop = (section as HTMLElement).offsetTop;
			const scrollY = window.scrollY;
			if (scrollY >= sectionTop - 20) {
				currentBookmark = `#${section.getAttribute('id') || ''}`;
			}
		});
	}

	async function loadData(path: string) {
		/*
		NOTE: The dynamic import *must* have an extension, otherwise it won't load.
		Keep this in mind for svx files, i.e. mixed svelte and markdown.
		*/
		const pathWithoutExtension = path.substring(1).replace(/\.[^/.]+$/, '');
		const globs = import.meta.glob('../docs/**/*.{md,svx,json}');
		/*
		NOTE: this worked locally await import('..docs/' + pathWithoutExtension + '.md');
		not below i.e. the string literal, but above, the import.meta.glob - works in production.
		Looks insane.
		*/
		let imported: any;
		let importedVariables: any;
		try {
			imported = await globs?.[`../docs/${pathWithoutExtension}.md`]();
			metadata = imported.metadata;
			rendered = imported.default;
			isDraft = true;
		} catch (e) {
			console.info('No markdown file found for ' + pathWithoutExtension);
		}
		try {
			importedVariables = await globs?.[`../docs/${pathWithoutExtension}.json`]();
			// TODO: add a value key to the importedVariables object.
			variables = writable(importedVariables.default);
			showForm = true;
		} catch (e) {
			variables = undefined;
			showForm = false;
		}
		// Parse the metadata.headings with rehype's slug to get the bookmarks.
		const slugger = new Slugger();
		bookmarks =
			metadata.headings?.map((heading: { title: string; level: number }) => {
				const re = /<[a-z ="\/]*>/gm;
				let title = heading.title.replaceAll(re, '');
				const slug = slugger.slug(title);
				return {
					id: slug,
					title: title,
					level: heading.level
				};
			}) || [];

		const slug = $page?.params.category;
		if (slug && data && data.docs.length > 0) {
			const currentIndex = data.docs.findIndex((item) => item.path === slug);
			historyPath[currentIndex] = path;
			localStorage.setItem('history', JSON.stringify(historyPath));
		}
	}

	async function resetDocument() {
		// TODO: Dry this out, it's copied from above
		rendered = undefined;
		const pathWithoutExtension = path.substring(1).replace(/\.[^/.]+$/, '');
		const globs = import.meta.glob('../docs/**/*.{md,svx,json}');

		let imported: any;
		try {
			imported = await globs?.[`../docs/${pathWithoutExtension}.md`]();
			metadata = imported.metadata;
		} catch (e) {
			console.log(e);
		}
		rendered = imported.default;

		const slugger = new Slugger();
		bookmarks =
			metadata.headings?.map((heading: { title: string; level: number }) => {
				const re = /<[a-z ="\/]*>/gm;
				let title = heading.title.replaceAll(re, '');
				const slug = slugger.slug(title);
				return {
					id: slug,
					title: title,
					level: heading.level
				};
			}) || [];
	}

	async function updateVariables() {
		await resetDocument();
		$formboxCollapsed = !$formboxCollapsed;
		if (contentRef) {
			$variables.forEach((variable: VariableType) => {
				if (variable.default) {
					if (variable.name === 'Entity-name') {
						contentRef.innerHTML = contentRef.innerHTML.replace(
							new RegExp(`\\[${variable.name}\\]`, 'g'),
							variable.default.toUpperCase()
						);
					}
					contentRef.innerHTML = contentRef.innerHTML.replace(
						new RegExp(`\\[${variable.name}\\]`, 'g'),
						variable.default
					);
					bookmarks.forEach((bookmark: BookmarkType) => {
						bookmark.title = bookmark.title.replace(
							new RegExp(`\\[${variable.name}\\]`, 'g'),
							variable.default
						);
					});
				}
			});
			bookmarks = [...bookmarks];
		}
		isDraft = false;
	}

	async function createDownloadLinksForDOCX() {
		const anchors = document.querySelectorAll('#content a');
		const docxLinks = Array.from(anchors).filter((anchor: any) => anchor.href.endsWith('.docx'));
		if (!docxLinks.length) {
			return;
		}
		const globs = import.meta.glob('../docs/**/*.docx', { as: 'url' });
		// We must loop as we can't await inside a forEach loop.
		for (let i = 0; i < docxLinks.length; i++) {
			const anchor = docxLinks[i] as HTMLAnchorElement;
			if (anchor.href.endsWith('.docx')) {
				const origin = $page.url.origin;
				const pathWithoutOrigin = anchor.href.substring(origin.length);
				const pathWithoutExtension = pathWithoutOrigin.substring(1).replace(/\.[^/.]+$/, '');
				const imported = await globs?.[`../docs/${pathWithoutExtension}.docx`]();
				anchor.download = anchor.href.split('/').pop() || 'document.docx';
				anchor.href = imported;
			}
		}
	}

	const handlePDFDownload = async () => {
		await downloadPdf(metadata.title, contentRef.innerHTML);
	};

	const handleWordDownload = async () => {
		await downloadWord(path, $variables);
	};

	const handleMarkdownDownload = async () => {
		await downloadMd(path, $variables);
	};

	const handleSharing = () => {
		console.log(
			`Unimplemented. Will allow form generated file to be shared. Requires caching output to some location .`
		);
	};
	const handleConfig = () => {
		console.log(
			`Unimplemented. Will allow for a user account to be created, with an index of all generated files. For paralegal or an onboarding resource.`
		);
	};

	const handleBookmarkActive = (e: any) => {
		currentBookmark = e.target.id;
	};

	function getMarginLeft(level: number) {
		return `margin-left: ${level - 1 * 1.6}rem`;
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollFunction = () => {
		if (overlap) {
			const scrollButton = document.getElementsByClassName('scroll-to-top')[0] as HTMLElement;
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				scrollButton.style.display = 'flex';
			} else {
				scrollButton.style.display = 'none';
			}
		}
	};

	$: if (browser) {
		path = $page?.url.pathname;
		loadData(path);
		const currentIndex = fullPathList.findIndex(
			(el: FullPathListType) => el.path === path.substring(1)
		);
		prevNode = {
			title: fullPathList[Math.max(currentIndex - 1, 0)].title,
			path: '/' + fullPathList[Math.max(currentIndex - 1, 0)].path
		};
		nextNode = {
			title: fullPathList[Math.min(currentIndex + 1, fullPathList.length - 1)].title,
			path: '/' + fullPathList[Math.min(currentIndex + 1, fullPathList.length - 1)].path
		};

		window.onscroll = scrollFunction;
	}

	$: {
		if (contentRef) {
			createDownloadLinksForDOCX();
		}
	}
	$: if (contentRef && path) {
		setTimeout(() => {
			overlap =
				(document.querySelector('pre') && contentRef?.clientWidth + 700 > window.innerWidth) ||
				((contentRef?.clientWidth + 300 > window.innerWidth) as boolean);
		}, 100);
	}
</script>

<svelte:window on:scroll={onscroll} />

<article
	class:sidebarHidden={!$sidebarCollapsed}
	style="flex-direction: {overlap ? 'column-reverse' : 'row'};"
>
	<div>
		{#if showForm && !overlap}
			<div class="side" class:hidden={$formboxCollapsed}>
				<div class="variables">
					<h1>Variables</h1>
					{#each Object.keys($variables) as key}
						<Input
							{...$variables[key]}
							label={$variables[key].label}
							type={$variables[key].type}
							name={$variables[key].name}
							placeholder={$variables[key].placeholder}
							bind:value={$variables[key].default}
						/>
					{/each}
					<Button on:click={updateVariables}>Update document</Button>
				</div>
				{#if $formboxCollapsed}
					<div
						class="side-drawer"
						on:click={() => {
							$formboxCollapsed = !$formboxCollapsed;
						}}
						on:keydown
					>
						<Icon name="file-invoice-light" />
					</div>
				{:else}
					<div
						class="side-drawer"
						on:click={() => {
							$formboxCollapsed = !$formboxCollapsed;
						}}
						on:keydown
					>
						<Icon name="arrow" style="rotate: 90deg;" />
					</div>
				{/if}
			</div>
		{/if}
		{#if rendered}
			<div
				id="content"
				class:centerHeaders={metadata.center_headers}
				class:sidebarHidden={$sidebarCollapsed}
				class:formExpanded={$sidebarCollapsed && !$formboxCollapsed}
			>
				<div class="top-bar-icons">
					<div class="disabled" on:click={handleConfig} on:keydown>
						<Icon name="config" />
					</div>
					<div on:click={handlePDFDownload} on:keydown>
						<Icon name="file-pdf-thin" />
					</div>
					{#if showForm && isDraft}
						<div class="disabled">
							<Icon name="file-word-light" />
						</div>
					{:else}
						<div on:click={handleWordDownload} on:keydown>
							<Icon name="file-word-light" />
						</div>
					{/if}
					<div class="disabled">
						<Icon name="file-contract-light" />
					</div>
					<div on:click={handleMarkdownDownload} on:keydown>
						<Icon name="markdown" />
					</div>
					<div class="disabled" on:click={handleSharing} on:keydown>
						<Icon name="share" />
					</div>
				</div>
				<div bind:this={contentRef}>
					{#if metadata?.title}
						<h1>{metadata.title}</h1>
					{/if}
					<svelte:component this={rendered} />
				</div>
			</div>
			<div class="button-container">
				<div class="navigation-button">
					<a href={prevNode?.path} on:click|stopPropagation>
						Previous
						<span class="action-text">{prevNode?.title}</span>
					</a>
				</div>
				<div class="navigation-button next">
					<a href={nextNode?.path} on:click|stopPropagation>
						Next
						<span class="action-text">{nextNode?.title}</span>
					</a>
				</div>
			</div>
		{/if}
	</div>
	<nav
		class="side"
		style="
			border-left: {overlap ? '0' : '1px'} solid #eaeaea; 
			position: {overlap ? 'relative' : 'sticky'};
			top: {overlap ? '30px' : '70px'};
		"
	>
		{#each bookmarks as bookmark}
			<span>
				<a
					id="#{bookmark.id}"
					href="#{bookmark.id}"
					on:click={handleBookmarkActive}
					class:active={currentBookmark === `#${bookmark.id}`}
					style={getMarginLeft(bookmark.level)}
				>
					{bookmark.title}
				</a>
			</span>
		{/each}
	</nav>
	{#if overlap}
		{#if showForm}
			<div class="variables">
				<h1>Variables</h1>
				{#each Object.keys($variables) as key}
					<Input
						{...$variables[key]}
						label={$variables[key].label}
						type={$variables[key].type}
						name={$variables[key].name}
						placeholder={$variables[key].placeholder}
						bind:value={$variables[key].default}
					/>
				{/each}
				<Button on:click={updateVariables}>Update document</Button>
			</div>
		{/if}
		<div class="scroll-to-top" on:click={scrollToTop} on:keydown>🔝</div>
	{/if}
</article>

<style>
	article {
		width: 100%;
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	article > div:first-child {
		padding-bottom: 30px;
	}
	nav.side {
		display: flex;
		flex-direction: column;
		padding: 0.75rem 1rem;
		min-width: 200px;
		max-width: 250px;
		align-self: start;
		right: 0;
		overflow-y: scroll;
		height: calc(100vh - 100px);
	}
	nav.side::-webkit-scrollbar {
		display: none;
	}
	.side-drawer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 72px;
		width: 36px;
		font-size: 18pt;
		color: var(--text-header);
		border-radius: 0 36px 36px 0;
		background-color: rgb(254, 255, 254);
		box-shadow: 0 0 2px 2px rgb(221, 221, 221);
		position: relative;
		top: 9rem;
		left: 2px;
	}

	span {
		padding: 0.25rem;
	}

	a {
		text-decoration: none;
	}
	a:hover,
	a.active {
		color: #e83a00;
	}

	#content {
		max-width: 830px;
		padding: 1rem 2rem;
		word-break: break-word;
		margin-left: 50px;
		transition: all 0.5s;
	}
	#content.sidebarHidden {
		margin-left: 250px;
	}
	#content.formExpanded {
		margin-left: 500px;
	}

	.variables {
		display: flex;
		flex-direction: column;
		padding: 1rem calc(20px + 1rem);
		width: 400px;
		background: var(--background-l0);
		box-shadow: 5px 5px 5px 2px rgb(221, 221, 221);
	}
	div.side {
		display: flex;
		flex-direction: row;
		position: absolute;
		transition: all 0.5s;
		top: 0;
		z-index: 2;
	}
	div.side.hidden {
		margin-left: -460px;
	}

	.button-container {
		display: flex;
		gap: 16px;
		padding: 0 2rem;
	}

	.navigation-button {
		border-radius: 10px;
		border: 1px solid #eaeaea;
		padding: 8px;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		font-size: 12px;
		width: 50%;
	}
	.navigation-button > a {
		display: flex;
		flex-direction: column;
	}
	.next > a {
		align-items: flex-end;
	}
	.action-text {
		color: rgb(53, 120, 229);
		font-size: 16px;
		padding: 0;
	}
	.top-bar-icons {
		margin: 20px;
		height: 30px;
		display: flex;
		gap: 20px;
		flex-direction: row-reverse;
		font-size: 18pt;
	}
	.top-bar-icons > .disabled {
		color: grey;
		cursor: default;
	}
	.top-bar-icons > div {
		cursor: pointer;
	}
	.scroll-to-top {
		display: none;
		position: fixed;
		bottom: 2rem;
		right: 1rem;
		justify-content: center;
		align-items: center;
		height: 48px;
		width: 48px;
		font-size: 18pt;
		color: var(--text-header);
		border-radius: 100%;
		box-shadow: 0 0 2px 2px rgb(221 221 221);
		background-color: rgb(254, 255, 254);
		cursor: pointer;
	}
	@media (max-width: 1200px) {
		article {
			flex-direction: column-reverse;
			top: 64px;
			overflow-y: auto;
		}
		article.sidebarHidden {
			display: none;
		}
		nav.side {
			position: relative;
		}
		#content {
			overflow: initial;
			height: unset;
			margin-top: 4rem;
			margin-left: 0 !important;
			width: unset;
		}
		.side-drawer {
			display: none;
		}
		.variables {
			display: flex;
			flex-direction: column;
			padding: 1rem calc(20px + 1rem);
			width: calc(100% - 4rem);
			background: var(--background-l0);
			box-shadow: none;
		}
		div.side.hidden {
			position: relative;
			margin-left: 0;
		}
	}
</style>
