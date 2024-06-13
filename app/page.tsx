// src/app/page.tsx

import UserSession from "@/app/components/UserSession"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

const HomePage = () => {
	return (
		<div className={inter.className}>
			<UserSession />
		</div>
	)
}

export default HomePage
