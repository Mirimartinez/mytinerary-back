const Activity = require('../models/Activity')

const activityController = {
    create: async(req,res) => {
        try {
            let activity = await new Activity(req.body).save()
            res.status(201).json({
                message: "Activity created successfully! 🥳",
                response: activity._id,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't create the activity... 😧",
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
                    message: "This is the activity you were looking for 🤩",
                    response: activity,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find that activity... 🧐",
                    success: false
                })
            }
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to get the activity 😖",
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
                    message: "These are all the activities 🤩",
                    response: activities,
                    success: true,
            })
            } else {
                res.status("404").json({
                    message: "Couldn't find any activity 🧐",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "An error ocurred trying to get the activities 😖",
                success: false,
            })
        }
    },
    editActivity: async (req, res) => {
        const { id } = req.params
        try {
            let activity = await Activity.findOne({_id:id})
            if (activity) {
            activity = await Activity.findOneAndUpdate({ _id: id }, req.body, { new: true })
                res.status(200).json({
                    message: "Your activity was edited successfully! 🤩",
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find the activity you wanted to edit... 🥴",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to edit the activity 😖",
                success: false,
            })
        }
    },
    deleteActivity: async (req, res) => {
        const { id } = req.params
        try {
            let activity = await Activity.findOne({_id:id})
            if (activity) {
            await Activity.findOneAndDelete({ _id: id })
            res.status(200).json({
                message: "Your activity has been deleted! 😌",
                success: true,
            })
        } else {
            res.status(404).json({
                message: "Could't find the activity you wanted to delete... 🥴",
                success: false
            })
        }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to delete the activity 😖",
                success: false,
            })
        }
    }

}

module.exports = activityController