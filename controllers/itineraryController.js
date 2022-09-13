const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async(req, res) =>{
        try{
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: "itinerary has been created succesfuly",
                response: itinerary._id,
                success: true
            })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message:"couldn't create itinerary",
                success: false
            })
        }
    },

    update: async(req, res) =>{
        const{id} = req.params
        try{
            let itinerary = await Itinerary.findByIdAndupdate({_id:id}, req.body, {new: true})
            if(itinerary){
            res.status(200).json({
                message: "itinerary updated",
                response: itinerary,
                success: true
                })
            } else {
                res.status(404).json({
                    message: "couldn't find itinerary",
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

    destroy: async(req, res) =>{
        const {id} = req.params
        try{
            await Itinerary.findByIdAndDelete({_id:id})
                res.status(200).json({
                    message: "itinerary delete",
                    success: true
                })
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    all: async(req, res) => {
        let query = {}

        if(req.query.city){
            query.city = req.query.city
        }

        if(req.query.user){
            query.user = req.query.user
        }

        try {
            let itineraries = await Itinerary.find(query)
            .populate("user",{name:1, lastName:1, photo:1})
            if (itineraries) {
                res.status("200").json({
                    message: "These are the itineraries",
                    response: itineraries,
                    success: true,
            })
            } else {
                res.status("404").json({
                    message: "No itineraries could be found",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "Your itinerary couldn't be added.",
                success: false,
            })
        }
    }
}

module.exports = itineraryController