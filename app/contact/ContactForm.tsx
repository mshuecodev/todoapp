import { useState, ChangeEvent, FormEvent } from "react"
import axios from "axios"
import { Contact } from "@/app/types"

interface IContactFormProps {
	contact?: Contact
	onSave: () => void
}

const ContactForm = ({ contact, onSave }: IContactFormProps) => {
	const [formData, setFormData] = useState({
		name: contact ? contact.name : "",
		email: contact ? contact.email : "",
		phone: contact ? contact.phone : "",
		address: contact ? contact.address : ""
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (contact) {
			// await axios.put(`/api/contacts/${contact._id}`, formData)
			await toggleContact(contact._id)
		} else {
			await axios.post("/api/contacts", formData)
		}
		onSave()
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col space-y-4 p-6 bg-white border border-gray-300 rounded-lg shadow-lg max-w-lg mx-auto mt-8"
		>
			<h2 className="text-3xl font-bold text-green-700 mb-4">{contact ? "Edit Contact" : "Add Contact"}</h2>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={formData.name}
				onChange={handleChange}
				required
				className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
				required
				className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
			/>
			<input
				type="text"
				name="phone"
				placeholder="Phone"
				value={formData.phone}
				onChange={handleChange}
				required
				className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
			/>
			<input
				type="text"
				name="address"
				placeholder="Address"
				value={formData.address}
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
