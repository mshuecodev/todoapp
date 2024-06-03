import { Todo } from "@/app//types"

interface TodoItemProps {
	todo: Todo
	onToggle: (id: string) => void
	onDelete: (id: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
	return (
		<li className="flex justify-between items-center bg-green-100 p-4 rounded-md shadow-sm">
			<span className={`${todo.completed ? "line-through text-gray-400" : ""} flex-grow`}>{todo.text}</span>
			<div className="flex space-x-2">
				<button
					onClick={() => onToggle(todo._id)}
					className={`p-2 rounded-md shadow-sm ${todo.completed ? "bg-yellow-500 text-white hover:bg-yellow-600" : "bg-green-500 text-white hover:bg-green-600"}`}
				>
					{todo.completed ? "Undo" : "Complete"}
				</button>
				<button
					onClick={() => onDelete(todo._id)}
					className="bg-red-500 text-white p-2 rounded-md shadow-sm hover:bg-red-600"
				>
					Delete
				</button>
			</div>
		</li>
	)
}
