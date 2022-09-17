const CityModel = require ("../models/City.js")


const cityController = {
    createCity: async(req,res)=> {
        try{
            city = await new CityModel(req.body).save()
            res.status(201).json({
                message:'City created',
                response: city._id,
                success: true,
            })
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
    try{
        let city = await CityModel.findOneAndUpdate({_id:id}, req.body, {new: true})
            if(city){
            res.status(200).json({
                message: "City edited",
                response:city,
                success: true
                })
            }else{
                res.status(404).json({
                    message: "Could't find city",
                    success: false
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