const service = require("./service");

const response = {};

class User {
    createUser = function(req, res){
        service.addUser(req.body, (err, succ) => {

            if(err){
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            }
            else {
                response.success = true;
                response.message = succ.message;
                response.data = succ.success;
                return res.status(200).send(response);
            }
        })
    }

    getUserDetails =  function(req, res){
        service.getDetails((err, succ) => {
            if(err){
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            }
            else {
                response.success = true;
                response.message = succ.message;
                response.data = succ.success;
                return res.status(200).send(response);
            }
        })
    }

    updateUserDetails = function(req, res){
        service.updateDetails(req.params.id, req.body, (err, succ) => {
            if(err){
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            }
            else {
                response.success = true;
                response.message = succ.message;
                response.data = succ.success;
                return res.status(200).send(response);
            }
        })
    }

    deleteUser = function(req, res){
        service.deleteAUser(req.params.id,(err, succ) => {
            if(err){
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            }
            else {
                response.success = true;
                response.message = succ.message;
                response.data = succ.success;
                return res.status(200).send(response);
            }
        })
    }
}

module.exports = new User();