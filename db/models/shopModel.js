const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  name: String,
  picture: String,
  email: String,
  city: String,
  preferredShops: [{
    type: String,
    unique: true,
    required: true
  }],
  location: {
    type: {
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
})

shopSchema.index({ location: '2dsphere' })

const Shop = mongoose.model('Shop', shopSchema)

module.exports = {
  Shop
}
