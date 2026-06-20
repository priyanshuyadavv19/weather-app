import { useState } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ErrorMessage from './components/ErrorMessage'
function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const gradients = {
    Clear: "bg-gradient-to-br from-yellow-400 to-orange-500",
    Rain: "bg-gradient-to-br from-gray-700 to-blue-900",
    Clouds: "bg-gradient-to-br from-gray-500 to-gray-700",
    Snow: "bg-gradient-to-br from-blue-100 to-blue-300",
    Thunderstorm: "bg-gradient-to-br from-gray-900 to-purple-900",
    Drizzle: "bg-gradient-to-br from-blue-400 to-gray-600",
    Mist: "bg-gradient-to-br from-gray-400 to-gray-600",
    Fallback: "bg-gradient-to-br from-gray-800 to-gray-900"
  }
  const currentGradient = weather ? gradients[weather.weather[0].main] || gradients.Fallback : gradients.Fallback
  async function fetchWeather() {
    if (city.trim() === "") return
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
      setWeather(response.data)
    } catch (err) {
      setWeather(null)
      if (err.response?.status === 404) {
        setError("City not found!")
      } else {
        setError("Something went wrong!")
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className={`min-h-screen px-4 py-10 ${currentGradient}`}>
      <div className='max-w-2xl mx-auto'>
        <h1 className="text-white text-4xl font-bold text-center mb-6">
          Weather App</h1>
        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
        {loading && <p className="text-blue-400 text-center mt-6">Loading.....</p>}
        {error && <ErrorMessage error={error}/>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  )
}
export default App