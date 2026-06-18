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
    <div>
      <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
      {loading && <p>Loading.....</p>}
      {error && <ErrorMessage error={error}/>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}
export default App