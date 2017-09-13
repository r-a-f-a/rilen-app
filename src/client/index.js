import rest from 'rest'
// Configurations of client HTTP
var pathPrefix = require('rest/interceptor/pathPrefix')
var mime = require('rest/interceptor/mime')
var defaultRequest = require('rest/interceptor/defaultRequest')
var errorCode = require('rest/interceptor/errorCode')
var jwtAuth = require('.././interceptors/jwtAuth')

// Set client function on window dom
window.client = rest.wrap(pathPrefix, { prefix: process.env.API })
                  .wrap(mime)
                  .wrap(defaultRequest, {
                    headers: {
                      'X-Requested-With': 'rest.js',
                      'Content-Type': 'application/json'
                    }
                  })
                  .wrap(errorCode, { code: 400 })
                  .wrap(jwtAuth)
