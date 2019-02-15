const v1Router = require('express').Router()

const userRouter = require('./user')
const shopsRouter = require('./shops')

v1Router.use('/user', userRouter)
v1Router.use('/shops', shopsRouter)

module.exports = v1Router
