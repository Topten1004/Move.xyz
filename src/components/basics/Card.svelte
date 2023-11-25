<script lang="ts">
	export let title: string;
	export let desc: string;
	export let button: string;
	export let href: string;
</script>

<div class="card">
	<h3 style="margin: 0;">{title}</h3>
	<p>{desc}</p>
	<div class="button button--primary">
		<a {href} style="margin-bottom: 5px">{button} →</a>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		background-color: var(--background-brand-secondary);
		margin: 0.5rem !important;
		padding: 1.5rem 1rem;
		border-radius: 10px;
	}
	a {
		text-decoration: none;
		color: var(--text-secondary);
	}
	a:hover {
		color: var(--text-secondary);
	}
	p {
		height: 100%;
	}
	.button {
		background-color: var(--background-brand-primary);
		border: 1px solid var(--background-brand-primary);
		border-radius: 0.4rem;
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 700;
		line-height: 1.5;
		padding: 0.375rem 1.5rem;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
	}
	@media screen and (min-width: 997px) {
		.card {
			width: 100%;
		}
	}
</style>
