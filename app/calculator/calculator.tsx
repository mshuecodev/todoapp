"use client"
import { useState } from "react"

const Calculator = () => {
	const [display, setDisplay] = useState("")

	const handleButtonClick = (value: string) => {
		if (value === "=") {
			try {
				// Evaluate the expression using the JavaScript eval function
				setDisplay(eval(display).toString())
			} catch {
				setDisplay("Error")
			}
		} else if (value === "C") {
			setDisplay("")
		} else {
			setDisplay(display + value)
		}
	}

	const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"]

	return (
		<div className="w-full max-w-xs mx-auto mt-20">
			<div className="bg-white p-4 rounded-lg shadow-lg">
				<div className="mb-4 text-right text-3xl p-2 bg-green-100 text-green-900 rounded">{display}</div>
				<div className="grid grid-cols-4 gap-2">
					{buttons.map((button) => (
						<button
							key={button}
							onClick={() => handleButtonClick(button)}
							className="bg-green-500 text-white p-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
						>
							{button}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default Calculator
