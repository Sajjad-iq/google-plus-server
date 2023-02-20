const Account = require('../Schema/Account')
const bcrypt = require("bcrypt")

exports.SignInHandler = async (req, res) => {

    try {
        const user = await Account.findOne({ Email: req.body.Email });

        if (user) {
            if (user.Password == req.body.Password) {
                res.status(200).json({
                    User: user
                })
            } else res.status(404).json("Wrong Account")
        } else res.status(404).json("Account not found")


    } catch (e) {
        console.log(e)
    }
};


exports.SignInReFreshHandler = async (req, res) => {

    try {
        console.log(req.body)
        const user = await Account.findOne({ Email: req.body.Email });
        if (user) {
            if (user.Email === req.body.Email && user.Password == req.body.Password) {
                res.status(200).json({
                    User: user
                })
                console.log(user.Email === req.body.Email && user.Password == req.body.Password)
            } else { res.status(404).json("wrong email or password") }
        } else { res.status(404).json("account not found") }

    } catch (e) {
        console.log(e)
    }
};