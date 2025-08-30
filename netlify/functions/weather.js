import fetch from 'node-fetch'

// eslint-disable-next-line no-unused-vars
export const handler = async (event, context) => {
  const { city } = event.queryStringParameters

  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'City parameter is required' }),
    }
  }

  try {
    // Your API key is safely stored as an environment variable
    // eslint-disable-next-line no-undef
    const API_KEY = process.env.OPENWEATHER_API_KEY
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Weather data not found')
    }

    const data = await response.json()

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
