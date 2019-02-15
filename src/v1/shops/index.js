const shopsRouter = require('express').Router()

const shopsCtrl = require('./shopsCtrl')

shopsRouter.route('/nearby')
  .post(shopsCtrl.getNearByShops)

module.exports = shopsRouter
