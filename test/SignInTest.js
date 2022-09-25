const request = require('supertest')
const app = require('../app')

 describe('POST /auth/signin', function () {
    it('Must respond with the name', function(){
        request(app)
            .post('/auth/signin')
            .send({
            mail:"dwayne.johnson@gmail.com",
            password: "theRock",
            role: "user"
            })  
            .then(response => {
                city = response.body.name
                assert.isString(response.body.name)
                done()
            })
    })

    it('Must respond with 200 status code', function(done){
        request(app)
            .post('/auth/signin')
            .send({
                mail:"dwayne.johnson@gmail.com",
                password: "theRock",
                from: 'form'
            })
            .expect(200)
            done()
          
    })

    it('Must respond with 404 status code', function(done){
        request(app)
            .post('/auth/signin')
            .send({})
            .expect(404, done)
          
          
    })


     })
