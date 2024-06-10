// src/components/UserSession.tsx

"use client"

import { useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const UserSession = () => {
	const { data: session, status } = useSession()
	const router = useRouter()

	if (status === "loading") {
		return <div>Loading...</div>
	}

	if (!session) {
		return <div>You are not authenticated. Please sign in.</div>
	}

	console.log("session", status)

	useEffect(() => {
		console.log(session, status)
		if (status === "unauthenticated") {
			router.push("/auth/signin")
		}
	}, [status, router])

	return (
		<div>
			<h1>Welcome to the protected home page!</h1>
			<p>Hello, {session?.user?.name}!</p>
			<button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
		</div>
	)
}

export default UserSession
