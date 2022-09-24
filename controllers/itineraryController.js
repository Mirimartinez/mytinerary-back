const Itinerary = require('../models/Itinerary')
const joi = require('joi')
const validator = joi.object({
    name: joi.string().trim().min(3).max(50).required(),
    user: joi.string().hex().required(),
    city: joi.string().hex().required(),
    price: joi.number().integer().min(1).max(5).required(),
    likes: joi.array().unique((a, b) => a.property === b.property).required(),
    tags: joi.array().items(joi.string()).required(),
    duration: joi.string().min(2).max(100)
})

const itineraryController = {
    create: async(req, res) =>{
        let {name, user, city, price, likes, tags, duration} = req.body
        try{
            let result = await validator.validateAsync({name, user, city, price, likes, tags, duration})
            let itinerary = await new Itinerary(result).save()
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
        const {id, role} = req.user
        try{
            let itinerary = await Itinerary.findOne({_id:id})
            if(itinerary){
                if(itinerary.user.toString() === userId.toString() || role === "admin"){
                    let {
                        name,
                        user,
                        city,
                        price,
                        likes,
                        tags,
                        duration
                    } = itinerary
                let result = {name, city: city.toString(), price, likes,tags,duration, user:id.toString(), ...req.body}
                await validator.validateAsync(result)
                itinerary = await Itinerary.findOneAndUpdate({_id:id}, result, {new:true})
            res.status(200).json({
                message: "City updated successfully! 🥳",
                response: itinerary,
                success: true
                })
            } else {
                res.status(401).json({
                    message: "Unauthorized",
                    success: false
                })
            }
        } else {
            res.status(404).json({
                message: "Couldn't find that itinerary... 🧐",
                success: false
            })
        } 
    }catch(error) {
        console.log(error);
        res.status(400).json({
            message: "An error ocurred trying to update the itinerary 😖",
            success: false
        })
    }
    },

    destroy: async(req, res) =>{
        let {itineraryId} = req.params
        const {id, role} = req.user
        try{
            let itinerary = await Itinerary.findOneAndDelete({_id:id})
            if(itinerary.user === id || role === "admin"){
                res.status(200).json({
                    message: "itinerary deleted successfully! 🥳",
                    response: itinerary_id,
                    success: true,
                })
            } else {
                res.status(401).json({
                    message: "Unauthorized",
                    success: true
                })
            }
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
            query.user = req.query.user
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
    },

    LikeDislike: async(req, res) => {
        let {itineraryId} = req.params
        let {id} = req.user

        try{
            let likedItinerary = await Itinerary.findOne({_id:itineraryId})
            if(likedItinerary && likedItinerary.likes.includes(id)){
                likedItinerary.likes.pull(id)
                await likedItinerary.save()
                res.status(200).json({
                    message: "dislike",
                    success: true
                })
            } else if( !likedItinerary.likes.includes(id)){
                likedItinerary.likes.push(id)
                await likedItinerary.save()
                res.status(200).json({
                    message: 'like',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Itinerary not found",
                    success: false
                })
            }
        }catch(error){
            console.log(error);
            res.status(400).json({
                message: "Error",
                success: false
            })
        }
    },

    ByUser: async(req, res) => {
        try{
            let itineraries = await Itinerary.find({user: req.user.userId.toString()})
            .populate("user", {name:1, photo:1, country:1})
            if(itineraries){
                res.status(200).json({
                    message: "These are your itineraries",
                    response: itineraries,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Could't found your itineraries",
                    success: false
                })
            }
        } catch(error){
            console.log(error);
            res.status(400).json({
                message: "An error has been ocurred",
                success: false
            })
        }
    }
}

module.exports = itineraryController