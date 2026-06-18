function WeatherCard({weather}) {
  return (
    <div>
      <p>{weather.name}</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
      alt="weather-icon" />
      <p>{weather.weather[0].description}</p>
      <p>Tempereature: {weather.main.temp}°C</p>
      <p>Feels Like: {weather.main.feels_like}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed}m/s</p>
    </div>
  )
}
export default WeatherCard