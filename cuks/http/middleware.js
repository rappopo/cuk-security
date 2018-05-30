'use strict'

const helmet = require('koa-helmet')
const CSRF = require('koa-csrf')

module.exports = function(cuk) {
  const { _, helper } = cuk.lib
  const pkgId = 'security'

  return {
    helmet: {
      global: true,
      level: 2,
      handler: function(options) {
        return helmet(helper.makeOptions(pkgId, 'http.middleware.helmet', options))
      }
    },
    csrf: {
      handler: function(options) {
        return CSRF(helper.makeOptions(pkgId, 'http.middleware.cors', options))
      }
    }
  }
}