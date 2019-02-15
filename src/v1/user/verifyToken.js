const jwt = require('jsonwebtoken')
const config = require('../../../config/config.json')

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || ''
    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, config.jwt.secret)
    // console.log(decoded)
    req.user = decoded.id
    next()
  } catch (err) {
    console.log(err.message)
  }
}
