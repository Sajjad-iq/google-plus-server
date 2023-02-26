const Account = require('../Schema/Account')
const Post = require('../Schema/Post')
const bcrypt = require("bcrypt")


exports.EditUserAccount = async (req, res) => {

    const body = req.body

    if (body.User._id === req.params.id || body.User.IsAdmin) {
        try {
            const user = await Account.findByIdAndUpdate(req.params.id, {
                $set: req.body.User
            });
            const UserPosts = await Post.updateMany({ PostOwnerId: body.User._id }, {
                $set: {
                    PostOwnerName: `${body.User.UserName} ${body.User.FamilyName}`,
                    PostOwnerImage: body.User.ProfilePicture
                }
            })

            res.status(200).json("Account has been updated");
        } catch (e) {
            console.log(e)
        }
    } else {
        return res.status(408).json("You can update only your account!");
    }

}
