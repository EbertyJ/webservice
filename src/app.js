const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const hbs = require('hbs')
dotenv.config()


const {port} = require('../config/constant').server
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

// endpoints
app.get('/', (req, res) => {
  res.render('home', {
    title: '🛌 Home',
  })
})


app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help!',
    helpMessage: 'Aqui você encontra um pouco de ajuda...',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Eberty Junior',
  })
})

app.get('weather', (req, res) => {
  res.json({
    forecast: 'minha previsão do tempo',
    location: {
      latitude: 9.87345,
      longitude: 9.827348
    }
  })
})


app.get('/help*', (req, res) =>{
  res.send("Topico de ajuda não encontrado")
})

app.get('*', (req, res) => {
  res.send("404 Page not found")
})

app.listen(port, () => {
  console.log('🐱‍🏍 Starting app on port ${port}...')
})




//const express = require('express')
//const constants = require('../config/constant')


//const app = express()
//const port = constants.server.port

//app.get('/', (Request, response) = {
  //  response.send("Respondendo a rota raiz")
//})

//app.get('/about', (req, res) = {

//})

//app.listen(port, () = {
//  console.log('Chama, acunha, paoca ${port}...')
//})



//const {getWather} = require('/.utiils/weatherService')

//const lat = '-7,2237358', lon = '-39678.3265404'

//getWather(lat, lon, (erro, mensagem) =>{
    //console.log(erro)
  //  console.log(mensagem)
//})