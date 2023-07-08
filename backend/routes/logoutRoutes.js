const express = require('express')

const logoutRoutes = express()

logoutRoutes.get('/', (req, res) => {
    res.send("Logout Routes")
})

module.exports = { logoutRoutes }