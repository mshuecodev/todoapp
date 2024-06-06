"use client"
import React, { useState, useEffect } from "react"
import useSocket from "../hooks/useSocket"

const UrlAPI = "http://localhost:1000"

const ChatPage: React.FC = () => {
	const { messages, sendMessage } = useSocket(UrlAPI)
	const [input, setInput] = useState("")

	const handleSend = () => {
		if (input.trim() !== "") {
			sendMessage(input)
			setInput("")
		}
	}

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSend()
		}
	}

	useEffect(() => {
		const messagesContainer = document.getElementById("messagesContainer")
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight
		}
	}, [messages])

	return (
		<div className="flex flex-col h-screen bg-gray-100 p-4">
			<div className="flex-grow flex flex-col justify-between bg-white shadow-lg rounded-lg overflow-hidden">
				<div
					id="messagesContainer"
					className="flex-grow p-4 overflow-auto space-y-2"
				>
					{messages.map((msg, idx) => (
						<div
							key={idx}
							className={`p-3 rounded-lg max-w-xs ${idx % 2 === 0 ? "bg-blue-500 text-white self-start" : "bg-gray-300 self-end"}`}
						>
							{msg}
						</div>
					))}
				</div>
				<div className="p-4 flex border-t border-gray-300">
					<input
						type="text"
						value={input}
						onKeyPress={handleKeyPress}
						onChange={(e) => setInput(e.target.value)}
						className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Type your message..."
					/>
					<button
						onClick={handleSend}
						className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Send
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChatPage
