import React, { useState } from "react"
import { fetchTransactions, addTransaction } from "@/app/lib/trackingAPI"
import { Transaction } from "@/app/types"

interface ExpenseFormProps {
	fetchData: () => void
}

const FormTransaction: React.FC<ExpenseFormProps> = ({ fetchData }) => {
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
			className="mx-auto max-w-sm bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
		>
			<h2 className="text-2xl font-bold text-gray-800 mb-4">Add Transaction</h2>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="amount"
				>
					Amount
				</label>
				<input
					id="amount"
					type="number"
					value={amount ?? ""}
					onChange={(e) => setAmount(parseFloat(e.target.value))}
					placeholder="Enter amount"
					className="w-full p-2 border border-gray-300 rounded-md"
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="description"
				>
					Description
				</label>
				<input
					id="description"
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Enter description"
					className="w-full p-2 border border-gray-300 rounded-md"
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="type"
				>
					Type
				</label>
				<select
					id="type"
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

export default FormTransaction
