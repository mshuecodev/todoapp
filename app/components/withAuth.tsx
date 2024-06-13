"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LoadingSpinner from "@/app/components/LoadingSpinner"

const withAuth = (WrappedComponent: React.ComponentType) => {
	return (props: any) => {
		const [loading, setLoading] = useState(true)
		const router = useRouter()

		useEffect(() => {
			const token = localStorage.getItem("accessToken")
			if (!token) {
				router.push("/auth/signin")
			} else {
				setLoading(false)
			}
		}, [])

		if (loading) {
			return <LoadingSpinner />
		}

		return <WrappedComponent {...props} />
	}
}

export default withAuth
