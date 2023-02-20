const mongoose = require("mongoose");

const CommentRePlay = new mongoose.Schema({
    CommentRePlayerBody: String,
    CommentRePlayOwner: String,
    CommentsRePlayLikes: Number,
})

const Comments = new mongoose.Schema({
    CommentBody: String,
    CommentOwner: String,
    CommentsLikes: Number,
    CommentsRePlays: CommentRePlay
})

const AddPostSchema = new mongoose.Schema({
    PostBody: String,
    PostOwner: String,
    Likes: {
        type: Number,
        default: 0
    },
    CommentsCount: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("addPost", AddPostSchema)
