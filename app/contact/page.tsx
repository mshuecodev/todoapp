"use client"
import { useEffect, useState } from "react"
import ContactForm from "./ContactForm"
import ContactList from "./ContactList"
import { Contact } from "@/app/types"

import { fetchContact, addContact, toggleContact, deleteContact } from "@/app/lib/contactAPI"

export default function Home() {
	const [contacts, setContacts] = useState<Contact[]>([])
	const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
	const [isEdit, setEdit] = useState(false)

	const handleSave = async () => {
		await fetchData()
		setSelectedContact(null)
		setEdit(false)
	}

	const handleEdit = (contact: Contact) => {
		setSelectedContact(contact)
		setEdit(true)
	}

	const handleDelete = async (id: string) => {
		await deleteContact(id)
		fetchData()
	}

	const fetchData = async () => {
		const response = await fetchContact()
		setContacts(response)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div className="min-h-screen bg-green-50 py-6 sm:py-12">
			<div className="container mx-auto p-4 max-w-lg">
				<h1 className="text-4xl font-bold text-center text-green-700 mb-8">Contact App</h1>
				<div className="bg-white p-6 rounded-lg shadow-lg mb-8">
					<ContactForm
						contact={selectedContact}
						setSelectedContact={setSelectedContact}
						onSave={handleSave}
						isEdit={isEdit}
					/>
					<ContactList
						contacts={contacts}
						onEdit={handleEdit}
						onDelete={handleDelete}
					/>
				</div>
			</div>
		</div>
	)
}
