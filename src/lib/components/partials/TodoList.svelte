<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import CheckboxLabel from '$lib/components/CheckboxLabel.svelte';
	import Close from '$lib/components/icons/Close.svelte';
	import type { Todo } from '$lib/types';

	type TodoListProps = {
		todos: Array<Todo>;
		onToggleItem: (id: string) => void;
		onDeleteItem: (id: string) => void;
	};
	let { todos, onToggleItem, onDeleteItem }: TodoListProps = $props();
</script>

<ul>
	{#each todos as todo}
		<li>
			<CheckboxLabel
				id={`${todo.text}_${todo.id}`}
				checked={todo.isCompleted}
				onchange={() => onToggleItem(todo.id)}
				name="todo_item"
				value={todo.text}
			/>
			<p class:completed={todo.isCompleted}>{todo.text}</p>
			<Button onclick={() => onDeleteItem(todo.id)}>
				<Close />
			</Button>
		</li>
	{/each}
</ul>

<style>
	li {
		display: flex;

		p {
			flex: 1;
		}
		p.completed {
			text-decoration: line-through;
		}
	}
</style>
