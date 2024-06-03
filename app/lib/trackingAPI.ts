import { Transaction } from "@/app/types"
const API_URL = "http://localhost:1000/trackmoney"

export const fetchTransactions = async (): Promise<Transaction[]> => {
	try {
		const response = await fetch(`${API_URL}/`)

		const data = await response.json()
		return data
	} catch (error) {
		throw error
	}
}

export const addTransaction = async (transaction: Transaction): Promise<void> => {
	try {
		const response = await fetch(`${API_URL}/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(transaction)
		})
		const resdata = await response.json()
		return resdata
	} catch (error) {
		throw error
	}
}
