const request = require('postman-request');
const {geocode_variables} = require('config/constants');
const { response } = require('express');

const geocode = (city, callback) => {
    const { access_token, base_url} = geocode_variables
    const url = '${base_url}/${city}.json?access_token=${access_token}'
    request({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unavalible weather service', undefined)
        } else if (response.body.message) {
            callback('Invalid credentials', undefined)
        } else {
            const [longitude, latitude] = response.body.features[0].center
            callback(unddefined, { latitude, longitude })
        }
    })
}

module.exports = { geocode }
