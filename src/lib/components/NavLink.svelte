<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface NavLinkProps extends HTMLAnchorAttributes {
		children: Snippet;
	}
	let { children, ...rest }: NavLinkProps = $props();
</script>

<a {...rest}>
	{@render children()}
</a>
