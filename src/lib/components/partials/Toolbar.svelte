<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
	import Button from '$lib/components/Button.svelte';
	import NavLink from '$lib/components/NavLink.svelte';

	type ToolbarProps = {
		infoText: number;
		onAction: (() => void) | null;
	};
	let { infoText: remainingTodos, onAction }: ToolbarProps = $props();

	function handleActionClick() {
		onAction?.();
	}
</script>

<div class="toolbar">
	<div class="info">
		<Badge remaining={remainingTodos} />
	</div>
	<nav>
		<NavLink href="/">Home</NavLink>
		<NavLink href="/active">Active</NavLink>
		<NavLink href="/completed">Completed</NavLink>
	</nav>
	<div class="action">
		{#if onAction}
			<Button onclick={handleActionClick}>Clear completed</Button>
		{/if}
	</div>
</div>

<style>
	.toolbar {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		grid-template-areas: 'info nav action';
	}
	.info {
		grid-area: info;
	}
	nav {
		grid-area: nav;
		justify-self: center;
	}
	.action {
		grid-area: action;
	}
</style>
