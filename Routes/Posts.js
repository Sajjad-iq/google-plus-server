const express = require("express")
const router = express.Router()
const PostsController = require("../Controllers/Posts")

router.post("/", PostsController.AddPostHandler)
router.get("/", PostsController.FetchPostsHandler)
router.put("/AddLike", PostsController.AddLikeHandler)
router.put("/AddComment", PostsController.AddCommentHandler)
router.post("/Post", PostsController.FetchSpecificPostHandler)
router.post("/Delete", PostsController.DeletePostHandler)

module.exports = router  