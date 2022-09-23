const Comment = require('../models/Comment')

const commentController = {
    create: async(req,res) => {
        const {comment, itinerary} = req.body
        const user = req.user.id

        try {
            let commentt = await new Comment({comment, itinerary}, user).save()
            res.status(201).json({
                message: "Comment created",
                response: commentt._id,
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
    getComment: async (req, res) => {
        const { id } = req.params
        try {
            let comment = await Comment.findOne({ _id: id })
            if (comment) {
                res.status(200).json({
                    message: "This is the comment you were looking for! 😌",
                    response: comment,
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find the comment you wanted... 🧐",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to get the comment 😖",
                success: false,
            })
        }
    },

    getAllComments: async(req, res) => {
        let query = {}

        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }

        if(req.query.user){
            query.user = req.query.user
        }

        try {
            let comments = await Comment.find(query)
            .populate("itinerary",{name:1, city:1})
            .populate("user", {name:1, lastName:1, photo:1})
            // if (comments) {
                res.status(200).json({
                    message: "These are all the comments! 🤩",
                    response: comments,
                    success: true,
            })
            // } else {
            //     res.status(404).json({
            //         message: "No comments could be found... 🧐",
            //         success: false,
            //     })
            // }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to get the comments 😖",
                success: false,
            })
        }
    },

    editComment: async (req, res) => {
        const { id } = req.params
        try {
            let comment = await Comment.findOne({_id:id})
            if (comment) {
            comment = await Comment.findOneAndUpdate({ _id: id }, req.body, { new: true })
                res.status(200).json({
                    message: "Your comment was edited successfully! 🤩",
                    response: comment,
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find the comment you wanted to edit... 🥴",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to edit the comment 😖",
                success: false,
            })
        }
    },

    deleteComment: async (req, res) => {
        const { id } = req.params
        try {
            let comment = await Comment.findOne({_id:id})
            if (comment) {
            await Comment.findOneAndDelete({ _id: id })
            res.status(200).json({
                message: "Your comment has been deleted! 😌",
                success: true,
            })
        } else {
            res.status(404).json({
                message: "Could't find the comment you wanted to delete... 🥴",
                success: false
            })
        }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "An error ocurred trying to delete the comment 😖",
                success: false,
            })
        }
    }

}

module.exports = commentController