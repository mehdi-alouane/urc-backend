const v1Router = require('express').Router()

const userRouter = require('./user')

v1Router.use('/user', userRouter)

module.exports = v1Router
