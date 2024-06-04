export interface Todo {
	_id: string
	text: string
	completed: boolean
}

export interface Transaction {
	_id: string
	amount: number
	desc: string
	transactionType: string
	date: date
}

export interface Contact {
	_id: string
	name: string
	email: string
	phone: string
	address: string
}
