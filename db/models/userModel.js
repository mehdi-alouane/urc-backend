const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  // username: String,
  email: String,
  passwod: String,
  preferredShops: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop'
  }, { id: false }],
  created_At: {
    type: Date,
    default: Date.now
  }
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = {
  User
}
