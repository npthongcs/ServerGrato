const express = require('express');
const router = express.Router();
const connection = require('../../../connection');

router.get('/listsubject', (req, res)=>{
    if(!req.privilege.listsubject_GV) return res.sendStatus(401);
    console.log("listSubject (GV)");
    var semester_id = req.query.semester_id;
    var user_id = req.query.user_id;

    connection.query(
        'call listSubject_GV(?,?)',
        [user_id, semester_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});




module.exports = router;