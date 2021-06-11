const express = require("express");
const route = express.Router();
const user = require("./user");

// var login = require("./login");

// route.get("/", function(req, res){
//     res.send("Welcome to HOME page")
// })

// route.get("/Login", login.message)


route.post("/registration", user.createUser );
route.get("/registration", user.getUserDetails);
route.put("/registration/:id", user.updateUserDetails);
route.delete("/registration/:id", user.deleteUser);

module.exports = route;