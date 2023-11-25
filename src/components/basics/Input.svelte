<script lang="ts">
	export let label: string;
	export let type: string;
	export let value: string | number | undefined = undefined;

	let ref: HTMLInputElement;
	let invalid: boolean | string;

	// NOTE: this is a hack to get dynamic typing
	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}

	function check() {
		if (!ref.checkValidity()) {
			invalid = ref.validationMessage;
		} else {
			invalid = false;
		}
	}
</script>

<label for={$$props?.name}>
	{label}
</label>

<input use:typeAction bind:this={ref} bind:value {...$$props} on:blur={check} />
{#if invalid}
	<span class="invalid">
		{invalid}
	</span>
{/if}

<style>
	input {
		margin-bottom: 0.5rem;
		background: transparent;
		border: 1px solid var(--stroke-primary);
		transition: border-color 120ms ease-out;
		padding: 4px 11px;
		line-height: 1.5715;
		font-weight: 300;
	}

	span {
		margin-bottom: 0.5rem;
		color: var(--text-warn);
	}
</style>
