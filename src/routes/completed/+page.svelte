<script lang="ts">
	import FormInput from '$lib/components/partials/FormInput.svelte';
	import TodoList from '$lib/components/partials/TodoList.svelte';
	import Toolbar from '$lib/components/partials/Toolbar.svelte';
	import { getTodosState } from '$lib/stores/todos.svelte.ts';

	let todosState = getTodosState();

	let hasTodos = $derived(todosState.todos.length > 0);
	let completedTodos = $derived(todosState.todos.filter((todo) => todo.isCompleted));
	let activeTodos = $derived(todosState.todos.filter((todo) => !todo.isCompleted));

	let remainingTodos = $derived(activeTodos.length);
	let hasCompletedTodos = $derived(remainingTodos > 0);

	function handleAddTodo(e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) {
		e.preventDefault();
		todosState.createTodo();
	}

	function handleClearTodos() {
		todosState.deleteCompletedTodos();
	}

	function handleDeleteItem(id: string) {
		todosState.deleteTodo(id);
	}

	function handleToggleItem(id: string) {
		todosState.toggleTodo(id);
	}

	function handleToggleAll() {
		todosState.toggleAllTodos();
	}
</script>

<FormInput
	onsubmit={handleAddTodo}
	onInputAction={handleToggleAll}
	bind:value={todosState.todoText}
/>
<TodoList todos={completedTodos} onToggleItem={handleToggleItem} onDeleteItem={handleDeleteItem} />
{#if hasTodos}
	<Toolbar infoText={remainingTodos} onAction={hasCompletedTodos ? handleClearTodos : null} />
{/if}
