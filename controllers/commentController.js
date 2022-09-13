const Comment = require('../models/Comment')

const commentController = {
    create: async(req,res) => {
        try {
            let comment = await new Comment(req.body).save()
            res.status(201).json({
                message: "Comment created",
                response: comment._id,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't comment created",
                success: false
            })
        }
    },

    all: async(req, res) => {
        let query = {}

        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }

        if(req.query.user){
            query.user = req.query.user
        }

        try {
            let comments = await Comment.find(query)
            .populate("itinerary",{name:1})
            if (comments) {
                res.status("200").json({
                    message: "These are the comments",
                    response: comments,
                    success: true,
            })
            } else {
                res.status("404").json({
                    message: "No comments could be found",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "Your comment couldn't be added.",
                success: false,
            })
        }
    }
}

module.exports = commentController