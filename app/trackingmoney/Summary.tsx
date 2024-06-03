import React from "react"

interface SummaryProps {
	totalIncome: number
	totalExpenses: number
}

const Summary: React.FC<SummaryProps> = ({ totalIncome, totalExpenses }) => {
	const balance = totalIncome - totalExpenses

	return (
		<div className="p-4 bg-gray-100 rounded-md shadow-md text-center mt-4">
			<h2 className="text-lg font-bold mb-2">Summary</h2>
			<p className="mb-1">Total Income: ${totalIncome}</p>
			<p className="mb-1">Total Expenses: ${totalExpenses}</p>
			<p className={`font-bold ${balance >= 0 ? "text-green-500" : "text-red-500"}`}>Balance: ${balance}</p>
		</div>
	)
}

export default Summary
