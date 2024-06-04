import { useState, ChangeEvent, FormEvent } from "react"
import axios from "axios"
import { Contact } from "@/app/types"
import { fetchContact, addContact, toggleContact, deleteContact } from "@/app/lib/contactAPI"

interface IContactFormProps {
	isEdit: boolean
	contact?: Contact
	setSelectedContact: () => void
	onSave: () => void
}

const ContactForm = ({ contact, setSelectedContact, isEdit, onSave }: IContactFormProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedContact({
			...contact,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			if (isEdit && contact._id) {
				// await axios.put(`/api/contacts/${contact._id}`, contact)
				await toggleContact(contact._id, contact)
			} else {
				// await axios.post("/api/contacts", contact)
				await addContact(contact)
			}
		} catch (error) {
			alert(error)
		} finally {
			onSave()
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col space-y-4 p-6 bg-white border border-gray-300 rounded-lg shadow-lg max-w-lg mx-auto mt-8"
		>
			<h2 className="text-3xl font-bold text-green-700 mb-4">{isEdit ? "Edit Contact" : "Add Contact"}</h2>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={contact?.name || ""}
				onChange={handleChange}
				required
				className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={contact?.email || ""}
				onChange={handleChange}
				required
				className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
			/>
			<input
				type="text"
				name="phone"
				placeholder="Phone"
				value={contact?.phone || ""}
				onChange={handleChange}
				required
				className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
			/>
			<input
				type="text"
				name="address"
				placeholder="Address"
				value={contact?.address || ""}
				onChange={handleChange}
				required
				className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
			/>
			<button
				type="submit"
				className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
			>
				Save
			</button>
		</form>
	)
}

export default ContactForm
