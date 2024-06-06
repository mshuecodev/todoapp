// hooks/useSocket.ts
import { useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"

const useSocket = (url: string) => {
	const [messages, setMessages] = useState<string[]>([])
	const [socket, setSocket] = useState<Socket | null>(null)

	useEffect(() => {
		const socket = io(url)
		console.log("socket", socket)

		socket.on("connection", () => {
			console.log("Connected to server")
		})

		socket.on("error", (error: Error) => {
			console.error("Socket.IO Error:", error)
		})

		setSocket(socket)

		socket.on("chat message", (message: string) => {
			setMessages((prev) => [...prev, message])
		})

		return () => {
			socket.disconnect()
		}
	}, [url])

	const sendMessage = (message: string) => {
		if (socket) {
			socket.emit("chat message", message)
		}
	}

	return { messages, sendMessage }
}

export default useSocket
