const express = require("express")
const createAccountRoutes = express()
const bcrypt = require('bcrypt');
const { AccountModel } = require("../model/createaccount_model")

createAccountRoutes.post('/',  (req, res) => {
    const { name, email, password, phone } = req.body

    // console.log(name,email,password,phone)
    bcrypt.hash(password, 3, async(err, hash) => {
        // Store hash in your password DB.
        try {
            // console.log("hashed passsword",hash)
            const password = hash 
            try {
                let account = new AccountModel({name,email,password,phone})
                await account.save()
                console.log("Data is save to DB",account)

            } catch (err) { 
                console.log("Something went wrong while data save!")
                res.end(err)
             }

        } catch (err) {
            console.log("Error while encrypting!: ", err)
        }
    });

    res.send("Account Created Successfull!")
})

module.exports = { createAccountRoutes }