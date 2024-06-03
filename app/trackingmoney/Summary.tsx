import React from "react"

interface SummaryProps {
	totalIncome: number
	totalExpenses: number
}

const Summary: React.FC<SummaryProps> = ({ totalIncome, totalExpenses }) => {
	const balance = totalIncome - totalExpenses

	return (
		<div className="p-4 bg-white rounded-md shadow-md text-center mt-4">
			<h2 className="text-lg font-bold mb-2">Summary</h2>
			<div className="mb-2">
				<p className="text-gray-700 mb-1">Total Income:</p>
				<p className="text-green-600 text-lg font-semibold">${totalIncome}</p>
			</div>
			<div className="mb-2">
				<p className="text-gray-700 mb-1">Total Expenses:</p>
				<p className="text-red-600 text-lg font-semibold">${totalExpenses}</p>
			</div>
			<hr className="my-2 border-t border-gray-300" />
			<div>
				<p className="text-gray-700 mb-1">Balance:</p>
				<p className={`text-lg font-semibold ${balance >= 0 ? "text-green-600" : "text-red-600"}`}>${balance}</p>
			</div>
		</div>
	)
}

export default Summary
