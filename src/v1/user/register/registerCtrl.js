const { User } = require('../../../../db/models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../../../../config/config.json')

module.exports = {
  async registerUser (req, res) {
    const { email, password } = req.body
    const hashedPasswd = await bcrypt.hash(password, 10)
    try {
      const user = await User.create({
        email: email,
        password: hashedPasswd
      })

      if (!user) {
        return res.statsus(401).send({
          msg: 'something wrong, please try again!'
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
      console.log(`Register Error: ${err.message}`)
      return res.statsus(500).send({
        auth: false,
        msg: err.message
      })
    }
  }
}
