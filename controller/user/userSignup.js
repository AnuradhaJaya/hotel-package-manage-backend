const { model } = require("mongoose");
const userModel = require("../../model/usermodel")
const bcrypt = require('bcryptjs');


async function userSignupController(req,res){
    try {
        const {email,password,name,profilepic} =req.body

        const user = await userModel.findOne({email})

        if(user){
            throw new Error("Already user exits.")
        }

        console.log("user",user)

        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!name){
            throw new Error("Please provide name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role : "ADMIN",
            password : hashPassword
        }

        const userData =new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "user created successfully!"

        })
        
    }catch (err) {
        // console.error(err);
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
    
}

module.exports = userSignupController;