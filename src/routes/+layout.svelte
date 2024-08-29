<script>
	import { setTodosState } from '$lib/stores/todos.svelte.ts';

	setTodosState([]);
</script>

<div class="app">
	<header>
		<h1>todos</h1>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>Double-click to edit a todo</p>
		<p>Created by the TodoMVC Team</p>
		<p>Part of <a href="https://todomvc.com/">TodoMVC</a></p>
	</footer>
</div>

<style>
	.app {
		width: 100vw;
		height: 100vh;

		display: grid;
		grid-template-rows: 100px auto 1fr;
		grid-template-columns: 1fr 600px 1fr;
		grid-row-gap: 1rem;
		grid-template-areas:
			'. header .'
			'. main .'
			'. footer .';
		align-items: center;
		justify-items: center;
	}

	header {
		grid-area: header;
	}

	main {
		grid-area: main;
		width: 100%;
		height: 100%;
	}

	footer {
		grid-area: footer;
		align-self: flex-start;
	}
</style>
