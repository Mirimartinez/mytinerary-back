const CityModel = require ("../models/City.js")


const cityController = {

    createCity: async(req,res)=> {
        console.log(req)
        //const {city, country, photo, population, fundation} = req.body

        try{
            city = await new CityModel(req.body).save()
            res.status(201).json({
                message:'city created',
                response: city._id,
                success: true,
                id : city._id
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
            fundation:fundation
    }).save()
    res.status(200).json({})
    }

    catch(cacheError) {

        error = cacheError
        console.log(error)
        res.status(400).json({
            response: error ? 'ERROR' : putCity,
            success: error ? false : true,
            error: error
        })
    }
},





updateCity: async (req, res) =>{
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
let city= {}
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






readCities : async (req, res) => {
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

readCity: async(req,res) =>{
        const {id} = req.params
         oneCity = {}
         error = null


    try {

       let getCity = await CityModel.findOne({_id:id})
       //console.log(oneCity)


       if(getCity) {
        res.status(200).json({

            message: "you get one city",
            reponse: getCity,
            sucess: true
        }) 
            } else {
                res.status(404).json({
                    menssage: "could't find city",
                    success: false
                })
            }


    } catch(error){
        console.log(error)
        res.status(400).json({
            message: "error",
            sucess: false
        })
    }



}}

module.exports = cityController


