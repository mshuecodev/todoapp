import Link from "next/link"

export default function Home() {
	return (
		// <main className="flex min-h-screen flex-col items-center justify-between p-24">
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold">Welcome to the ToDo App</h1>
			<Link
				href="/todo"
				className="text-blue-500 underline"
			>
				Go to Todo List
			</Link>
		</div>
		// </main>
	)
}
