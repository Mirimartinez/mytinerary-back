const CityModel = require("../models/City.js")


const cityController ={

    create: async(req,res)=> {
        const {city, country, photo, population, fundation} = req.body
        try{
            await new CityModel(req.body).create()
            res.status(201).json({
                message:'city created',
                success: true
            })

        } catch (error){
            res.status(400).json({
                message:'could`t create city' ,
                success: false
            })
}          
},

    read: async(req,res) =>{
        const {id} = req.params
         oneCity = {}
         error = null


    try {

       let oneCity = await CityModel.findOne({_id:id})

       if(oneCity) {
        res.status(200).json({
            message: "you get one event",
            reponse: city,
            sucess: true
        }) 
            } else {
                res.status(404).json({
                    menssage: "could't find event",
                    success: false
                })
            }

    } catch(error){
        res.status(400).json({
            message: "",
            sucess: false
        })
    }







    }
}










/* getOneCity: async(req,res) => {
    let oneCity = {}
    let error = null

    let {id} = req.params
    try{
        oneCity = await City.findOne({_id:id})

    } catch(cacheError) {
        error = cacheError
        console.log(error)
        res.json({
            response: error ? 'ERROR' : oneCity,
            success: error ? false : true,
            error: error
        })
    }
    
}

putCity: async(req,res) => {
    let putCity = {}
    let error = null

    let {id} = req.params
    try{
        putCity = await City.findOneAndUpdate({_id:id},req.body,{new: true})
        res.json({
        response: error ? 'ERROR' : putCity,
        success: error ? false : true,
        error: error
    })
    } catch(cacheError) {
        error = cacheError
        console.log(error)
        res.json({
            response: error ? 'ERROR' : putCity,
            success: error ? false : true,
            error: error
        })
    }
    
}

deleteCity: async(req,res) => {
    let deleteCity = {}
    let error = null

    let {id} = req.params
    try{
        deleteCity = await City.findOneAndDelete({_id:id})

    } catch(cacheError) {
        error = cacheError
        console.log(error)
        res.json({
            response: error ? 'ERROR' : deleteCity,
            success: error ? false : true,
            error: error
        })
    }
    
}
 */


module.exports = cityController