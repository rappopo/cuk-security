'use strict'

module.exports = function(cuk) {
  const { path } = cuk.lib
  return Promise.resolve({
    id: 'security',
    tag: 'util, middleware',
    level: 1
  })
}