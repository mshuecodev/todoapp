"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"

const SignIn = () => {
	const [loading, setLoading] = useState(false)

	const handleSignIn = async (event: React.FormEvent) => {
		event.preventDefault()
		setLoading(true)
		const res = await signIn("credentials", {
			redirect: false,
			username: (event.target as any).username.value,
			password: (event.target as any).password.value
		})

		if (res?.error) {
			console.error("Sign-in error:", res.error)
			setLoading(false)
		} else {
			window.location.href = "/"
		}
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full transform transition-all duration-500 hover:scale-105">
				<h1 className="text-3xl font-extrabold text-indigo-600 mb-6">Welcome Back!</h1>
				<p className="text-gray-600 mb-6">Login to your account</p>
				<form
					onSubmit={handleSignIn}
					className="space-y-6"
				>
					<div>
						<label
							htmlFor="username"
							className="block text-left font-medium text-gray-700"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
							name="username"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-left font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
							name="password"
							required
						/>
					</div>
					<button
						type="submit"
						className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
						disabled={loading}
					>
						{loading ? "Signing In..." : "Sign In"}
					</button>
				</form>
				<p className="mt-6 text-sm text-gray-600">
					Don't have an account?{" "}
					<a
						href="#"
						className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
					>
						Sign up
					</a>
				</p>
			</div>
		</div>
	)
}

export default SignIn
