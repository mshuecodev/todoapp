// src/app/auth/signin/page.tsx

"use client"

import { signIn } from "next-auth/react"

const SignIn = () => {
	const handleSignIn = async (event: React.FormEvent) => {
		event.preventDefault()
		const res = await signIn("credentials", {
			redirect: false,
			username: (event.target as any).username.value,
			password: (event.target as any).password.value
		})

		if (res?.error) {
			console.error("Sign-in error:", res.error)
		} else {
			window.location.href = "/"
		}
	}

	return (
		<div>
			<form onSubmit={handleSignIn}>
				<label>
					Username:
					<input
						type="text"
						name="username"
						required
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						name="password"
						required
					/>
				</label>
				<button type="submit">Sign In</button>
			</form>
		</div>
	)
}

export default SignIn
