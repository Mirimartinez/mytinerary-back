const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async(req, res) =>{
        try{
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: "The itinerary has been created successfully! 🥳",
                response: itinerary._id,
                success: true
            })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message:"Couldn't create itinerary... 😧",
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
                message: "City updated successfully! 🥳",
                response: itinerary,
                success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find that itinerary... 🧐",
                    success: false
                })
            }
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to update the itinerary 😖",
                success: false
            })
        }
    },

    destroy: async(req, res) =>{
        const {id} = req.params
        try{
            await Itinerary.findByIdAndDelete({_id:id})
                res.status(200).json({
                    message: "Itinerary deleted successfully! 🥳",
                    success: true
                })
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to delete the itinerary 😖",
                success: false
            })
        }
    },

    getItinerary: async (req, res) => {
        const {id} = req.params
        
        try{
            let itinerary = await Itinerary.findOne({_id:id})
            if(itinerary){
                res.status(200).json({
                    message: "This is the itinerary you were looking for 🤩",
                    response: itinerary,
                    success: true
                })
            } else {
                res.status(400).json({
                    message: "Couldn't find that itinerary... 🧐",
                    success: false
                })
            }
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to get the itinerary 😖",
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
            query.userName = req.query.user
        }

        try {
            let itineraries = await Itinerary.find(query)
            .populate("user",{name:1, lastName:1, photo:1})
            if (itineraries) {
                res.status("200").json({
                    message: "These are all the itineraries 🤩",
                    response: itineraries,
                    success: true,
            })
            } else {
                res.status("404").json({
                    message: "Couldn't find any itinerary 🧐",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "An error ocurred trying to get the itineraries 😖",
                success: false,
            })
        }
    }
}

module.exports = itineraryController