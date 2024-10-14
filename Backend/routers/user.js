const express = require('express');
const router = express.Router();
const Model = require('../models/user');
const { model } = require('mongoose');

router.post('/add', (req,res) => {
    console.log(req.body)
    // storing data  to mogoDB
    // to add the data in database
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    });
})

module.exports = router;