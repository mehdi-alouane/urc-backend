const { Shop } = require('../../../db/models/shopModel')

module.exports = {
  async getNearByShops (req, res) {
    try {
      const [coordinates] = [req.body.coords]
      const nearbyShops = await Shop.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: coordinates
            },
            $minDistance: 0
          }
        }
      })

      if (!nearbyShops) {
        return res.status(401).send({
          msg: 'something wrong try again'
        })
      }

      return res.status(200).send({
        nearByShops: nearbyShops
      })
    } catch (err) {
      console.log(`UserCtrl error: ${err.message}`)
      return res.status(500).send({
        msg: err.message
      })
    }
  }
}
