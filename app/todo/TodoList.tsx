"use client"
import React, { useState, useEffect } from "react"
import { Todo } from "@/app/types"
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from "@/app/lib/api"
import TodoItem from "./TodoItem"

const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [newTodo, setNewTodo] = useState<string>("")

	useEffect(() => {
		const getTodos = async () => {
			const todos = await fetchTodos()
			setTodos(todos)
		}
		getTodos()
	}, [])

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

	return (
		<div>
			<div className="flex items-center mb-6">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					className="border p-2 flex-grow mr-2 rounded-md shadow-sm"
				/>
				<button
					onClick={handleAddTodo}
					className="bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-600"
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
