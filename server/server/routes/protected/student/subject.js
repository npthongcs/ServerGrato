const express = require('express');
const router = express.Router();
const connection = require('../../../connection');

router.get('/inforclass', (req,res) => {
    if(!req.privilege.inforClass) return res.sendStatus(401);

    console.log("inforclass");

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;

    connection.query('call inforClass(?,?,?)',[sub_id,semester_id,class_id],(err,results,fields) => {
        if(err) return res.status(500).send(err);
        res.send(results[0]);
    })

});

router.post('/joinsubject', (req,res) => {
    if(!req.privilege.joinsubject) return res.sendStatus(401);

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var class_id = req.body.class_id;
    var user_id = req.body.user_id;

    connection.query('call joinsubject(?,?,?,?)',[sub_id,semester_id,class_id,user_id],(err,results,fields) => {
        if(err) return res.status(500).send(err);
        res.send(results);
    })

});

router.get('/:semester_id', (req,res) => {
    if(!req.privilege.listsubject) return res.sendStatus(401);

    var semester_id = req.params.semester_id;
    var user_id = req.body.user_id;

    connection.query('call listsubject(?,?)',[semester_id,user_id],(err,results,fields) => {
        if(err) return res.status(500).send(err);
        res.send(results);
    })

});





module.exports = router;