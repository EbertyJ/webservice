const request = require('postman-request')
const {access_key, base_url} = require('../../config/constant')


//http://api.weatherstack.com/current?access_key=750cf5d6a0d5ae505c18694531872b89&query=Exu

const lat = '-7.2237358', lon = "-39,3265404"

const url = '${base_url}?access_key_=${access_key}&query=${lat},${lon}'

request({url, json: true},  (error, response) => {
    if (error) {
        return console.error("Unavaliable wather service")
    }
    if(!data.error) {
        return console.error("Invalid coordinades")
    }
    const data = JSON.parse(response.body)

    const {temperature,feelslike,weather_description, precip} = response.body.current
    const weather = weather_description[0]

    let outputText = 'Altualmente temos y ${temperature} , com sensação termica de z. O ceu está C'
    outputText += '${feelslike}, There is a ${precip}% chance of rain, and sky is ${weather.toLowerCase()}.'
})




module.exports = { getWather }