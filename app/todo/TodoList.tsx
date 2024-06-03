"use client"
import React, { useState, useEffect } from "react"

import { Todo } from "@/app/types"
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from "@/app/lib/api"
import TodoItem from "./todoItem"

const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [newTodo, setNewTodo] = useState<string>("")

	const handleAddTodo = async () => {
		const todo = await addTodo(newTodo)
		setTodos([...todos, todo])
		setNewTodo("")
	}

	const handleToggleTodo = async (id: string) => {
		const updatedTodo = await toggleTodo(id)
		setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)))
	}

	const handleDeleteTodo = async (id: string) => {
		console.log(id)
		await deleteTodo(id)
		setTodos(todos.filter((todo) => todo._id !== id))
	}

	useEffect(() => {
		const getTodos = async () => {
			const todos = await fetchTodos()
			setTodos(todos)
		}
		getTodos()
	}, [])

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold text-green-700 mb-6 text-center">Todo List</h1>
			<div className="flex items-center mb-6">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					className="border p-2 flex-grow mr-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
				/>
				<button
					onClick={handleAddTodo}
					className="bg-green-500 text-white p-2 rounded-md shadow-sm hover:bg-green-600"
				>
					Add
				</button>
			</div>
			<div>
				<ul className="space-y-4">
					{todos.map((todo) => (
						<TodoItem
							key={todo._id}
							todo={todo}
							onToggle={handleToggleTodo}
							onDelete={handleDeleteTodo}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}

export default TodoList
