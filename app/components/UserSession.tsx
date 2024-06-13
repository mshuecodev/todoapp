// src/components/UserSession.tsx

"use client"

import { useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import LoadingSpinner from "@/app/components/LoadingSpinner"

const UserSession = () => {
	const { data: session, status } = useSession()
	const router = useRouter()

	if (status === "loading") {
		return <LoadingSpinner />
	}

	if (!session) {
		console.log("session", session)
		router.push("/auth/signin")
	}

	return (
		<div>
			<h1>Welcome to the protected home page!</h1>
			<p>Hello, {session?.user?.name}!</p>
			<button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
		</div>
	)
}

export default UserSession
