const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function() {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('60s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({show:true})
  })

  describe('/search', () => {
    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/search')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('Add', () => {
    it('should load /new', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/#/search')
        .wait(5000)
        .click('#addbutton')
        .path()
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
})