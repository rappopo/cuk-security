'use strict'

const CSRF = require('koa-csrf')

module.exports = function (cuk) {
  const { _, helper } = cuk.pkg.core.lib

  return {
    handler: function (options) {
      return new CSRF(helper('core:makeOptions')('security', 'cuks.http.middleware.cors', options))
    }
  }
}