"use client"

import Link from "next/link"

import withAuth from "@/app/components/withAuth"
import { signOut } from "firebase/auth"
import { auth } from "@/app/lib/firebaseConfig"

function Home() {
	const doSignOut = () => {
		signOut(auth)
			.then(() => {
				localStorage.removeItem("accessToken")
				localStorage.removeItem("expirationTime")
				localStorage.removeItem("refreshToken")

				window.location.href = "/"
			})
			.catch((error) => {
				alert("Signout Failed", error)
			})
	}
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
				<button
					onClick={doSignOut}
					className="mt-8 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
				>
					Logout
				</button>
			</div>
		</main>
	)
}

export default withAuth(Home)
