'use strict'

const helmet = require('koa-helmet')

module.exports = function (cuk, name) {
  const { _, helper } = cuk.pkg.core.lib

  return {
    handler: function (options) {
      return helmet[name](helper('core:makeOptions')('security', 'cuks.http.middleware.helmet.' + name, options))
    }
  }
}
