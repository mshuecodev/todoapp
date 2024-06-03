import type { NextPage } from "next"
import Head from "next/head"
import Calculator from "./calculator"

const Home: NextPage = () => {
	return (
		<div className="min-h-screen bg-green-50 flex items-center justify-center flex-col">
			<h1 className="text-4xl font-bold text-green-800 mb-4">Calculator App</h1>
			<p className="text-lg text-green-700 mb-8">MSDEV - JUNE 3/24</p>
			<Calculator />
		</div>
	)
}

export default Home
