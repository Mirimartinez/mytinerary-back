const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

 describe('POST /signup', function () {

    it('Must respond with the id', function(){
        request(app)
            .post('/auth/signup')
            .send({
                name:"Steven",
                lastName:"Tyler",
                mail:"stevensmokingtyler@gmail.com",
                password:"AerosmithRocks!",
                photo:"https:  upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Steven_Tyler_by_Gage_Skidmore_3.jpg/330px-Steven_Tyler_by_Gage_Skidmore_3.jpg",
                country:"United States",
                from: "form"
            })  
            .then(response => {
                city = response.body.id
                assert.isString(response.body.id)
                done()
                })
    })

    it('Must respond with 200 status code', function(done){
        request(app)
            .post('/auth/signup')
            .send({
                name:"Steven",
                lastName:"Tyler",
                mail:"stevensmokingtyler@gmail.com",
                password:"AerosmithRocks!",
                photo:"https:  upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Steven_Tyler_by_Gage_Skidmore_3.jpg/330px-Steven_Tyler_by_Gage_Skidmore_3.jpg",
                country:"United States",
                from: "form"
            })
            .expect(200, done)
         
    })

    it('Must respond with 404 status code', function(done){
        request(app)
            .post('/signup')
            .send({})
            .expect(404, done)
         
         
    })


   })
