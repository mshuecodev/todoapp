import React, { useState, useRef } from "react"

const Stopwatch: React.FC = () => {
	const [time, setTime] = useState(0)
	const [running, setRunning] = useState(false)
	const timerRef = useRef<number>()

	const startTimer = () => {
		if (!running) {
			setRunning(true)
			const start = Date.now() - time
			timerRef.current = window.setInterval(() => {
				setTime(Date.now() - start)
			}, 1000)
		}
	}

	const stopTimer = () => {
		setRunning(false)
		window.clearInterval(timerRef.current)
	}

	const resetTimer = () => {
		setRunning(false)
		window.clearInterval(timerRef.current)
		setTime(0)
	}

	return (
		<div className="bg-white p-6 rounded-lg shadow-lg">
			<h1 className="text-3xl font-bold mb-4 text-center">Stopwatch</h1>
			<div className="mb-4 text-3xl font-mono text-center">{new Date(time).toISOString().slice(11, 19)}</div>
			<div className="flex space-x-2">
				<button
					onClick={startTimer}
					className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
				>
					Start
				</button>
				<button
					onClick={stopTimer}
					className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
				>
					Stop
				</button>
				<button
					onClick={resetTimer}
					className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
				>
					Reset
				</button>
			</div>
		</div>
	)
}

export default Stopwatch
