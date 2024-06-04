interface IContact {
	_id: string
	name: string
	email: string
	phone: string
	address: string
}

interface IContactListProps {
	contacts: IContact[]
	onEdit: (contact: IContact) => void
	onDelete: (id: string) => void
}

const ContactList = ({ contacts, onEdit, onDelete }: IContactListProps) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
			{contacts.map((contact) => (
				<div
					key={contact._id}
					className="p-4 border rounded shadow-md"
				>
					<h3 className="text-xl font-bold">{contact.name}</h3>
					<p>{contact.email}</p>
					<p>{contact.phone}</p>
					<p>{contact.address}</p>
					<div className="flex space-x-2 mt-2">
						<button
							onClick={() => onEdit(contact)}
							className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
						>
							Edit
						</button>
						<button
							onClick={() => onDelete(contact._id)}
							className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default ContactList
