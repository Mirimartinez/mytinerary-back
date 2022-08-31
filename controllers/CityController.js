const CityModel = require("../models/City.js")


const cityController ={

    create: async(req,res)=> {
        const {city, coutry, photo, population, fundation} = req.body
        try{
            await new City({city, coutry, photo, population, fundation}).save()
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