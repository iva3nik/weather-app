const rp = require('request-promise')

module.exports = async function(city = '') {
  if(!city) {
    throw new Error('Name of the city can not be empty')
  }

  console.log('City:', city)
}