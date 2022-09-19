const CityModel = require ("../models/City.js")


const cityController = {
    createCity: async(req,res)=> {
        try{
            city = await new CityModel(req.body).save()
            res.status(201).json({
                message: "The city has been created successfully! 🥳",
                response: city._id,
                success: true,
            })
        } catch (error){
            console.log(error)
            res.status(400).json({
                message:"Couldn't create city... 😧",
                success: false
        })
    }
},

updateCity: async (req, res) => {
    const {id} = req.params
    try{
        let city = await CityModel.findOneAndUpdate({_id:id}, req.body, {new: true})
            if(city){
            res.status(200).json({
                message: "City updated successfully! 🥳",
                response:city,
                success: true
                })
            }else{
                res.status(404).json({
                    message: "Couldn't find that city... 🧐",
                    success: false
                })
            }
    } catch(error){
        console.log(error)
        res.status(400).json({
            message: "An error ocurred trying to update the city 😖",
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
                message: "City deleted successfully! 🥳",
                response: id,
                success: true
            })
        } else {
            res.status(404).json({
                message: "Couldn't find the city... 😧",
                success: false
            })
        }
    } catch(error){
        console.log(error)
        res.status(400).json({
            message: "An error ocurred trying to delete the city 😖",
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
                message: "These are all the cities 🤩",
                response: cities,
                success: true
            })
        } else {
            res.status(404).json({
                message: "Couldn't find any city 🧐",
                success: false
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error ocurred trying to get the cities 😖",
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
                message: "This is the city you were looking for 🤩",
                response:city,
                success: true
                })
            }else{
                res.status(404).json({
                    message: "Couldn't find that city... 🧐",
                    success: false
                })
            }
    } catch(error){
        console.log(error)
        res.status(400).json({
            message: "An error ocurred trying to get the city 😖",
            success: false
        })
    }
},
}

module.exports = cityController