<script lang="ts">
	type ButtonProps = {
		remaining: number;
	};

	let { remaining }: ButtonProps = $props();
</script>

<span>{remaining} items left</span>
