const { preferredShops } = require('../preferredShops/preferredShopsModel')

module.exports = async (req, res) => {
  try {
    const { userId, shopId } = req.body
    const shops = await preferredShops
      .update({ _id: userId }, {
        $addToSet: {
          preferredShops: shopId
        }
      })

    console.log(shops)

    res.status(200).send(shops)
  } catch (err) {
    console.log(err.message)
  }
}
