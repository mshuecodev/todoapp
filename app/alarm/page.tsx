"use client"
import React, { useEffect, useState } from "react"
import AlarmPage from "./Alarm"
import StopwatchPage from "./Stopwatch"

const TabPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState("alarm")

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="flex space-x-4 mb-8">
				<button
					onClick={() => setActiveTab("alarm")}
					className={`py-2 px-4 rounded-md transition ${activeTab === "alarm" ? "bg-indigo-600 text-white shadow-lg" : "bg-gray-200 hover:bg-gray-300"}`}
				>
					Alarm
				</button>
				<button
					onClick={() => setActiveTab("stopwatch")}
					className={`py-2 px-4 rounded-md transition ${activeTab === "stopwatch" ? "bg-indigo-600 text-white shadow-lg" : "bg-gray-200 hover:bg-gray-300"}`}
				>
					Stopwatch
				</button>
			</div>
			<div className="w-full max-w-md">
				{activeTab === "alarm" && <AlarmPage />}
				{activeTab === "stopwatch" && <StopwatchPage />}
			</div>
		</div>
	)
}

export default TabPage
