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
            .post('/cities')
            .send({})
            .expect(400, done)
            
    })


     it('Must respond with 404 status code', function (done) {
         request(app)
             .post('/auth/signin')
             .send({
                 mail:'mirianamartinezok@gmail.com' ,
                 password: 'bye123',
                 from: 'form'
             })
             .expect(404, done)
     }),

     it('Must respond with 201 status code', function (done) {
         request(app)
             .post('/auth/signin')
             .send({
                 mail:'marcosamu9@gmail.com' ,
                 password: '12343242332432np',
                 from: 'form'
             })
             .expect(200, done)
     })

     it('Must respond with 201 status code', function (done) {
         request(app)
             .post('/auth/signin')
             .send({
                 mail:'amuchasteguiesequiel@gmail.com' ,
                 password: '123456789ese',
                 from: 'google'
             })
             .then(response => {
                 console.log(response.body.id)
                 assert.isString(response.body.id)
                 done()
             }).catch(done)
         })
     })
