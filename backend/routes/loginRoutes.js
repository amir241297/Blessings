const express = require("express")
const loginRoutes = express()
const bcrypt = require('bcrypt');
const mongoose = require("mongoose")
var jwt = require('jsonwebtoken');

const { AccountModel } = require("../model/createaccount_model")


loginRoutes.get("/", async (req, res) => {
    const login_password = req.body.password
    const login_name = req.body.name
    const result = await AccountModel.findOne({ "name": login_name })
    const encrypted_password = result.password
    // res.send("enc pss", encrypted_password)
    bcrypt.compare(login_password, encrypted_password, (err, result) => {

        try {
            // let token = jwt.sign({ isAuth: 'Yes' }, 'secreat_key');
            // res.send("token", token)
            // console.log("Token,token")
            console.log("result", result)
            res.send("result", result)


        } catch (err) {
            console.log("Error while Decrypt: ", err)
            res.send("decryped Error", err)
        }
    });

})
module.exports = { loginRoutes }