const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res

// 1. Use vs route
// 2. options - our own / express / third party

// app.use([authorize, logger])
// api/home/about/products

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get('/about', (req, res) => {
  res.send('About Page')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items',(req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})