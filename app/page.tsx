import Link from "next/link"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="container mx-auto p-4">
				<h1 className="text-3xl font-bold">WELCOME</h1>
				<ul
					role="list"
					className="divide-y divide-gray-100"
				>
					<li className="flex justify-between gap-x-6 py-2">
						<Link
							href="/todo"
							className="text-blue-500 underline"
						>
							TODO LIST
						</Link>
					</li>
					<li className="flex justify-between gap-x-6 py-2">
						<Link
							href="/weather"
							className="text-blue-500 underline"
						>
							WEATHER
						</Link>
					</li>
				</ul>
			</div>
		</main>
	)
}
