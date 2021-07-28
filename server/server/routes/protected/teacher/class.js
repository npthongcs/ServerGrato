const express = require('express');
const router = express.Router();
const connection = require('../../../connection');

router.get('/listclass', (req, res)=>{
    if(!req.privilege.listclass) return res.sendStatus(401);
    
    var semester_id = req.query.semester_id;
    var sub_id = req.query.sub_id;
    var user_id = req.query.user_id;
    console.log("user_id: " + user_id)

    console.log(req.query)

    console.log('call list class');
    console.log(semester_id);
    console.log(sub_id);
    console.log(user_id);

    connection.query(
        'call listClass_GV(?,?,?)',
        [sub_id, semester_id, user_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            console.log(results[0]);
            res.send(results[0])
        }
    )
});

router.get('/countstudent', (req, res)=>{
    
    var semester_id = req.query.semester_id;
    var sub_id = req.query.sub_id;
    var class_id = req.query.class_id;

    connection.query(
        'call countstudent(?,?,?)',
        [class_id, sub_id, semester_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0][0]);
        }
    )
});


router.post('/createClass_GV', (req, res)=>{
    if(!req.privilege.createclass) return res.sendStatus(401);
    
    var semester_id = req.body.semester_id;
    var sub_id = req.body.sub_id;
    var class_id = req.body.class_id;
    var room = req.body.room;
    var start_time = req.body.start_time;
    var end_time = req.body.end_time;
    var user_id = req.body.user_id;

    connection.query(
        'call createClass_GV(?,?,?)',
        [sub_id, semester_id, class_id, room, start_time, end_time, user_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});

router.get('/liststudent',(req, res) => {
    if(!req.privilege.liststudent) return res.sendStatus(401);
    
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;

    connection.query(`CALL liststudentinclass(?,?,?)`,
        [sub_id,semester_id,class_id],
        (err, results, fields) => {
        if(err) return res.status(500).send(err);
        res.send(results[0]);
    })
});


router.post('/timeAttendance', (req, res)=>{
    if(!req.privilege.createclass) return res.sendStatus(401);
    
    var semester_id = req.body.semester_id;
    var sub_id = req.body.sub_id;
    var class_id = req.body.class_id;
    var start_time = req.body.start_time;
    var end_time = req.body.end_time;
    var day = req.body.day;
    var lati = req.body.lati;
    var longti = req.body.longti;

    connection.query(
        'call setTimeAttendance(?,?,?,?,?,?,?,?)',
        [semester_id, sub_id, class_id, start_time, end_time,day, lati, longti],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});


router.get('/countAttendance', (req, res)=>{
    console.log("count anttendance");
    if(!req.privilege.showAttend) return res.sendStatus(401);
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    var user_id = req.query.user_id;

    console.log(sub_id);
    console.log(semester_id);
    console.log(class_id);
    console.log(user_id);

    connection.query(
        'call countAttendance(?,?,?,?)',
        [sub_id, semester_id, class_id,user_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            console.log(results[0])
            res.send(results[0][0]);
        }
    )
});

router.get('/countabsent', (req, res)=>{
    console.log("countabsent");
    if(!req.privilege.countabsent) return res.sendStatus(401);
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    console.log(class_id);
    console.log(req.user)
    connection.query(
        'call countabsent(?,?,?)',
        [sub_id, semester_id, class_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            console.log(results)
            res.send(results[0][0]);
        }
    )
});

module.exports = router;