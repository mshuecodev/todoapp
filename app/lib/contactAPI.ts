import axios from "axios"
import { Contact } from "@/app/types"

const API_URL = "http://localhost:1000/contact"

export const fetchContact = async (): Promise<Contact[]> => {
	const response = await fetch(`${API_URL}/`)
	const todos = await response.json()
	return todos
}

export const addContact = async (data: Object): Promise<Contact> => {
	const response = await fetch(`${API_URL}/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
	const todo = await response.json()
	return todo
}

export const toggleContact = async (id: string, data: Object): Promise<Contact> => {
	const response = await axios({
		method: "put",
		url: `${API_URL}/${id}`,
		data: data
	})

	const todo = await response.data
	return todo
}

export const deleteContact = async (id: string): Promise<{ message: string }> => {
	const response = await fetch(`${`${API_URL}/`}/${id}`, {
		method: "DELETE"
	})
	const result = await response.json()
	return result
}
