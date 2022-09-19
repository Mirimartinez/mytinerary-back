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
    }
}

module.exports = activityController