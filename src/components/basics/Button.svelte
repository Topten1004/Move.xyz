<button {...$$props} on:click> <slot /> </button>

<style>
	button {
		background-color: var(--background-brand-primary);
		border: 1px solid var(--background-brand-primary);
		border-radius: 0.4rem;
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 700;
		line-height: 1.5;
		padding: 0.375rem 1rem;
		margin: 0.5rem 1rem;
		text-align: center;
		transition-duration: 200ms;
		transition-property: color, background, border-color;
		-webkit-user-select: none;
		user-select: none;
		white-space: nowrap;
		vertical-align: middle;
		color: var(--text-secondary);
		text-decoration: none;
	}
</style>
