<script lang="ts">
	import { copyToClipboard } from '$utils/clipboard';
	import Icon from './Icon.svelte';
	import Popover from './Popover.svelte';
	import SlideUpInfo from './SlideUpInfo.svelte';

	export let target: string;

	const handleClick = async () => {
		await copyToClipboard(target);
	};
</script>

<Popover placement="left" message="Copy to clipboard" minWidth="100px">
	<SlideUpInfo onClick={handleClick}>
		<span class="copy">
			<Icon name="copy" style="transition: unset" />
		</span>
	</SlideUpInfo>
</Popover>

<style>
	.copy {
		cursor: pointer;
	}
</style>
