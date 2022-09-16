  const request = require('supertest')
  const app = require('../app')
  const {assert} = require('chai')

  describe('POST /cities', function () {
      it('Must respond with the id', function () {
          request(app)
              .post('/cities')
              .send({
                  city: "New York",
      country:"United States",
      photo:"https: estaticos.muyinteresante.es/uploads/images/test/60b4a8d15cafe819e843397a/empire-state-redes.jpg",
      population:18867000,
      foundation:1624
              })
              .then(response => {
                  city = response.body.id
                  assert.isString(response.body.id)
                  done()
              })
      })

      it('Must respond with 201 status code', function (done) {
          request(app)
              .post('/cities')
              .send({
                  city: "New York",
                  country:"United States",
                  photo:"https: estaticos.muyinteresante.es/uploads/images/test/60b4a8d15cafe819e843397a/empire-state-redes.jpg",
                  population:18867000,
                  foundation:1624
              })
              .expect(201, done)
      })

      it('Must respond with 400 status code', function (done) {
          request(app)
              .post('/cities')
              .send({
                  city: "Miami"
              })
              .expect(400)
              .end(function (err, res) {
                  if (err) return done(err);
                  return done();
              })
      })
  })