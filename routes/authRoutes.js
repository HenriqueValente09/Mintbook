const express = require('express');
const User = require('../models/user')
const Post = require('../models/post')
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

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        !user && res.send('User not found!')

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json('Wrong password!')

        res.status(200).render('user/main', {
            user: user,
            posts: Post.find({}).sort({date: 'descending'}).exec((err, docs) => {})
        })
    }catch (err){
        console.log(err);
    }
});

module.exports = router