'use strict'

const helmet = require('koa-helmet')

module.exports = function(cuk) {
  const { _, helper } = cuk.lib

  return {
    global: true,
    level: 2,
    handler: function(options) {
      return helmet(helper.makeOptions('security', 'cuks.http.middleware.helmet', options))
    }
  }
}