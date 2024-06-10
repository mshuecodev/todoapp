// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" }
			},
			authorize: async (credentials) => {
				const user = { id: 1, name: "John Doe", email: "john@example.com" }
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
