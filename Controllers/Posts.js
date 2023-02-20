const PostSchema = require('../Schema/Post')

async function AddPost(body) {
    const Post = new PostSchema({
        PostBody: body.postBody,
        PostOwner: body.postOwner,
    })
    await Post.save()
}

exports.AddPostHandler = async (req, res) => {
    console.log(req.body)

    if (req.body !== undefined) {
        AddPost(req.body)
        return res.send("Done")
    } else {
        return res.send("fail")
    }
}