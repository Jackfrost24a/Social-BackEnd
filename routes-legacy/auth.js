const router = require("express").Router();
const User = require("../models/User.js")
const bcrypt = require("bcrypt")

//Register
router.post("/register", async (req, res) => {

    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
})

//Login
router.post("/login",async(req,res)=>{
    try{
        if(!User){
            return res.status(401).json("Wrong User Name");
          }

        const validPassword = await bcrypt.compare(req.body.password, User.password)
        !validPassword && res.status(400).json("wrong password")


        res.status(200).json(User)
    }catch (err){
        console.log(err);
    }
})

module.exports = router