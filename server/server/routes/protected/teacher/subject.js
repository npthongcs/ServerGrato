const express = require('express');
const router = express.Router();
const connection = require('../../../connection');

router.get('/:semester_id', (req, res)=>{
    if(!req.privilege.listsubject_GV) return res.sendStatus(401);

    var semester_id = req.params.semester_id;
    var user_id = req.body.user_id;

    connection.query(
        'call listSubject_GV(?,?)',
        [semester_id,user_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});




module.exports = router;