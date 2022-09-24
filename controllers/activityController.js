const Activity = require('../models/Activity')

const activityController = {
    create: async(req,res) => {
        try {
            let activity = await new Activity(req.body).save()
            res.status(201).json({
                message: "Activity created",
                response: activity._id,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't activity created",
                success: false
            })
        }
    },

    getActivity: async (req, res) => {
        const {id} = req.params

        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }

        try{
            let activity = await Activity.findOne({_id:id})
            if(activity){
                res.status(200).json({
                    message: "activity found",
                    response: activity,
                    success: true
                })
            } else {
                res.status(400).json({
                    message: "Couldn't find activity",
                    success: false
                })
            }
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "Error",
                success: false
            })
        }
    },

    all: async(req, res) => {
        let query = {}

        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }

        try {
            let activities = await Activity.find(query)
            .populate("itinerary",{name:1})
            if (activities) {
                res.status("200").json({
                    message: "These are the activities",
                    response: activities,
                    success: true,
            })
            } else {
                res.status("404").json({
                    message: "No activities could be found",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "Your activity couldn't be added.",
                success: false,
            })
        }
    },

    update: async (req, res) => {
        const {id} = req.params

        try{
            let activities = await Activity.findOneAndUpdate({_id:id}, req.body, {new: true})
            if(activities){
                res.status(200).json({
                    message: "Activity updated",
                    response: activities,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Could't find activity",
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

    destroy: async (req, res) => {
        const {id} = req.params

        try{
            await Activity.findOneAndDelete({_id:id})
            res.status(200).json({
                message: "Activity deleted",
                success: true
            })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message: "Error",
                success: false
            })
        }
    }
}

module.exports = activityController