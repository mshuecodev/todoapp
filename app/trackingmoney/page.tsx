"use client"
import React, { useState, useEffect } from "react"
import { fetchTransactions } from "@/app/lib/trackingAPI"
import FormTransaction from "./FormTransaction"
import TransactionList from "./TransactionList"
import Summary from "./Summary"
import { Transaction } from "@/app/types"

const Home: React.FC = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	const fetchData = async () => {
		const data = await fetchTransactions()
		setTransactions(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const totalIncome = transactions.filter((transaction) => transaction.transactionType === "income").reduce((acc, curr) => acc + curr.amount, 0)
	const totalExpenses = transactions.filter((transaction) => transaction.transactionType === "expense").reduce((acc, curr) => acc + curr.amount, 0)

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-green-50 py-6 sm:py-12">
			<div className="max-w-md w-full p-4">
				<h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Track Money</h1>
				<FormTransaction fetchData={fetchData} />
				<TransactionList transactions={transactions} />
				<Summary
					totalIncome={totalIncome}
					totalExpenses={totalExpenses}
				/>
			</div>
		</div>
	)
}

export default Home
