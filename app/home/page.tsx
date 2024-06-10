import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
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
						<li className="py-4">
							<Link
								className="hover:text-green-800"
								href="/trackingmoney"
							>
								TRACKING MONEY
							</Link>
						</li>
						<li className="py-4">
							<Link
								className="hover:text-green-800"
								href="/contact"
							>
								CONTACT APP
							</Link>
						</li>
						<li className="py-4">
							<Link
								className="hover:text-green-800"
								href="/chats"
							>
								CHAT APP
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</main>
	)
}

export const getSerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: {
				destination: "/auth/signin",
				permanent: false
			}
		}
	}

	return {
		props: { session }
	}
}