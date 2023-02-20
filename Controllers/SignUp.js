const Account = require('../Schema/Account')
const bcrypt = require("bcrypt")

async function AddAccount(body) {
    try {
        const account = new Account({
            UserName: body.UserName,
            FamilyName: body.FamilyName,
            Email: body.Email,
            Password: body.Password
        })
        await account.save()
    } catch (e) {
        console.log(e)
    }
}



exports.AddUserAccount = async (req, res) => {
    try {
        const allAccounts = await Account.findOne({ Email: req.body.Email });

        if (!allAccounts) {
            AddAccount(req.body)
            res.status(200).json("SignUp done")
        } else res.status(404).json("account is exist")

    } catch (e) {
        console.log(e)
    }
}
