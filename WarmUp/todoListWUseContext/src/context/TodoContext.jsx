import { createContext, useReducer } from "react";

export const TodoContext = createContext({
	allTodos: [],
	addTodo: () => {},
	editTodo: () => {},
	removeTodo: () => {},
});

function todoReducer(state, action) {
	const { type, payload } = action;
	const { id, newTodo } = payload;

	switch (type) {
		case "ADD_TODO": {
			return [...state, { id: Math.random(), isCompleted: false, ...newTodo }];
		}

		case "EDIT_TODO": {
			return state.map((todo) => {
				return todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo;
			});
		}

		case "REMOVE_TODO": {
			return state.filter((todo) => {
				return todo.id !== id;
			});
		}
	}

	return updatedState;
}

export default function TodoContextProvider({ children }) {
	const [allTodos, dispatch] = useReducer(todoReducer, []);

	function addTodo(newTodo) {
		dispatch({
			type: "ADD_TODO",
			payload: {
				newTodo: { ...newTodo },
			},
		});
	}

	function editTodo(id) {
		dispatch({
			type: "EDIT_TODO",
			payload: {
				id: id,
			},
		});
	}

	function removeTodo(id) {
		dispatch({
			type: "REMOVE_TODO",
			payload: {
				id: id,
			},
		});
	}

	const ctxValues = {
		allTodos: allTodos,
		addTodo: addTodo,
		editTodo: editTodo,
		removeTodo: removeTodo,
	};

	return (
		<TodoContext.Provider value={ctxValues}>{children}</TodoContext.Provider>
	);
}
