const mongoose = require('mongoose')

const preferredShopsSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  preferredShops: [{
    ref: 'Shop',
    type: String
  }]
})

const preferredShops = mongoose.model('preferredShops', preferredShopsSchema, 'users')

module.exports = {
  preferredShops
}
