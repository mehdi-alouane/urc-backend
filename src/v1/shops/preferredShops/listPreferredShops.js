const { User } = require('../../../../db/models/userModel')

module.exports = async (req, res) => {
  try {
    const { userId } = req.params
    const preferredShops = await User
      .findOne({ _id: userId })
      .populate({
        path: 'preferredShops',
        model: 'Shop',
        select: 'name picture city'
      })
      .select('preferredShops')

    res.status(200).send(preferredShops)
  } catch (err) {
    console.log(err.message)
  }
}
