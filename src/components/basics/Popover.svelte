<script lang="ts" context="module">
	import { computePosition, autoPlacement, type ComputePositionReturn } from '@floating-ui/dom';

	export function popoverDirective(
		node: HTMLElement,
		{
			popoverId,
			placement,
			checkNecessary = false
		}: {
			popoverId: number;
			placement: 'left' | 'right' | 'top' | 'bottom';
			checkNecessary: boolean;
		}
	) {
		const popoverRef = document.getElementById(`popover-${popoverId}`);

		if (checkNecessary && !(node.offsetWidth < node.scrollWidth)) return;

		const showPopoverEvent = new CustomEvent('showPopover', node as CustomEventInit<unknown>);
		const hidePopoverEvent = new CustomEvent('hidePopover', node as CustomEventInit<unknown>);

		// NOTE: What is this currentId? Is it just me, or isn't it completely unnecessary as first thing in togglePopover we set currentId = id?
		let currentId = 0;
		let popoverShow = false;
		// Get the popover element from popover ID
		const wrapperRef = node;

		function setPosition({ x, y, strategy }: ComputePositionReturn) {
			Object.assign(popoverRef.style, {
				position: strategy,
				left: `${x}px`,
				top: `${y}px`
			});
		}

		async function togglePopover(newState?: boolean) {
			const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
			currentId = id;
			// NOTE: why are we checking if newState is bool? Isn't it always?
			if (typeof newState === 'boolean') {
				if (newState) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					const result = await computePosition(wrapperRef, popoverRef, {
						middleware: [autoPlacement()],
						placement
					});
					setPosition(result);
					wrapperRef.dispatchEvent(showPopoverEvent);
				}
				if (id === currentId) {
					popoverShow = !!newState;
					if (newState) {
						wrapperRef.dispatchEvent(showPopoverEvent);
					} else {
						wrapperRef.dispatchEvent(hidePopoverEvent);
					}
				}
			} else if (popoverShow) {
				popoverShow = false;
				wrapperRef.dispatchEvent(hidePopoverEvent);
			} else {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				const result = await computePosition(wrapperRef, popoverRef, {
					middleware: [autoPlacement()],
					placement
				});
				setPosition(result);
				if (id === currentId) {
					popoverShow = true;
					wrapperRef.dispatchEvent(showPopoverEvent);
				}
			}
		}

		function show() {
			togglePopover(true)
				.then(() => {
					popoverRef.style.visibility = 'visible';
				})
				.catch((e) => console.log(e));
		}

		function hide() {
			togglePopover(false)
				.then(() => {
					popoverRef.style.visibility = 'hidden';
				})
				.catch((e) => console.log(e));
		}

		node.addEventListener('mouseenter', show);
		node.addEventListener('mouseleave', hide);
		node.addEventListener('touchstart', show);

		return {
			destroy() {
				node.removeEventListener('mouseenter', show);
				node.removeEventListener('mouseleave', hide);
				node.removeEventListener('touchstart', show);
			}
		};
	}
</script>

<script lang="ts">
	export let message = '';
	export let placement: 'left' | 'right' | 'top' | 'bottom' = 'bottom';
	export let maxWidth = '200px';
	export let minWidth = '50px';
	export let nowrap = false;
	export let actionMessage = '';
	export let onClick: () => void = () => {
		return;
	};
	export let disabled = false;

	const popoverId = Math.random() * Number.MAX_SAFE_INTEGER;

	let showActionMessage = false;
	const handleClick = () => {
		onClick && onClick();
		if (actionMessage) {
			showActionMessage = true;

			setTimeout(() => (showActionMessage = false), 2000);
		}
	};

	$: style = `--maxWidth: ${maxWidth}; --minWidth: ${minWidth};`;
</script>

<span
	class="wrapper"
	use:popoverDirective={{ placement, popoverId, checkNecessary: disabled }}
	on:click|stopPropagation={handleClick}
	on:keydown
>
	<slot />
	<div {style} id="popover-{popoverId}" class="popover">
		<slot name="content" />
		{#if message}
			<p class="message" class:nowrap class:hidden={showActionMessage}>{@html message}</p>
		{/if}
		{#if showActionMessage}
			<p class="action-message" class:nowrap>{@html actionMessage}</p>
		{/if}
	</div>
</span>

<style>
	.message {
		font-weight: 300;
		font-size: 12px;
		color: var(--text-primary);
		line-height: 1.2;
		margin: 0;
		text-align: left;
		text-transform: none;
	}
	.popover {
		visibility: hidden;
		left: 0;
		top: 0;
		position: absolute;
		left: 0;
		top: 0;
		max-width: var(--maxWidth);
		background: var(--background-l0);
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
		transition: visibility 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
		padding: 10px;
		z-index: 999;
		white-space: normal;
		text-transform: none;
	}
	.nowrap {
		white-space: nowrap;
	}

	.action-message {
		font-weight: 300;
		font-size: 12px;
		color: var(--text-primary);
		line-height: 1.2;
		margin: 0;
		text-align: center;
		text-transform: none;
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 10px;
		top: 0;
	}
</style>
