import React from "react"
import Link from "next/link"

import TodoList from "./todoList"

function TodoPage() {
	return (
		<div className="container mx-auto p-4 max-w-md mt-10 bg-white rounded-lg shadow-lg">
			<Link
				className="text-green-600 hover:text-green-800 underline block mb-4"
				href="/"
			>
				Back to Home
			</Link>
			<TodoList />
		</div>
	)
}

export default TodoPage
