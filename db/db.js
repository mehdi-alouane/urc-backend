const mongoose = require('mongoose')
const config = require('../config/config.json')

const dbURI = process.env.NODE_ENV === 'production' ? config.db.prod.dbURI : config.db.dev.dbURI

module.exports = async () => {
  await mongoose.connect(dbURI)
    .then(_ => console.log(`Connected to mopngoDB`))
    .catch(err => console.warn(`Mongodb error: ${err}`))
}
