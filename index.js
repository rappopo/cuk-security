'use strict'

module.exports = function (cuk) {
  const { path } = cuk.pkg.core.lib
  return Promise.resolve({
    id: 'security',
    level: 1
  })
}