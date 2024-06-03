import React from "react"
import { Transaction } from "@/app/types"

interface TransactionListProps {
	transactions: Transaction[]
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
	return (
		<div className="mt-4">
			<h2 className="text-lg font-bold mb-2">Transaction List</h2>
			<ul>
				{transactions.map((transaction, index) => (
					<li
						key={index}
						className={`p-2 mb-2 rounded-md shadow-sm ${transaction.transactionType === "income" ? "bg-green-100" : "bg-red-100"}`}
					>
						<span className="font-bold">
							{transaction.transactionType === "income" ? "+" : "-"}${transaction.amount}
						</span>{" "}
						- {transaction.desc}
					</li>
				))}
			</ul>
		</div>
	)
}

export default TransactionList
