<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { value = $bindable(), ...rest }: HTMLInputAttributes = $props();
</script>

<input type="text" placeholder="What needs to be done?" bind:value {...rest} />

<style>
	input {
		width: 100%;
	}
</style>
