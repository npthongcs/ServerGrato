const express = require('express');
const router = express.Router();
const connection = require('../../../connection');



//Long do
router.get('/viewListExam', (req, res)=>{
    if(!req.privilege.viewListExam) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;

    connection.query(
        'call viewListExam(?,?)',
        [sub_id, semester_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});

//Long do
router.post('/createNewExam', (req, res)=>{
    // console.log("in add quiz: ", req.user)
    if(!req.privilege.createNewExam) return res.sendStatus(401);

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var exam_name = req.body.exam_name;
    var no_question = req.body.no_question;

    connection.query(
        'call createNewExam(?,?,?,?)',
        [sub_id, semester_id, exam_name, no_question],
        (err, results, fields)=>{
            if(err) return res.sendStatus(500);
            res.sendStatus(200);
        }
    )
});

// Long do
router.delete('/deleteExam', (req, res)=>{
    if(!req.privilege.deleteExam) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var exam_name = req.query.exam_name;

    connection.query(
        'call deleteExam(?,?,?)',
        [sub_id, semester_id, exam_name],
        (err, results, fields)=>{
            if(err) return res.status(500);
            res.sendStatus(200);
        }
    )
});

//Long do
router.get('/viewListExamCode', (req, res)=>{
    if(!req.privilege.viewListExam) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var exam_name = req.query.exam_name;

    connection.query(
        'call viewListExamCode(?,?,?)',
        [sub_id, semester_id, exam_name],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});

//Long do
router.post('/createExamCode', (req, res)=>{
    // console.log("in add exam: ", req.body)
    if(!req.privilege.createExamCode) return res.sendStatus(401);

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var exam_name = req.body.exam_name;
    var exam_code_id = req.body.exam_code_id;
    var key_answer = req.body.key_answer;

    connection.query(
        'call createExamCode(?,?,?,?,?)',
        [sub_id, semester_id, exam_name, exam_code_id, key_answer],
        (err, results, fields)=>{
            if(err) return res.sendStatus(500);
            res.sendStatus(200);
        }
    )
});

// Long do
router.delete('/deleteExamCode', (req, res)=>{
    if(!req.privilege.deleteExamCode) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var exam_name = req.query.exam_name;
    var exam_code_id = req.query.exam_code_id;

    connection.query(
        'call deleteExamCode(?,?,?,?)',
        [sub_id, semester_id, exam_name, exam_code_id],
        (err, results, fields)=>{
            if(err) return res.status(500);
            res.sendStatus(200);
        }
    )
});

//Long do
router.get('/viewListStudentDoExamCode', (req, res)=>{
    if(!req.privilege.viewListStudentDoExamCode) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var exam_name = req.query.exam_name;

    connection.query(
        'call viewListStudentDoExamCode(?,?,?)',
        [sub_id, semester_id, exam_name],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});

module.exports = router;

// Long do
router.delete('/deleteStudentDoExamCode', (req, res)=>{
    if(!req.privilege.deleteStudentDoExamCode) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var exam_name = req.query.exam_name;
    var exam_code_id = req.query.exam_code_id;
    var student_id = req.query.student_id;

    connection.query(
        'call deleteStudentDoExamCode(?,?,?,?,?)',
        [sub_id, semester_id, exam_name, exam_code_id, student_id],
        (err, results, fields)=>{
            if(err) return res.status(500);
            res.sendStatus(200);
        }
    )
});

//Long do
router.get('/getAllQuestionAndAnswers', (req, res)=>{
    if(!req.privilege.getAllQuestionAndAnswers) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var quiz_name = req.query.quiz_name;

    
    connection.query(
        'call viewListStudentDoExamCode(?,?,?)',
        [sub_id, semester_id, exam_name],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});