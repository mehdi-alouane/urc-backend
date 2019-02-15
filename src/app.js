const express = require('express')
const logger = require('morgan')

const app = express()

const v1Router = require('./v1')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1', v1Router)

module.exports = app
