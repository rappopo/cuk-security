'use strict'

const hs = require('../_helmet_single')

module.exports = function(cuk) {
  return hs(cuk, 'hidePoweredBy')
}