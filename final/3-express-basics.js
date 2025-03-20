const express = require('express');

const app = express()

app.get('/', (req, res) => {
  console.log('Zoh hit the resource')
  res.status(200).send('Home Page')
})

app.get('/zoh', (req,res) => {
  res.status(200).send('Wariz Page')
})

app.all('*', (req,res) => {
  res.status(404).send(`<h1> Page does not exist </h1>`)
})

app.listen(5000, () => {
  console.log(`Server is listening on port 5000 Warizoh`)

})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen