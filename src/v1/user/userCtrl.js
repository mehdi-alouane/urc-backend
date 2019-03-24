const { User } = require('../../../db/models/userModel')

module.exports = {
  async getUserDetails (req, res) {
    try {
      const { id } = req.user
      const user = await User
        .findOne({ id })
        .select(['_id', 'email', 'username'])

      if (!user) {
        return res.status(401).send({
          msg: 'No user found.'
        })
      }
      return res.status(200).send(user)
    } catch (err) {
      console.log(`UserCtrl error: ${err.message}`)
      return res.status(500).send({
        msg: err.message
      })
    }
  }
}
