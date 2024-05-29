"use client"
import React, { useState } from "react"
import { fetchWeatherbyCity } from "@/app/lib/api"

function WeatherPage() {
	const [city, setCity] = useState(null)
	const [error, setError] = useState(null)
	const [weather, setWeather] = useState(null)

	async function fetchWeather() {
		try {
			const response = await fetchWeatherbyCity(city)
			setWeather(response)
			setError(null)
		} catch (error) {
			setError("Failed to fetch weather data")
			throw error
		}
	}
	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen bg-purple-50 py-6 sm:py-12">
				<div className="relative py-3 w-80 sm:max-w-xl sm:mx-auto">
					<div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
					<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
						<h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Weather App</h1>
						<div className="w-full">
							<input
								type="text"
								value={city}
								onChange={(e) => setCity(e.target.value)}
								placeholder="Enter city"
								className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
							/>
							<button
								onClick={fetchWeather}
								className="w-full mt-4 bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-200"
							>
								Get Weather
							</button>
						</div>
						{error && <p className="text-red-500 mt-4 text-center">{error}</p>}
						{weather && (
							<div className="mt-8 text-center">
								<h2 className="text-2xl font-bold text-gray-800">{weather.name}</h2>
								<p className="text-lg text-gray-700">{weather.main.temp} °C</p>
								<p className="text-md text-gray-500 capitalize">{weather.weather[0].description}</p>
								<div className="flex justify-center mt-4">
									<img
										src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
										alt={weather.weather[0].description}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeatherPage
