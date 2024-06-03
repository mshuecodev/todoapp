import React from "react"
import { Transaction } from "@/app/types"

const TransactionList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
	return (
		<div className="mt-4">
			<h2 className="text-lg font-bold mb-2">Transaction List</h2>
			<ul>
				{transactions.map((transaction, index) => (
					<li
						key={index}
						className={`p-4 mb-4 rounded-md shadow-md bg-white`}
					>
						<div className="flex justify-between items-center">
							<div className={`text-xl font-bold ${transaction.transactionType === "income" ? "text-green-600" : "text-red-600"}`}>
								{transaction.transactionType === "income" ? "+" : "-"} ${transaction.amount}
							</div>
							<div className="text-gray-600">{transaction.date}</div>
						</div>
						<div className="text-gray-800 mt-2">{transaction.desc}</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TransactionList
