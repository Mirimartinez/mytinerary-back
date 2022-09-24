const CityModel = require ("../models/City.js")
const joi = require('joi')
const validator = joi.object({
    city: joi.string().required(),
    country: joi.string().required(),
    photo: joi.string().uri().required(),
    population: joi.number().integer().min(1000).max(1000000000).required(),
    foundation: joi.date().max(new Date()).required(),
})


const cityController = {
    createCity: async(req,res)=> {
        try{
            let result = await validator.validateAsync(req.body)
            if(req.user.role === "admin"){
                city = await new CityModel(result).save()
                res.status(201).json({
                    message:'City created',
                    response: city._id,
                    success: true,
                })
            } else {
                res.status("401").json({
                    message: "Unauthorized",
                    success: true,
                })
            }
        } catch (error){
            console.log(error)
            res.status(400).json({
                message:'Could`t create city' ,
                success: false
        })
    }
},

updateCity: async (req, res) => {
    const {id} = req.params
    const {role} = req.user
    const {city, country, photo, population, foundation} = req.body
    console.log(req.body);
    let putCity = {}
    let currentCity
    try{
        if (putCity) {
            let currentCity =  await CityModel.findOne({_id:id})
            let result = await validator.validateAsync(req.body)
            if (role === "admin") {
                putCity  = await CityModel.findOneAndUpdate({_id:id}, result, {new: true})
                res.status(200).json({
                    message: "City edited",
                    response:putCity,
                    success: true
                    })
                }else{
                    res.status(401).json({
                        message: "Unauthorized",
                        success: true
                    })
                }
            } else {
                res.status(404).json({
                    message: "Could not find the city.",
                    success: false,
                })
            }
            } catch(error){
            console.log(error)
            res.status(400).json({
                message: "Could't find city",
                success: false
            })
        }            
    },


removeCity: async(req, res) =>{
    const {id} = req.params
    try{
        let city = await CityModel.findOneAndDelete({_id:id})
        if(city) {
            res.status(200).json({
                message: "city delete",
                response: id,
                success: true
            })
        } else {
            res.status(404).json({
                message: "couldn't find city",
                success: false
            })
        }
    } catch(error){
        console.log(error)
        res.status(400).json({
            message: "error",
            success: false
        })
    }
},

readCities: async (req, res) => {
    const query ={}
    let cities
    if(req.query.city){
        let regExp = new RegExp(`^${req.query.city}`,"i")
        query.city = regExp
    }
    try {
        cities = await CityModel.find(query)
        if(cities){
            res.status(200).json({
                message: "Found cities following",
                response: cities,
                success: true
            })
        } else {
            res.status(400).json({
                message: "We can't found cities you are following",
                success: false
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error,
            success: false
        })
    }
},

readCity: async (req, res) => {
    const {id} = req.params
    try{
        let city = await CityModel.findOne({_id:id})
            if(city){
            res.status(200).json({
                message: "found city",
                response:city,
                success: true
                })
            }else{
                res.status(404).json({
                    message: "couldn't find city",
                    success: false
                })
            }
    } catch(error){
        console.log(error)
        res.status(400).json({
            message: "error",
            success: false
        })
    }
},
}

module.exports = cityController