const express = require('express');
const User = require('../models/user')
const router = express.Router();
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        await newUser.save()
    }catch (err){
        console.log(err);
    }

    res.render('login')
});

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        await newUser.save()
    }catch (err){
        console.log(err);
    }

    res.render('login')
});

module.exports = router