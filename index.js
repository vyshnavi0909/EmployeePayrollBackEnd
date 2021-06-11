const express = require("express");
const mongoose = require("mongoose");

const route = require("./routing");
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use("/", route);


app.listen(8001, () => {
    mongoose.connect("mongodb://localhost:27017/users", {
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        // useFindAndModify: true
    })
    .then(() => {
        console.log("database connect successfully");

    }).catch((err) => {
        console.log("fail to connect",err);
    })
})