"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LoadingSpinner from "@/app/components/LoadingSpinner"
import { getAuth, signInWithCustomToken, onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/lib/firebaseConfig"

const withAuth = (WrappedComponent: React.ComponentType) => {
	return (props: any) => {
		const [loading, setLoading] = useState(true)
		const router = useRouter()

		const checkToken = async () => {
			onAuthStateChanged(auth, async (user) => {
				if (!user) {
					router.push("/auth/signin")
					return
				}

				console.log("user", user)
				const token = await user.getIdToken()
				const expirationTime = user.stsTokenManager.expirationTime

				if (Date.now() >= expirationTime) {
					try {
						await user.getIdToken(true)
						const refreshToken = await user.getIdToken()
						localStorage.setItem("accessToken", user.accessToken)
						localStorage.setItem("expirationTime", user.stsTokenManager.expirationTime.toString())
					} catch (error) {
						console.log("Failed to refresh token", error)
						router.push("/auth/signin")
						return
					}
				} else {
					localStorage.setItem("accessToken", token)
					localStorage.setItem("expirationTime", expirationTime.toString())
				}

				setLoading(false)
			})
		}

		useEffect(() => {
			const token = localStorage.getItem("accessToken")
			if (!token) {
				router.push("/auth/signin")
			} else {
				setLoading(false)
			}
			checkToken()
		}, [])

		if (loading) {
			return <LoadingSpinner />
		}

		return <WrappedComponent {...props} />
	}
}

export default withAuth
