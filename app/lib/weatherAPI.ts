const API_URL = "http://localhost:1000/weather"

export const fetchWeatherbyCity = async (city: String) => {
	try {
		const response = await fetch(`${API_URL}/city?city=${city}`)
		const weather = await response.json()
		return weather
	} catch (error) {
		throw error
	}
}
