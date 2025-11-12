var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserModel = require("../models/userModel")

const secretKey = "Confidential key"

const registerController = async (req, res) => {
    const data = req.body
    const user = await UserModel.findOne({email: req.body.email})
    console.log(user)
    if (user){
        res.status(400).send({message: "User with this Email ID already exists."})
    }else{
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            if (hash){
                data.password = hash
                const newUser = new UserModel(data)
                newUser.save()
                console.log("Register working")
                res.send({message: "Registered successfully"})
            }
        });
    }
    
}

const loginController = async (req, res) => {
    const data = req.body
    const user = await UserModel.findOne({email: data.email})
    console.log(data)
    console.log(user)
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (err){
            res.status(401).send("Invalid credentials")
        }
        else if (result){
            var token = jwt.sign({ email: data.email }, secretKey);
            res.send({message: "Loggedin successfully", token: token})
        }else{
            res.status(401).send("Invalid credentials")
        }
    });
}

module.exports = {registerController, loginController}

