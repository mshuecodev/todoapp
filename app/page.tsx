import Link from "next/link"

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-green-50 p-8">
			<div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
				<h1 className="text-4xl font-bold text-green-700 mb-8">WELCOME</h1>
				<nav className="text-lg text-green-600">
					<ul>
						<li className="py-4">
							<Link
								className="hover:text-green-800"
								href="/todo"
							>
								TODO LIST
							</Link>
						</li>
						<li className="py-4">
							<Link
								className="hover:text-green-800"
								href="/weather"
							>
								WEATHER
							</Link>
						</li>
						<li className="py-4">
							<Link
								className="hover:text-green-800"
								href="/calculator"
							>
								CALCULATOR
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</main>
	)
}
