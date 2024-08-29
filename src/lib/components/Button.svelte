<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface ButtonProps extends HTMLButtonAttributes {
		children: Snippet;
	}

	let { children, ...rest }: ButtonProps = $props();
</script>

<button {...rest}>
	{@render children()}
</button>
