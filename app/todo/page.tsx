import React from "react"
import TodoList from "./todoList"

function TodoPage() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-4xl font-bold mb-6 text-center">Todo List</h1>
			<TodoList />
		</div>
	)
}

export default TodoPage
