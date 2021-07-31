const express = require('express');
const router = express.Router();
const connection = require('../../../connection');

//Long do
router.get('/listQuiz', (req, res)=>{
    if(!req.privilege.listQuiz) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;

    // console.log("in quiz: ", req.headers)
    // console.log("in quiz--: ", req.query)
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

//Long do
router.post('/add_quiz_of_class_proc', (req, res)=>{
    // console.log("in add quiz: ", req.user)
    if(!req.privilege.addQuiz) return res.sendStatus(401);

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var quiz_name = req.body.quiz_name;
    var class_id = req.body.class_id;

    connection.query(
        'call add_quiz_of_class_proc(?,?,?,?)',
        [sub_id, semester_id, quiz_name, class_id],
        (err, results, fields)=>{
            if(err) return res.sendStatus(500);
            res.sendStatus(200);
        }
    )
});


// Long do
router.get('/teacher_get_all_class_of_quiz', (req, res)=>{
    if(!req.privilege.getAllQuizOfClass) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var quiz_name = req.query.quiz_name;
    var id_user = req.user.id;
    console.log(id_user);

    connection.query(
        'call teacher_get_all_class_of_quiz_proc(?,?,?,?)',
        [sub_id, semester_id, quiz_name, id_user],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});


// Long do
router.delete('/delete_quiz_from_class', (req, res)=>{
    if(!req.privilege.deleteQuiz) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var quiz_name = req.query.quiz_name;
    var class_id = req.query.class_id;


    connection.query(
        'call delete_quiz_from_class_proc(?,?,?,?)',
        [sub_id, semester_id, quiz_name, class_id],
        (err, results, fields)=>{
            if(err) return res.status(500);
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
router.post('/add_question_to_quiz_proc', (req, res)=>{
    if(!req.privilege.addQuiz) return res.sendStatus(401);
    console.log("add_question_to_quiz_proc")

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var quiz_name = req.body.quiz_name;
    var question_id = req.body.question_id;
    var content = req.body.content;

    connection.query(
        'call add_question_to_quiz_proc(?,?,?,?,?)',
        [sub_id, semester_id, quiz_name, question_id, content],
        (err, results, fields)=>{
            if(err) return res.sendStatus(500);
            res.sendStatus(200);
        }
    )
});

// Long do
router.post('/add_answer_to_question_proc', (req, res)=>{
    if(!req.privilege.addQuiz) return res.sendStatus(401);
    console.log("add_answer_to_question_proc")

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var quiz_name = req.body.quiz_name;
    var question_id = req.body.question_id;
    var answer_id = req.body.answer_id;
    var right_answer = req.body.right_answer;
    var content = req.body.content;

    connection.query(
        'call add_answer_to_question_proc(?,?,?,?,?,?,?)',
        [sub_id, semester_id, quiz_name, question_id, answer_id, right_answer, content],
        (err, results, fields)=>{
            if(err) return res.sendStatus(500);
            res.sendStatus(200);
        }
    )
});


// Long do
router.post('/modify_question_of_quiz', (req, res)=>{
    if(!req.privilege.addQuiz) return res.sendStatus(401);
    console.log("modify_question_of_quiz")

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var quiz_name = req.body.quiz_name;
    var question_id = req.body.question_id;
    var content = req.body.content;

    console.log(req.body);

    connection.query(
        'call modify_question_of_quiz_proc(?,?,?,?,?)',
        [sub_id, semester_id, quiz_name, question_id, content],
        (err, results, fields)=>{
            if(err) return res.sendStatus(500);
            res.sendStatus(200);
        }
    )
});


// Long do
router.post('/modify_answer_of_question', (req, res)=>{
    if(!req.privilege.addQuiz) return res.sendStatus(401);
    console.log("modify_answer_of_question")

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var quiz_name = req.body.quiz_name;
    var question_id = req.body.question_id;
    var answer_id = req.body.answer_id;
    var right_answer = req.body.right_answer;
    var content = req.body.content;

    console.log(req.body);

    connection.query(
        'call modify_answer_of_question_proc(?,?,?,?,?,?,?)',
        [sub_id, semester_id, quiz_name, question_id, answer_id, right_answer, content],
        (err, results, fields)=>{
            if(err) return res.sendStatus(500);
            res.sendStatus(200);
        }
    )
});

// Long do
router.get('/get_all_questions_and_answers_of_quiz', (req, res)=>{
    if(!req.privilege.getAllQuestionAndAnswers) return res.sendStatus(401);
    console.log('get_all_questions_and_answers_of_quiz');

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



//Long do
router.get('/getQuiz', (req, res)=>{
    if(!req.privilege.listQuiz) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var quiz_name = req.query.quiz_name;


    console.log("in quiz: ", req.headers)
    console.log("in quiz--: ", req.query)
    connection.query(
        'call get_a_quiz_proc(?,?,?)',
        [sub_id, semester_id, quiz_name],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0][0]);
        }
    )
});


//Long do
router.post('/modifyQuiz', (req, res)=>{
    if(!req.privilege.listQuiz) return res.sendStatus(401);
    console.log("modify")

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var old_quiz_name = req.body.old_quiz_name;
    var new_quiz_name = req.body.new_quiz_name;
    var max_time = req.body.max_time;
    // var no_question = req.body.no_question; ko cho sửa no_question -> ảnh hưởng các question đang có
    var deadline = req.body.deadline;


    console.log("in quiz: ", req.headers)
    console.log("in quiz--: ", req.body)
    connection.query(
        'call modify_quiz_proc(?,?,?,?,?,?)',
        [sub_id, semester_id, old_quiz_name, new_quiz_name, max_time, deadline],
        (err, results, fields)=>{
            console.log(results);
            if(err) return res.status(500).send(err);
            res.sendStatus(200);
            // res.send({
            //     'quiz_name': new_quiz_name,
            //     'max_time': max_time,
            //     'no_question': no_question,
            //     'deadline': deadline,
            // });
        }
    )
});


module.exports = router;