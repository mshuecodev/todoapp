"use client"
import React, { useState } from "react"

type Question = {
	question: string
	options: string[]
	answer: string
}

const questions: Question[] = [
	{
		question: "What is the capital of France?",
		options: ["Berlin", "Madrid", "Paris", "Lisbon"],
		answer: "Paris"
	},
	{
		question: "What is 2 + 2?",
		options: ["3", "4", "5", "6"],
		answer: "4"
	},
	{
		question: "Who wrote 'Hamlet'?",
		options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
		answer: "William Shakespeare"
	}
]

const QuizPage: React.FC = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [score, setScore] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const [selectedOption, setSelectedOption] = useState<string | null>(null)

	const handleOptionClick = (option: string) => {
		setSelectedOption(option)
	}

	const handleNextQuestion = () => {
		if (selectedOption === questions[currentQuestion].answer) {
			setScore(score + 1)
		}

		setSelectedOption(null)
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1)
		} else {
			setShowScore(true)
		}
	}
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
				{showScore ? (
					<div className="text-center">
						<h1 className="text-2xl font-bold mb-4">
							Your Score: {score}/{questions.length}
						</h1>
						<button
							className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={() => {
								setCurrentQuestion(0)
								setScore(0)
								setShowScore(false)
							}}
						>
							Restart Quiz
						</button>
					</div>
				) : (
					<div>
						<h1 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h1>
						<div className="mb-4">
							{questions[currentQuestion].options.map((option, index) => (
								<button
									key={index}
									className={`block w-full text-left p-2 border rounded-md mb-2 ${selectedOption === option ? "bg-indigo-500 text-white" : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"}`}
									onClick={() => handleOptionClick(option)}
								>
									{option}
								</button>
							))}
						</div>
						<button
							className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleNextQuestion}
							disabled={!selectedOption}
						>
							{currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default QuizPage
