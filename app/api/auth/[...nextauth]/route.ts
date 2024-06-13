// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { auth } from "@/app/lib/firebaseConfig"

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials) {
				console.log("credentials", credentials)
				// Replace this with actual user authentication logic
				const user = { id: 1, name: "Test User" } // Example user object
				if (user) {
					return user
				} else {
					return null
				}
			}
		})
	],
	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
		error: "/auth/error"
	},
	callbacks: {
		async jwt(token, user) {
			if (user) {
				token.id = user.id
			}
			return token
		},
		async session(session, token) {
			session.user = token
			return session
		}
	}
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
