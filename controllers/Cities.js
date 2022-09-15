const CityModel = require ("../models/City.js")


const cityController = {
    createCity: async(req,res)=> {
        try{
            city = await new CityModel(req.body).save()
            res.status(201).json({
                message:'city created',
                response: city._id,
                success: true,
            })
        } catch (error){
            console.log(error)
            res.status(400).json({
                message:'could`t create city' ,
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
                message: "city updated",
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
    let city
    try {
        city = await CityModel.find()
        res.json(city)
    } catch (error) {
        console.log(error);
        res.status(500).json()
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