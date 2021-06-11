const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum: ["male", "female"]
    },

    emailId: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

let users = mongoose.model("userDetails", userSchema);

class ModelUser {
    createUser = (dataObj, callBackFunc) => {
        users.create(dataObj, (error, success) => {
            if (error) {
                callBackFunc(error);
            } else {
                callBackFunc(null, success)
            }
        })
    }

    getUser = (callBackFunc) => {
        users.find((error, success) => {
            if (error) {
                callBackFunc(error);
            } else {
                callBackFunc(null, success)
            }
        })
    }

    updateUser = (id, myDataObj, callBackFunc) => {
        users.findByIdAndUpdate(id, myDataObj, (error, success) => {
            if (error) {
                callBackFunc(error);
            } else {
                callBackFunc(null, success)
            }
        })
    }

    deletingUser = (id, callBackFunc) => {
        users.findByIdAndDelete(id, (error, success) => {
            if (error) {
                callBackFunc(error);
            } else {
                callBackFunc(null, success)
            }
        })
    }
}

module.exports = new ModelUser();