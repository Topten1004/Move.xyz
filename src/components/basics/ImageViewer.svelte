<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import CloseButton from './CloseButton.svelte';

	export let src: string;

	export let close: () => void;

	onMount(() => {
		document.body.style.overflow = 'hidden';
	});

	onDestroy(() => {
		document.body.style.overflow = '';
	});

	let zoom = 1;
	let rotation = 0;
	let dragX = 0;
	let dragY = 0;
	let dragInitX = 0;
	let dragInitY = 0;

	const handleWheel = (e: WheelEvent) => {
		if (e.deltaY > 0) {
			zoom > 1 && (zoom -= 1);
		} else {
			zoom += 1;
		}
	};

	const handleDragOver = (e: DragEvent) => {
		dragX = e.clientX - dragInitX;
		dragY = e.clientY - dragInitY;
	};
	const handleDragStart = (e: DragEvent) => {
		const img = new Image();
		img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
		e.dataTransfer?.setDragImage(img, 0, 0);
		dragInitX = e.clientX;
		dragInitY = e.clientY;
	};
	const handleDragEnd = () => {
		dragX = 0;
		dragY = 0;
	};

	$: imageStyle = `transform: scale3d(${zoom}, ${zoom}, 1) rotate(${rotation}deg);`;
	$: previewStyle = `transform: translate3d(${dragX}px, ${dragY}px, 0px);`;
</script>

<div class="wrapper" on:wheel={handleWheel}>
	<ul class="controls">
		<li class="close" on:click={close} on:keydown>
			<CloseButton size="16px" position="0" color="--icon-over-action-primary" />
		</li>
		<li on:click={() => (zoom += 1)} on:keydown>
			<!-- TODO get svgs -->
			<!-- <Icon name="zoomIn" /> -->
			🔎
		</li>
		<li on:click={() => (zoom -= 1)} class:disabled={zoom === 1} on:keydown>
			<!-- <Icon name="zoomOut" /> -->
			⊖
		</li>
		<li on:click={() => (rotation += 90)} on:keydown>
			<!-- <Icon name="rotateRight" /> -->
			▶
		</li>
		<li on:click={() => (rotation -= 90)} on:keydown>
			<!-- <Icon name="rotateLeft" /> -->
			◀
		</li>
	</ul>
	<div class="image-preview" on:click={close} style={previewStyle} on:keydown>
		<object
			data={src}
			alt=""
			title="Content preview"
			style={imageStyle}
			on:dragover={handleDragOver}
			on:dragstart={handleDragStart}
			on:dragend={handleDragEnd}
		/>
	</div>
</div>

<style>
	.wrapper {
		position: fixed;
		top: 0;
		left: 0;
		overflow: visible;
		outline: 0;
		z-index: 1080;
		height: 100%;
		width: 100%;
		background-color: #00000073;
	}

	.controls {
		z-index: 1081;
		display: flex;
		width: 100%;
		position: absolute;
		align-items: center;
		top: 0;
		right: 0;
		z-index: 1;
		background: #0000001a;
		color: var(--icon-over-action-primary);
		list-style: none;
		font-size: 18px;
		margin: 0;
		padding: 0;
		flex-direction: row-reverse;
	}

	.controls li {
		margin-left: 12px;
		padding: 12px;
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	.controls .close {
		position: relative;
		margin-right: 12px;
	}
	.controls .disabled {
		color: #ffffff40;
		pointer-events: none;
	}

	.image-preview {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: visible;
	}

	.image-preview::before {
		display: inline-block;
		width: 1px;
		height: 50%;
		margin-right: -1px;
		content: '';
	}

	object {
		transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		max-width: 100%;
		max-height: 100%;
		vertical-align: middle;
		cursor: grab;
		user-select: none;
		pointer-events: auto;
	}
</style>
