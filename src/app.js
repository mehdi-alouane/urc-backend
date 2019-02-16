const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()

const v1Router = require('./v1')
const runDb = require('../db')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1', v1Router)

runDb()

module.exports = app
