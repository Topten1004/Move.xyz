<script lang="ts">
	import Card from './basics/Card.svelte';
	import Footer from './layout/Footer.svelte';
</script>

<div class="hero hero--secondary">
	<div class="container">
		<div class="box">
			<div class="row" style="max-width: 800px; margin: auto; align-items: center;">
				<div class="daolabs-logo">
					<img
						src="/images/daolabs/daolabs-Legal-Tools.svg"
						alt="/images/daolabs/daolabs-Legal-Tools"
						width="450px"
					/>
				</div>
				<div>
					<h1>MOVEMENT 🔥 RESOURCES</h1>
					<h2>DAO-KIT LEGAL TEMPLATES</h2>
					<p style="font-size: 1rem">
						Entity formation templates for DAOs. Legal templates accessible for Treasury creators,
						DAOs, and NFT Creators.
					</p>
					<p style="font-size: 1rem">
						Designed to be used with our tools: Juicebox native <a
							href="https://daolabs-nft-tooling.on.fleek.co/"
							>treasuries, rich creation tooling for diverse NFT collections, and more.</a
						>
					</p>
					<br />
					<div class="row">
						<a
							class="button button--primary"
							href="/legal/intro/start.md"
							target="_blank"
							style="margin-bottom: 5px">LFG</a
						>
						<a class="button button--link" href="https://move.xyz/" style="margin-bottom: 5px"
							>Start a Movement →</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="row cards">
			<Card
				title="TREASURIES"
				desc="Start a Movement by creating a community Treasury, accelerate funding with our rich Collections."
				button="START A MOVEMENT"
				href="https://move.xyz"
			/>
			<Card
				title="COLLECTIONS"
				desc="Create and launch your own NFT Collection with our rich creation tooling."
				button="MINT COLLECTION"
				href="https://move.xyz/user/collections"
			/>
			<Card
				title="CORPORATE TOOL"
				desc="Used to the status quo? Squinty-eyes-towards-crypto? No problemo, we have vanilla corp templates too."
				button="CORP-TOOL"
				href="/legal/ccorp/README.md"
			/>
		</div>
		<Footer />
	</div>
</div>

<style>
	.container {
		margin: 100px auto;
		max-width: 1320px;
	}
	.box {
		background-color: var(--background-brand-secondary);
		color: black;
		max-width: 1320px;
		margin: 2rem auto;
		padding: 4rem 2rem;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
	.daolabs-logo {
		max-height: 250px;
		margin-right: 75px;
	}
	h1 {
		font-size: 3rem;
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
		transition-duration: 200ms;
		transition-property: color, background, border-color;
		-webkit-user-select: none;
		user-select: none;
		white-space: nowrap;
		vertical-align: middle;
		color: var(--text-secondary);
		text-decoration: none;
	}
	.button--link {
		border: 0;
		background: transparent;
		color: var(--background-brand-primary);
		text-decoration: none;
	}
	.button--link:hover {
		text-decoration: underline;
	}
	@media screen and (max-width: 997px) {
		.cards {
			display: flex;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 650px) {
		.container {
			margin: 50px auto;
		}
		.daolabs-logo {
			margin-right: 25px;
		}
		h1 {
			font-size: 2rem;
		}
		.box {
			display: flex;
			flex-direction: column;
			background-color: var(--background-brand-secondary);
			margin: 3rem 0.5rem !important;
			padding: 1.5rem 1rem;
			border-radius: 10px;
		}
		.cards {
			display: flex;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 500px) {
		.container {
			margin: 120px auto;
		}
		.row {
			display: flex;
			flex-direction: column;
		}
		h1 {
			font-size: 1.5rem;
		}
		.daolabs-logo {
			width: 160px;
			margin: auto;
		}
	}
</style>
