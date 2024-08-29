import type { Todo } from '$lib/types';
import { getContext, setContext } from 'svelte';

class TodosState {
	private _allToggled = $state(false);
	private _todos = $state<Todo[]>([]);
	private _todoFormInputText = $state('');

	constructor(todos: Todo[]) {
		this._todoFormInputText = '';
		this._todos = todos;
	}

	public get todoText() {
		return this._todoFormInputText;
	}
	public set todoText(value: string) {
		this._todoFormInputText = value;
	}
	public get todos() {
		return this._todos;
	}
	private set todos(items: Todo[]) {
		this._todos = items;
	}
	private get allToggled() {
		return this._allToggled;
	}
	private set allToggled(isToggled: boolean) {
		this._allToggled = isToggled;
	}

	public createTodo() {
		this.todos.push({
			id: crypto.randomUUID(),
			text: this.todoText,
			isCompleted: false
		});
		this.todoText = '';
	}

	public deleteTodo(id: string) {
		this.todos = this.todos.filter((item) => item.id !== id);
	}

	public deleteCompletedTodos() {
		this.todos = this.todos.filter(({ isCompleted }) => !isCompleted);
	}

	private findTodo(id: string) {
		return this.todos.find((todo) => todo.id === id);
	}

	public toggleTodo(id: string) {
		const todo = this.findTodo(id);
		if (todo) {
			this.updateTodo(id, {
				isCompleted: !todo.isCompleted
			});
		}
	}

	public toggleAllTodos() {
		this.todos.forEach(({ id }) => {
			console.log({ id, toggled: !this.allToggled });
			this.updateTodo(id, {
				isCompleted: !this.allToggled
			});
		});

		this.allToggled = !this.allToggled;
	}

	public updateTodo(id: string, fields: Partial<Omit<Todo, 'id'>>) {
		const todo = this.findTodo(id);
		if (todo) {
			Object.assign(todo, fields);
		}
	}
}

const TODOS_KEY = Symbol('TODOS');

export function setTodosState(todos: Array<Todo>) {
	return setContext(TODOS_KEY, new TodosState(todos));
}

export function getTodosState() {
	return getContext<ReturnType<typeof setTodosState>>(TODOS_KEY);
}
