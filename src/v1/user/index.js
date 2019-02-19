const userRouter = require('express').Router()
const validate = require('express-validation')

const loginCtrl = require('./login/loginCtrl')
const registerCtrl = require('./register/registerCtrl')
const userCtrl = require('./userCtrl')
const verifyToken = require('./verifyToken')
const validateUser = require('./validateUser')

userRouter.route('/login')
  .post(validate(validateUser.login), loginCtrl.loginUser)

userRouter.route('/register')
  .post(validate(validateUser.register), registerCtrl.registerUser)

userRouter.route('/me')
  .get(verifyToken, userCtrl.getUserDetails)

module.exports = userRouter
