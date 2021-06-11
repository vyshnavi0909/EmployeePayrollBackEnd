class Login {
    message = (req, res)=> {
        res.send("Welcome to LOGIN page");
    }
}
module.exports = new Login();