const Joi = require('joi')

module.exports = {
  // POST /api/v1/user/regitser
  register: {
    body: {
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().required()
    }
  },

  // POST /api/v1/user/login
  login: {
    body: {
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().required()
    }
  }
}
