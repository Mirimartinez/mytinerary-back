const request = require('supertest')
const app = require('../app')


describe('GET /commments', function(){
    it('Must respond with 200 status code', function (done){
        request(app)
        .get('/comments')
        .send({})
        .expect(200, done) 
    }
    )
    it('Must respond with 200 status code', function (done){
        request(app)
        .get('/comments/63277e90ce03884421136ab5')
        .send({})
        .expect(200, done) 
    }
    )
})

describe('POST /comments', function(){
    it('Must respond with the 201 status code', function(){
        request(app)
        .post('/comments')
        .send({
            comment: "Unforgettable...",
            itinerary: "632169c7cf58505dcc7adccc"
        })
        .then(response => {
            comment = response.body.id
            assert.isString(response.body.id)
            done()
        })
    })
})

describe('PATCH /comments', function(){
    it('Must respond with the 200 status code', function(){
        request(app)
        .post('/comments/63277e90ce03884421136ab5')
        .send({
            comment: "Unforgettable...",
            itinerary: "632169c7cf58505dcc7adccc"
        })
        .then(response => {
            comment = response.body.id
            assert.isString(response.body.id)
            done()
        })
    })
})