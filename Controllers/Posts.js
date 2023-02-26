const PostSchema = require('../Schema/Post')

async function AddPost(body) {
    const Post = new PostSchema({
        PostBody: body.PostBody,
        PostOwnerId: body.PostOwnerId,
        PostOwnerName: body.PostOwnerName,
        PostImage: body.PostImage,
        PostOwnerImage: body.PostOwnerImage
    })
    await Post.save()
}

exports.AddPostHandler = async (req, res) => {

    try {
        if (req.body !== undefined) {
            AddPost(req.body)
            return res.status(200).json("Done")
        } else {
            return res.status(404).json("fail")
        }
    } catch (e) {
        console.log(e)
    }

}

exports.FetchPostsHandler = async (req, res) => {

    try {
        const Posts = await PostSchema.find()
        if (Posts) {
            res.status(200).json(Posts)
        } else {
            res.status(404).json("Posts not found")
        }
    } catch (e) {
        console.log(e)
    }

}

exports.AddLikeHandler = async (req, res) => {

    const Post = await PostSchema.findById({ _id: req.body.PostId })

    try {
        if (Post.Likes.includes(req.body.UserId)) {
            const RemoveLike = await PostSchema.findByIdAndUpdate(req.body.PostId, {
                $pull: { Likes: req.body.UserId }
            })
            res.status(200).json({ IsLiked: false })
        } else {
            const AddLike = await PostSchema.findByIdAndUpdate(req.body.PostId, {
                $addToSet: { Likes: req.body.UserId }
            })
            res.status(200).json({ IsLiked: true })
        }
    } catch (e) {
        console.log(e)
    }
}


exports.AddCommentHandler = async (req, res) => {

    try {
        const AddComment = await PostSchema.findByIdAndUpdate(req.body.PostId, {
            $push: { Comments: req.body }
        })
        if (AddComment) res.status(200).json("Comment added")
        else res.status(404).json("Post not found")
    } catch (e) {
        console.log(e)
    }
}

exports.FetchSpecificPostHandler = async (req, res) => {

    const Post = await PostSchema.findById({ _id: req.body.PostId })
    try {
        if (Post) {
            res.status(200).json(Post)
        } else {
            res.status(404).json("post not found")
        }
    } catch (e) {
        console.log(e)
    }
}

exports.DeletePostHandler = async (req, res) => {

    const Post = await PostSchema.findById({ _id: req.body.PostId })

    if (Post) {
        try {
            if (Post.PostOwnerId == req.body.UserId) {
                const deletePost = await PostSchema.findByIdAndDelete(req.body.PostId, (err, docs) => {
                    if (err) {
                        res.status(404).json("post not found")
                    } else {
                        res.status(200).json("deleted")
                    }
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

}

