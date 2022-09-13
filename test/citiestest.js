const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

describe('POST /cities', function(){
    it('Must respond with the id', function(done){
        request(app)
            .post('/cities')
            .send({
                city:"city",
            country:"country",
            photo: "https://i.ytimg.com/vi/O6Cg4ing5bo/maxresdefault.jpg",
            population:12121212,
            fundation:1212
            })  
            .expect(201)
            .end(function (err, res){
                if(err) return done(err);
                return done();
            })
    })

    it('Must respond with 201 status code', function(done){
        request(app)
            .post('/cities')
            .send({
            city:"city",
            country:"country",
            photo: "https://i.ytimg.com/vi/O6Cg4ing5bo/maxresdefault.jpg",
            population:12121212,
            fundation:1212
            })
            .expect(201, done)
            
    })

    it('Must respond with 400 status code', function(done){
        request(app)
            .post('/cities')
            .send({})
            .expect(400, done)
            
    })
})