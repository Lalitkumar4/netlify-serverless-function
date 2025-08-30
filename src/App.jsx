import { useState } from 'react'
import { Cloud, Sun, CloudRain, Loader2, Search } from 'lucide-react'

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase()
    if (desc.includes('rain') || desc.includes('drizzle')) {
      return <CloudRain className='w-12 h-12 text-blue-500' />
    } else if (desc.includes('cloud')) {
      return <Cloud className='w-12 h-12 text-gray-500' />
    } else {
      return <Sun className='w-12 h-12 text-yellow-500' />
    }
  }

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Call our Netlify serverless function instead of directly calling the API
      const response = await fetch(`/.netlify/functions/weather?city=${city}`)

      if (!response.ok) {
        throw new Error('Weather information not found')
      }

      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4'>
      <div className='max-w-md mx-auto'>
        <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mt-10'>
          <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
            Weather App
          </h1>

          <div className='mb-6'>
            <div className='relative'>
              <input
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
                placeholder='Enter city name...'
                className='w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
              <button
                onClick={fetchWeather}
                disabled={loading}
                className='absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-blue-500 hover:text-blue-700 disabled:opacity-50'
              >
                {loading ? (
                  <Loader2 className='w-5 h-5 animate-spin' />
                ) : (
                  <Search className='w-5 h-5' />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4'>
              {error}
            </div>
          )}

          {weather && (
            <div className='text-center'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                {weather.name}, {weather.sys.country}
              </h2>

              <div className='flex items-center justify-center mb-4'>
                {getWeatherIcon(weather.weather[0].description)}
              </div>

              <div className='text-4xl font-bold text-gray-800 mb-2'>
                {Math.round(weather.main.temp)}°C
              </div>

              <div className='text-lg text-gray-600 mb-4 capitalize'>
                {weather.weather[0].description}
              </div>

              <div className='grid grid-cols-2 gap-4 text-sm text-gray-600'>
                <div className='bg-white/50 rounded-lg p-3'>
                  <div className='font-semibold'>Feels like</div>
                  <div>{Math.round(weather.main.feels_like)}°C</div>
                </div>
                <div className='bg-white/50 rounded-lg p-3'>
                  <div className='font-semibold'>Humidity</div>
                  <div>{weather.main.humidity}%</div>
                </div>
                <div className='bg-white/50 rounded-lg p-3'>
                  <div className='font-semibold'>Pressure</div>
                  <div>{weather.main.pressure} hPa</div>
                </div>
                <div className='bg-white/50 rounded-lg p-3'>
                  <div className='font-semibold'>Wind Speed</div>
                  <div>{weather.wind.speed} m/s</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
