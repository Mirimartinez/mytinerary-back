const Comment = require('../models/Comment')
const joi = require('joi')
const validator = joi.object({
    comment: joi.string().min(1).max(250).required().messages({
            'any.required': 'COMMENT_REQUIRED',
            'string.empty': 'COMMENT_REQUIRED',
            'string.min': 'COMMENT_TOO_SHORT',
            'string.max': 'COMMENT_TOO_LARGE',
        }),
    user: joi.string().hex().required().messages({
            'any.required': 'USER_REQUIRED',
            'string.hex': 'USER_INVALID'
        }),
    itinerary: joi.string().hex().required().messages({
            'any.required': 'ITINERARY_REQUIRED',
            'string.hex': 'ITINERARY_INVALID'
        })
})

const commentController = {
    create: async(req,res) => {
        const {comment, itinerary} = req.body
        const user = req.user.id
        try {
            let result = await validator.validateAsync({comment: textComment,itinerary,user: user.toString()})
            let commentt = await new Comment({comment, itinerary}, user).save()
            res.status(201).json({
                message: "KUDOS! Your comment was posted successfully! 🥳",
                response: comment._id,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't post your comment... 😖",
                success: false
            })
        }
    },


    getComment: async (req, res) => {
        const { id } = req.params
        try {
            let comment = await Comment.findOne({ _id: id })
            if (comment) {
                res.status("200").json({
                    message: "This is the comment you were looking for! 😌",
                    response: comment,
                    success: true,
                })
            } else {
                res.status("404").json({
                    message: "Couldn't find the comment you wanted... 🧐",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
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
            .populate("user", {name:1, lastname:1, photo:1})
            .populate("itinerary",{name:1})
            if (comments) {
                res.status("200").json({
                    message: "These are all the comments! 🤩",
                    response: comments,
                    success: true,
            })
            } else {
                res.status("404").json({
                    message: "No comments could be found... 🧐",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "An error ocurred trying to get the comments 😖",
                success: false,
            })
        }
    },

    editComment: async (req, res) => {
        const { id } = req.params
        let comment
        try {
            comment = await Comment.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (comment) {
                res.status("200").json({
                    message: "Your comment was edited successfully! 🤩",
                    response: comment,
                    success: true,
                })
            } else {
                res.status("404").json({
                    message: "Couldn't find the comment you wanted to edit... 🥴",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "An error ocurred trying to edit the comment 😖",
                success: false,
            })
        }
    },

    deleteComment: async (req, res) => {
        const { id } = req.params
        try {
            await Comment.findOneAndRemove({ _id: id })
            res.status("200").json({
                message: "Your comment has been deleted! 😌",
                success: true,
            })
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "An error ocurred trying to delete the comment 😖",
                success: false,
            })
        }
    },

    getComment: async (req, res) => {
        const {id} = req.params
        try{
            let comment = await Comment.findOne({_id:id})
            if(comment){
                res.status(200).json({
                    message: "Comment found",
                    response: comment,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Could't found comment",
                    success: false
                })
            }
        } catch(error){
            console.log(error);
            res.status(400).json({
                message: "Error",
                success: false
            })
        }
    },

    updateComment: async (req, res) => {
        const {comment, itinerary} = req.body
        const {id, role} = req.user.id
        try{
            comment = await Comment.findOne({_id:id})
            if(comment){
                if(comment.user.toString() === userId.toString() || role === "admin"){
                    await comment.save()
                    res.status(200).json({
                        message: "Comment edited successfuly",
                        response: comment,
                        success: true
                    })
                }else {
                    res.status(401).json({
                        message: "Unauthorized",
                        success: false
                    })
                }
            } else {
                res.status(404).json({
                    message: "Could't find comment",
                    success: false
                })
            }
        } catch (error){
            console.log(error);
            res.status(400).json({
                message: "Error",
                success: false
            })
        }
    },

    deleteComment: async (req, res) => {
        const { id, role } = req.user
        let comment
        try{
            comment = await Comment.findOne({_id:id})
            if(comment.user.toString() === userId.toString() || role === "admin"){
                await Comment.findOneAndDelete({_id:id})
                res.status(200).json({
                    message: "Comment delete successfuly",
                    success: true
                })
            } else {
                res.status(401).json({
                    message: "Unauthorized",
                    success: true
                })
            }
        } catch(error){
            console.log(error);
            res.status(400).json({
                message: "Error",
                success: false
            })
        }
    }

}

module.exports = commentController