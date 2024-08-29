<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	type FormInputProps = {
		onsubmit: (e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) => void;
		onInputAction: () => void;
		value: string;
	};
	let { onsubmit, onInputAction, value = $bindable() }: FormInputProps = $props();

	function handleInputButtonClick() {
		onInputAction();
	}
</script>

<form method="post" {onsubmit}>
	<button type="button" onclick={handleInputButtonClick}>^</button>
	<label for="todo"></label>
	<Input id="todo" name="todo" bind:value />
</form>

<style>
	form {
		width: 100%;
		display: flex;

		label {
			display: none;
		}
	}
</style>
