const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function() {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('60s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({show:true})
  })

    it('should load search', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/#/search')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
    it('should load new', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/#/new')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
    it('should load edit', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/#/edit/1')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
})

describe('Clicks', function() {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('60s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({show:true})
  })

  describe('Navigation', () => {
    it('should add new key-value element', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/#/search')
        .click('#addbutton')
        .wait(2000)
        .click('#plusbutton')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })

    it('should modified an element (saving)', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/#/search')
        .click('.editbutton')
        .wait(2000)
        .click('#plusbutton')
        .click('#savebutton')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })

    it('should modified an element (closing)', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:8080/#/search')
        .click('.editbutton')
        .wait(2000)
        .click('#plusbutton')
        .click('#closebutton')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })

  })
})