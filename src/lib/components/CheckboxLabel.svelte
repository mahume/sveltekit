<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface CustomProps extends HTMLInputAttributes {
		id: string;
	}
	let { id, checked, ...rest }: CustomProps = $props();
</script>

<label for={id}></label>
<input type="checkbox" {id} bind:checked {...rest} />
