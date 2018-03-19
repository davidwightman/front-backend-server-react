const express = require('express')
const cors = require('cors')
const config = require('./config')
const contacts = require('./contacts')

const app = express()

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  const help = `
  <pre>
    Use an Authorization header to work with your own data:
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})
    The following endpoints are available:
    GET /contacts
  </pre>
  `

  res.send(help)
})

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})

app.get('/contacts', (req, res) => {
  res.send(contacts.get(req.token))
})



app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})