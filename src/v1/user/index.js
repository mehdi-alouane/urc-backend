const userRouter = require('express').Router()

const loginCtrl = require('./login/loginCtrl')
const registerCtrl = require('./register/registerCtrl')
const userCtrl = require('./userCtrl')
const verifyToken = require('./verifyToken')

userRouter.route('/login')
  .post(loginCtrl.loginUser)

userRouter.route('/register')
  .post(registerCtrl.registerUser)

userRouter.route('/me')
  .get(verifyToken, userCtrl.getUserDetails)

module.exports = userRouter
