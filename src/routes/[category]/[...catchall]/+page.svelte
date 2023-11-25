<script lang="ts">
	import Article from '$components/Article.svelte';
	import type { RouteItem, FullPathListType } from 'src/app';
	export let data: { docs: RouteItem[]; fullPathList: Array<FullPathListType> };
</script>

<Article {data} />
