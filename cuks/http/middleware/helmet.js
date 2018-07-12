'use strict'

const helmet = require('koa-helmet')

module.exports = function(cuk) {
  const { _, helper } = cuk.pkg.core.lib

  return {
    global: true,
    level: 2,
    handler: function(options) {
      return helmet(helper('core:makeOptions')('security', 'cuks.http.middleware.helmet', options))
    }
  }
}