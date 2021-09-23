const request = require('postman-request')
const { forecast_variables} = require('../config/constant')

const forecast = (latitude, logitude, callback) => {
    const { access_key, base_url } = forecast_variables
    const url = '${base_url}?$access_key=${access_key}&query=${latitude},${logitude}'

    request({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unavailable weather service', undefined)
        } else if (response.body.error) {
            callback('Invalid coordinates', undefined)
        } else {
            const { temperature, fellslike, weather_description, precip} = response.body.current
            const weather = weather_description[0]
            let outputText = 'It is currently ${temperature} degres out, and feels like ${feelslike}. There is a ${precip}% chance of rain, ande sky is ${weather.toLowerCase()}'
            callback(undefined, outputText)
        }
    })
}

module.exports = {forecast}