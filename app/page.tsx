// src/app/page.tsx

import HomeScreen from "@/app/home/page"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

const HomePage = () => {
	return (
		<div className={inter.className}>
			<HomeScreen />
		</div>
	)
}

export default HomePage
