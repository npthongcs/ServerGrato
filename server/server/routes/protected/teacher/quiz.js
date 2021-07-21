const express = require('express');
const router = express.Router();
const connection = require('../../../connection');

//Long do
router.get('/listQuiz', (req, res)=>{
    if(!req.privilege.listQuiz) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;

    console.log("in quiz: ", req.headers)
    console.log("in quiz--: ", req.query)
    connection.query(
        'call get_all_quiz_of_a_semester_proc(?,?)',
        [sub_id, semester_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});


//Long do
router.post('/add_quiz', (req, res)=>{
    // console.log("in add quiz: ", req.user)
    if(!req.privilege.addQuiz) return res.sendStatus(401);

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var quiz_name = req.body.quiz_name;
    var max_time = req.body.max_time;
    var no_question = req.body.no_question;
    var deadline = req.body.deadline;

    connection.query(
        'call add_quiz_proc(?,?,?,?,?,?)',
        [sub_id, semester_id, quiz_name, max_time, no_question, deadline],
        (err, results, fields)=>{
            if(err) return res.sendStatus(500);
            res.sendStatus(200);
        }
    )
});

// Long do
router.get('/get_all_quiz_of_class', (req, res)=>{
    if(!req.privilege.getAllQuizOfClass) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;

    connection.query(
        'call get_all_quiz_of_class_proc(?,?,?)',
        [sub_id, semester_id, class_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});


// Long do
router.delete('/delete_quiz', (req, res)=>{
    if(!req.privilege.deleteQuiz) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var quiz_name = req.query.quiz_name;

    connection.query(
        'call delete_quiz_proc(?,?,?)',
        [sub_id, semester_id, quiz_name],
        (err, results, fields)=>{
            if(err) return res.status(500);
            res.sendStatus(200);
        }
    )
});

// Long do
router.get('/get_all_questions_and_answers_of_quiz', (req, res)=>{
    if(!req.privilege.getAllQuestionAndAnswers) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var quiz_name = req.query.quiz_name;
    console.log(sub_id + semester_id + quiz_name);

    connection.query(
        'call get_all_questions_and_answers_of_quiz(?,?,?)',
        [sub_id, semester_id, quiz_name],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            console.log(results[0]);
            res.send(results[0]);
        }
    )
});


//Thong do
router.post('/addquiztoclass', (req, res)=>{
    if(!req.privilege.addquiztoclass) return res.sendStatus(401);
    
    var semester_id = req.params.semester_id;
    var quiz_name = req.body.quiz_name;
    var sub_id = req.body.sub_id;
    var class_id = req.body.class_id;

    connection.query(
        'call addQuizToClass_GV(?,?,?,?)',
        [sub_id, semester_id, quiz_name, class_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});


module.exports = router;