const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

 describe('POST /signup', function () {

    it('Must respond with the id', function(done){
        request(app)
            .post('/signin')
            .send({
                name:"Miri",
            lastName:"Martinez",
            mail:"mirianamartinezokgmail.com",
            password: "bye123",
            photo: "https://static.vecteezy.com/system/resources/previews/008/005/254/non_2x/girl-head-in-profile-icon-avatar-login-isolated-icon-illustration-vector.jpg",
            country: "Argentina"
            
            })  
            .expect(201)
            .end(function (err, res){
                if(err) return done(err);
                return done();
            })
    })

    it('Must respond with 201 status code', function(done){
        request(app)
            .post('/signin')
            .send({
                name:"Miri",
                lastName:"Martinez",
                mail:"mirianamartinezokgmail.com",
                password: "bye123",
                photo: "https://static.vecteezy.com/system/resources/previews/008/005/254/non_2x/girl-head-in-profile-icon-avatar-login-isolated-icon-illustration-vector.jpg",
                country: "Argentina"
            })
            .expect(201, done)
            
    })

    it('Must respond with 400 status code', function(done){
        request(app)
            .post('/signin')
            .send({})
            .expect(400, done)
            
    })


     })
