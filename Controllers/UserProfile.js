const Account = require('../Schema/Account')
const bcrypt = require("bcrypt")


exports.EditUserAccount = async (req, res) => {

    console.log(req.params)

    if (req.body.User._id === req.params.id || req.body.User.IsAdmin) {
        try {
            const user = await Account.findByIdAndUpdate(req.params.id, {
                $set: req.body.User
            });
            res.status(200).json("Account has been updated");
        } catch (e) {
            console.log(e)
        }
    } else {
        return res.status(408).json("You can update only your account!");
    }

}
