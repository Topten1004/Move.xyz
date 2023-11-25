<script lang="ts">
	export let size = '1rem';
	export let position = '1rem';
	export let color = '--text-primary';

	$: style = `--size: ${size}; --position: ${position}; --color: var(${color})`;
</script>

<div role="button" class="close" aria-label="Close" {style} on:click on:keydown />

<style>
	.close {
		position: absolute;
		z-index: 1000;
		top: var(--position);
		right: var(--position);
		margin: 0;
		padding: 0;
		width: calc(var(--size) * 1.5);
		height: calc(var(--size) * 1.5);
		transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
			background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
		-webkit-appearance: none;
	}

	.close:before,
	.close:after {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		width: var(--size);
		height: 1px;
		background: var(--color);
		transform-origin: center;
		transition: height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
			background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
	}

	.close:before {
		-webkit-transform: translate(0, -50%) rotate(45deg);
		-moz-transform: translate(0, -50%) rotate(45deg);
		transform: translate(0, -50%) rotate(45deg);
		left: calc(var(--size) * 0.25);
	}

	.close:after {
		-webkit-transform: translate(0, -50%) rotate(-45deg);
		-moz-transform: translate(0, -50%) rotate(-45deg);
		transform: translate(0, -50%) rotate(-45deg);
		left: calc(var(--size) * 0.25);
	}

	.close:hover {
		background: var(--icon-action-primary);
	}

	.close:hover:before,
	.close:hover:after {
		height: 2px;
		background: white;
	}

	.close:focus {
		border-color: #3399ff;
		box-shadow: 0 0 0 2px #3399ff;
	}

	.close:active {
		transform: scale(0.9);
	}

	.close:hover,
	.close:focus,
	.close:active {
		outline: none;
	}
</style>
