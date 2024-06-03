import React, { useState } from "react"
import { fetchTransactions, addTransaction } from "@/app/lib/trackingAPI"
import { Transaction } from "@/app/types"

interface ExpenseFormProps {
	fetchData: () => void
}

const AddTransactionForm: React.FC<ExpenseFormProps> = ({ fetchData }) => {
	const [amount, setAmount] = useState<number | null>(null)
	const [description, setDescription] = useState<string>("")
	const [type, setType] = useState<string>("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (amount && description && type) {
			let transactionBody = {
				amount,
				desc: description,
				transactionType: type
			}
			try {
				await addTransaction({ ...transactionBody } as Transaction)
				await fetchData()
				setAmount(null)
				setDescription("")
				setType("")
				// Handle success
			} catch (error) {
				console.error("Error adding transaction:", error)
			}
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto max-w-sm"
		>
			<h2 className="text-2xl font-bold text-gray-800 mb-4">Add Transaction</h2>
			<div className="mb-4">
				<input
					type="number"
					value={amount ?? ""}
					onChange={(e) => setAmount(parseFloat(e.target.value))}
					placeholder="Amount"
					className="w-full p-2 border border-gray-300 rounded-md"
				/>
			</div>
			<div className="mb-4">
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Description"
					className="w-full p-2 border border-gray-300 rounded-md"
				/>
			</div>
			<div className="mb-4">
				<select
					value={type}
					onChange={(e) => setType(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-md"
				>
					<option value="">Select type</option>
					<option value="income">Income</option>
					<option value="expense">Expense</option>
				</select>
			</div>
			<button
				type="submit"
				className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
			>
				Add Transaction
			</button>
		</form>
	)
}

export default AddTransactionForm
