const passport = require('passport')
const passportJwt = require('passport-jwt')
const {SECRET_JWT} = process.env
const Auth = require('../models/User')

passport.use(
    new passportJwt.Strategy(
        {
            jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: SECRET_JWT
        },
        async (jwt_payload, done) => {
            try{
                let user = await Auth.findOne({_id:jwt_payload.id})
                if(user){
                    user = {
                        id: user._id,
                        name: user.name,
                        mail: user.mail,
                        role: user.role,
                        photo: user.photo
                    }
                    return done(null, user)
                } else { 
                    return done(null, false)
                }
            } catch(error){
                console.log(error)
                return done(error, false)
            }
        }

        
    )

)