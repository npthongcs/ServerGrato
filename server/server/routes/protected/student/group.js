const express = require('express');
const router = express.Router();
const connection = require('../../../connection');

router.get('/listgroup',(req, res) => {
    if(!req.privilege.listgroup) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;

    console.log("listgroup");

    connection.query(`CALL listgroup(?,?,?)`,
        [sub_id,semester_id,class_id],
        (err, results, fields) => {
        if(err) return res.status(500).send(err);
        res.send(results[0]);
    })
});

router.post('/joingroup',(req, res) => {
    if(!req.privilege.joingroup) return res.sendStatus(401);
    
    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var class_id = req.body.class_id;
    var group_name = req.body.group_name;
    var user_id = req.body.user_id;

    connection.query(`CALL joingroup(?,?,?,?,?)`,
        [sub_id,semester_id,class_id,group_name,user_id],
        (err, results, fields) => {
        if(err) return res.status(500).send(err);
        res.send(results);
    })
});

router.delete('/outgroup',(req, res) => {
    if(!req.privilege.outgroup) return res.sendStatus(401);
    
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    var group_name = req.query.group_name;
    var user_id = req.query.user_id;

    connection.query(`CALL outgroup(?,?,?,?,?)`,
        [sub_id,semester_id,class_id,group_name,user_id],
        (err, results, fields) => {
        if(err) return res.status(500).send(err);
        res.send(results);
    })
});

router.post('/creategroup',(req, res) => {
    if(!req.privilege.creategroup) return res.sendStatus(401);
    
    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var class_id = req.body.class_id;
    var group_name = req.body.group_name;
    var max_student = req.body.max_student;

    console.log("create group");

    connection.query(`CALL creategroup(?,?,?,?,?,?)`,
        [sub_id,semester_id,class_id,group_name,0,max_student],
        (err, results, fields) => {
        if(err) return res.status(500).send(err);
        res.send(results);
    })
});

router.get('/viewmem',(req, res) => {
    if(!req.privilege.viewmem) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    var group_name = req.query.group_name;

    console.log(group_name);

    connection.query(`CALL listmemberingroup(?,?,?,?)`,
        [sub_id,semester_id,class_id,group_name],
        (err, results, fields) => {
        if(err) return res.status(500).send(err);
        res.send(results[0]);
    })
});

router.get('/findgroup',(req, res) => {
    if(!req.privilege.viewmem) return res.sendStatus(401);
    
    var user_id = req.query.user_id;
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;

    connection.query(`CALL findGroup(?,?,?,?)`,
        [user_id,sub_id,semester_id,class_id],
        (err, results, fields) => {
        if(err) return res.status(500).send(err);
        if (results[0][0] == null) res.send("-1");
        else res.send(results[0][0]['gname']);
    })
});

router.get('/getnomax',(req, res) => {
    if(!req.privilege.viewmem) return res.sendStatus(401);
    
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    var group_name = req.query.group_name;

    connection.query(`CALL getNoMax(?,?,?,?)`,
        [sub_id,semester_id,class_id,group_name],
        (err, results, fields) => {
        if(err) return res.status(500).send(err);
        if (results[0][0] == null) res.send("-1");
        else res.send([results[0][0]['no_student'], results[0][0]['max_student']]);
    })
});

module.exports = router;