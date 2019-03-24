const shopsRouter = require('express').Router()

const shopsCtrl = require('./shopsCtrl')
const addTopreferredShops = require('./preferredShops/addToPreferredShops')
const listPrefferedShops = require('./preferredShops/listPreferredShops')
const removeFromPreferredShops = require('./preferredShops/removeFromPreferredShops')

shopsRouter.route('/nearby/:coordinates')
  .get(shopsCtrl.getNearByShops)

shopsRouter.route('/preferred-shops')
  .post(addTopreferredShops)

shopsRouter.route('/preferred-shops')
  .post(removeFromPreferredShops)

shopsRouter.route('/preferred-shops/:userId')
  .get(listPrefferedShops)

module.exports = shopsRouter
