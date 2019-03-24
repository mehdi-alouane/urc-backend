const { Shop } = require('../../../db/models/shopModel')

module.exports = {
  async getNearByShops (req, res) {
    const page = Number(req.query.page) || 0
    const limit = Number(req.query.limit) || 10
    const skip = page * limit

    try {
      const coordinates = req
        .params
        .coordinates
        .split(',')
        .map(parseFloat)

      // console.log(coordinates)

      const nearbyShops = await Shop
        .find({
          location: {
            $near: {
              $geometry: {
                type: 'Point',
                coordinates
              },
              $minDistance: 0
            }
          }
        })
        .skip(skip)
        .limit(limit)
        .exec()

      if (!nearbyShops) {
        return res.status(401).send({
          msg: 'something wrong try again'
        })
      }

      return res.status(200).send({
        page: page,
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
