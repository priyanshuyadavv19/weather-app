function WeatherCard({weather}) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md p-6 max-w-sm mx-auto mt-6 flex flex-col items-center opacity-100 transition-all duration-500" >
      <div className="flex items-center gap-2">
        <p className="text-white text-3xl font-bold">{weather.name}</p>
      <img src={`https://flagcdn.com/w40/${weather.sys.country.toLowerCase()}.png`} alt="flag"/>
      </div>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
      alt="weather-icon" className="w-28 h-28"/>
      <p className="capitalize text-gray-400 text-md">{weather.weather[0].description}</p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs">Temperature</span>
          <span className="text-white font-bold text-lg">{weather.main.temp}°C</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs">Feels Like</span>
          <span className="text-white font-bold text-lg">{weather.main.feels_like}°C</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs">Humidity</span>
          <span className="text-white font-bold text-lg">{weather.main.humidity}%</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs">Wind Speed</span>
          <span className="text-white font-bold text-lg">{weather.wind.speed}m/s</span>
        </div>
      </div>
    </div>
  )
}
export default WeatherCard