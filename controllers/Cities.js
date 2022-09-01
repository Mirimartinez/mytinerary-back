const CityModel = require("../models/City.js")


const cityController = {

    create: async(req,res)=> {
        console.log(req)
        //const {city, country, photo, population, fundation} = req.body

        try{
            await new CityModel(req.body).save()
            res.status(201).json({
                message:'city created',
                success: true
            })

        } catch (error){
            console.log(error)
            res.status(400).json({
                message:'could`t create city' ,
                success: false
                
            })
            
}          },



put: async(req, res) => {

    const {city, country, photo, population, fundation} = req.body.data
    let putCity = {}
    let error = null
    
    try{
        
        city = await new CityModel({
            city:city,
            country:country,
            photo:photo,
            population:population,
            fundation:fundation,
    }).save()
    } catch(cacheError) {
        error = cacheError
        console.log(error)
        res.json({
            response: error ? 'ERROR' : putCity,
            success: error ? false : true,
            error: error
        })
    }
},





modifyCity: async (req, res) =>{
const id = req.params.id
const city = req.body.data
let citydb = {}
let error = null

try{
    citydb = await CityModel.findOneAndUpdate({ _id: id}, city,{new: true})
} catch (err) { error = err}
res.json({
    response: error ? 'ERROR' : citydb,
    succss: error ? 'ERROR' : citydb,
    error: error
}) },



removeCity: async (req, res) => {
const id = req.params.id
let city 
let error = null 
try{
    city= await CityModel.findOneAndDelete({ _id: id })
} catch (err) {error = err}
res.json({
    response: error ? 'ERROR' : city,
    success: error ? false : true,
    error: error
})
},



read : async (req, res) => {
    let cities ={}
    let error = null

    try{
        cities = await CityModel.find()
    } catch (err) {error = err}
    res.json({
        response: error ? 'ERROR' : {cities},
        success: error ? false : true,
        error: error
    })
},

    readOne: async(req,res) =>{
        const {id} = req.params
         oneCity = {}
         error = null


    try {

       let getCity = await CityModel.findOne({_id:id})
       //console.log(oneCity)

       if(getCity) {
        res.status(200).json({

            message: "you get one event",
            reponse: getCity,
            sucess: true
        }) 
            } else {
                res.status(404).json({
                    menssage: "could't find event",
                    success: false
                })
            }

    } catch(error){
        console.log(error)
        res.status(400).json({
            message: "Not",
            sucess: false
        })
    }

  


}}



    







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