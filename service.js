const model = require("./model");

class Service {
    addUser = function (myObj, callBackFunc){
        model.createUser(myObj, (error, success) => {

            if(error){
                callBackFunc({message:"Failed to Add user data", error:error})
            }
            else{
                callBackFunc(null, {message:"Successfully added user data", success:success})
            }
        })
    }

    getDetails = function (callBackFunc){
        model.getUser((error, success) => {
            
            if(error){
                callBackFunc({message:"Failed to retireve data", error:error})
            }
            else{
                callBackFunc(null, {message:"Successfully retireved data", success:success})
            }
        })
    }

    updateDetails = function (id, myDataobj, callBackFunc){
        model.updateUser(id, myDataobj, (error, success) => {

            if(error){
                callBackFunc({message:"Failed to update details", error:error})
            }
            else{
                callBackFunc(null, {message:"Successfully updated details", success:success})
            }
        })
    }

    deleteAUser = function (id, callBackFunc){
        model.deletingUser(id, (error, success) => {

            if(error){
                callBackFunc({message:"Failed to delete user", error:error})
            }
            else{
                callBackFunc(null, {message:"Successfully deleted user", success:success})
            }
        })
    }
}

module.exports = new Service();