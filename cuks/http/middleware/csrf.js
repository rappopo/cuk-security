'use strict'

const CSRF = require('koa-csrf')

module.exports = function(cuk) {
  const { _, helper } = cuk.lib

  return {
    handler: function(options) {
      return new CSRF(helper.makeOptions('security', 'cuks.http.middleware.cors', options))
    }
  }
}