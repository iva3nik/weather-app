const rp = require('request-promise')

module.exports = async function(city = '') {
  if(!city) {
    throw new Error('Name of the city can not be empty')
  }

  const KEY = '935153ac341244d63adabe842d0d6d9f'
  const uri = 'http://api.openweathermap.org/data/2.5/weather'

  const options = {
    uri,
    qs: {
      appid: KEY,
      q: city,
      units: 'imperial'
    },
    json: true
  }

  try {
    const response = await rp(options)
    const celsius = (response.main.temp - 32) * 5/9

    return {
      weather: `${response.name}: ${celsius.toFixed(0)}`,
      error: null
    }
  } catch (error) {
    return {
      weather: null,
      error: error.error.message
    }
  }
}