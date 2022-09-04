const CityModel = require("../models/City.js")


const cityController = {

    createCity: async(req,res)=> {
        console.log(req)
        

        try{
            await new CityModel(req.body).save()
            res.status(201).json({
                message:'city created',
                response:CityModel._id,
                success: true
            })

        } catch (error){
            console.log(error)
            res.status(400).json({
                message:'could`t create city' ,
                success: false
                
            })
            
}          },






updateCity: async (req, res) =>{
const id = req.params.id
const city = req.body.data
let citydb = {}
let error = null

try{
    citydb = await CityModel.findOneAndUpdate({ _id: id}, city,{new: true})

    if (citydb){
        res.status(200).json({
            message:"the city was updated successfully",
            response :citydb,
            succes: true,
        })
    }else {
        res.status(404).json({
            message: "No city found",
            succes: false
        })
    }
    
} catch (error) {
        console.log(error)
        res.status(400).json({
    message:"Error",
    succss: true,
})
}},



removeCity: async (req, res) => {
const id = req.params.id
let city 
let error = null 
try{
    city= await CityModel.findOneAndDelete({ _id: id })
    res.status(200).json({
        message: "city delated",
        succes: true,
    })
} catch (error) {
    console.log(error)
res.status(404).json({
    message: "Error",
    succes: false,
})
}},






readCities : async (req, res) => {
    const query = req.query
    let cities

    if(query.city){
        let filterString = new FilterString('^${query.city}',"i")
        query.city = filterString
    }

    try{
        Cities = await CityModel.find(query? query:null)
        if(Cities) {
            res.status(200).json({
                message: "the following was found",
                response: cities,
                succes: true,
            })
        } else {
            res.status(404).json({
                menssage: "the city was not found",
                succes: false,
            })
        }

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