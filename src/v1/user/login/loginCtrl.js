const { User } = require('../../../../db/models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../../../../config/config.json')

module.exports = {
  async loginUser (req, res) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email })

      if (!user) {
        return res.status(401).send({
          auth: false,
          msg: 'Something wrong please try again!'
        })
      }

      const isPasswordValid = bcrypt.compare(password, user.password)

      if (!isPasswordValid) {
        return res.status(401).send({
          auth: false,
          msg: 'Something wrong please try again!'
        })
      }

      const token = jwt.sign({
        id: user.id
      }, config.jwt.secret)

      return res.status(200).send({
        auth: true,
        token: token
      })
    } catch (err) {
      console.log(`Login Auth: ${err.message}`)
      return res.status(500).send({
        auth: false,
        msg: err.message
      })
    }
  }
}
