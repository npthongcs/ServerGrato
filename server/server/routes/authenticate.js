const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const connection = require('../connection');


router.post('/signup', (req, res)=>{
    const password = req.body.password;
    const id = req.body.id;
    const name = req.body.name;
    const job_type = req.body.job_type;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        if(err) return res.sendStatus(500);
        var query = 'call create_user(?,?,?,?);';
        connection.query(
            query,
            [
                id, 
                hash, 
                name, 
                job_type
            ], 
            (err, results, fields)=>{
                console.log(err);
                if(err) return res.sendStatus(500);
                const token = jwt.sign({id:id, job_type:job_type}, 'JWR-TOKEN-SECRET-SHOULD-BE-STORED-IN-PROCESS-ENV');
                res.status(200).json(token);
            });
    });
});


router.post('/signin', (req, res)=>{
    const password = req.body.password;
    const id = req.body.id;
    const job_type = req.body.job_type;
    console.log("aaa");
    var query = 'call get_user(?,?);';
    connection.query(
        query,
        [id, job_type], 
        (err, results, fields)=>{
            if(err) return res.sendStatus(500);
            if(results[0].length == 0) return res.sendStatus(403);
            bcrypt.compare(password, results[0][0].hashed_pass, function(err, result) {
                if(err) return res.sendStatus(500);
                if(!result) return res.sendStatus(403);
                const token = jwt.sign({id:id, job_type:job_type, aud:"iPhone-App"}, 'JWR-TOKEN-SECRET-SHOULD-BE-STORED-IN-PROCESS-ENV');
                res.status(200).json({token:token, user:results[0][0]});
            });
        });
});

module.exports = router;
