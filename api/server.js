const express = require('express')
const recipesRouter = require('./api/router.js')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)


module.exports = server