"use client"
import React, { useEffect, useState } from "react"

const AlarmPage: React.FC = () => {
	const [time, setTime] = useState("")
	const [alarmTime, setAlarmTime] = useState<string | null>(null)
	const [message, setMessage] = useState("")

	const handleSetAlarm = () => {
		setAlarmTime(time)
		setMessage("Alarm set!")
	}

	useEffect(() => {
		const interval = setInterval(() => {
			const current = new Date()
			const currentTime = `${current.getHours()}: ${current.getMinutes()}`
			setTime(currentTime)
			if (alarmTime === currentTime) {
				setMessage("Alarm is ringing!")
				new Notification("Alarm", {
					body: "Your alarm is ringing!"
				})
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [alarmTime])
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg">
			<h1 className="text-3xl font-bold mb-4 text-center">Alarm App</h1>
			<div className="mb-4 text-center">
				<label
					htmlFor="time"
					className="block text-sm font-medium text-gray-700"
				>
					Current Time:
				</label>
				<span className="block mt-1 text-lg font-mono">{time}</span>
			</div>
			<div className="mb-4">
				<label
					htmlFor="alarm"
					className="block text-sm font-medium text-gray-700"
				>
					Set Alarm:
				</label>
				<input
					type="time"
					id="alarm"
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					onChange={(e) => setAlarmTime(e.target.value)}
				/>
			</div>
			<button
				onClick={handleSetAlarm}
				className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Set Alarm
			</button>
			{message && <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md text-center">{message}</div>}
		</div>
	)
}

export default AlarmPage
