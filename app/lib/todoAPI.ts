import { Todo } from "@/app/types"

const API_URL = "http://localhost:1000/todo"

export const fetchTodos = async (): Promise<Todo[]> => {
	const response = await fetch(`${API_URL}/`)
	const todos = await response.json()
	return todos
}

export const addTodo = async (text: string): Promise<Todo> => {
	const response = await fetch(`${API_URL}/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ text })
	})
	const todo = await response.json()
	return todo
}

export const toggleTodo = async (id: string): Promise<Todo> => {
	const response = await fetch(`${`${API_URL}/`}/${id}`, {
		method: "PUT"
	})
	const todo = await response.json()
	return todo
}

export const deleteTodo = async (id: string): Promise<{ message: string }> => {
	const response = await fetch(`${`${API_URL}/`}/${id}`, {
		method: "DELETE"
	})
	const result = await response.json()
	return result
}
