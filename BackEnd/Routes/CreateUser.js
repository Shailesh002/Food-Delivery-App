const express = require("express");
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret="alooettejentialooete63746273883"

router.post("/createuser", [
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Length should be 5 and above').isLength({ min: 5 }),
    body('name', 'Length should be 5 and above').isLength({ min: 5 })
]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //created user 

        const salt= await bcrypt.genSalt(10);
        let secPassword=await bcrypt.hash(req.body.password,salt);

        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });

        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })


// -------------------------LOGIN ROUTE-------------------------------

router.post("/loginuser", [
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Length should be 5 and above').isLength({ min: 5 }),
]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let username = req.body.email;
        //find user 
        try {
            let userData = await User.findOne({email:username});
            console.log(userData);
            if (!userData) {
                return res.status(400).json({ errors: "Invalid Username" });
            }
            
            const pwdCompare=await bcrypt.compare(req.body.password,userData.password);

            if (!pwdCompare) {
                return res.status(400).json({ errors: "Invalid Password" });
            }
            
            const data={
                user:{
                    id:userData.id
                }
            }
            const authToken=jwt.sign(data,jwtSecret);
            res.json({ success: true, authToken:authToken});

        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })


module.exports = router; 