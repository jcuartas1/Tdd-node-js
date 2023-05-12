
const express = require('express')
const parser = require('body-parser')
const { post } = require('./src')
const { authenticate } = require('./middlewares')
const services = require('./services')

const app = express()
const port = 3000

app.use(parser.urlencoded({extended: false}))

app.use(parser.json())

const postHandlers = post(services)

app.post('/',authenticate ,postHandlers.post)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app