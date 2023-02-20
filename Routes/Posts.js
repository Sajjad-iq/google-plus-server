const express = require("express")
const router = express.Router()
const PostsController = require("../Controllers/Posts")


router.post("/", PostsController.AddPostHandler)

module.exports = router