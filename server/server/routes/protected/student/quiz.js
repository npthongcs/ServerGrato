const express = require('express');
const router = express.Router();
const connection = require('../../../connection');

router.get('/listQuiz', (req, res)=>{
    if(!req.privilege.listQuiz) return res.sendStatus(401);

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;

    console.log("in quiz: ", req.user)
    connection.query(
        'call student_get_a_quiz_of_a_semester_proc(?,?)',
        [sub_id, semester_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});

router.get('/quizofclass', (req, res)=>{
    console.log("quizofclass");
    if(!req.privilege.getAllQuizOfClass) return res.sendStatus(401);
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    console.log("quizofclass");
    var class_id = req.query.class_id;
    var user_id = req.user.id;
    console.log(req.user)
    connection.query(
        'call student_get_all_quiz_of_class_proc(?,?,?,?)',
        [sub_id, semester_id, class_id,user_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});

router.get('/viewresult', (req, res)=>{
    if(!req.privilege.viewResultQuiz) return res.sendStatus(401);
    console.log("viewresult");

    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var class_id = req.body.class_id;
    var user_id = req.body.user_id;
    var quiz_name = req.body.quiz_name;

    connection.query(
        'call get_all_question_of_a_quiz_proc(?,?,?)',
        [sub_id, semester_id, class_id, user_id, quiz_name],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});

router.post('/submitquiz', (req, res)=>{
    if(!req.privilege.submitquiz) return res.sendStatus(401);
    console.log("submitquiz");
    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var quiz_name = req.body.quiz_name;
    var answer = req.body.answer;
    var time = req.body.time;
    var score = req.body.score;

    connection.query(
        'call submitQuiz(?,?,?,?,?,?)',
        [sub_id, semester_id, quiz_name, answer, time, score],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});

router.get('/showquestion', (req, res)=>{
    if(!req.privilege.showQuestion) return res.sendStatus(401);
    console.log("showquestion");

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    var quiz_name = req.query.quiz_name;
    var question_id = req.query.question_id;
    connection.query(
        'call showQuestion(?,?,?,?,?)',
        [sub_id, semester_id, class_id, quiz_name,question_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});
router.get('/showmark', (req, res)=>{
    if(!req.privilege.showMark) return res.sendStatus(401);
    console.log("showMark");

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    var user_id = req.user.id;
    connection.query(
        'call showMark(?,?,?,?)',
        [sub_id, semester_id, class_id, user_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});

router.get('/showattendance', (req, res)=>{
    console.log("count");
    if(!req.privilege.showAttend) return res.sendStatus(401);
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    console.log(class_id);
    var user_id = req.user.id;
    console.log(req.user)
    connection.query(
        'call countAttendance(?,?,?,?)',
        [sub_id, semester_id, class_id,user_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            console.log(results)
            res.send(results[0]);
        }
    )
});

router.get('/tookattendance', (req, res)=>{
    console.log("tooktime");
    if(!req.privilege.tookattend) return res.sendStatus(401);
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    console.log(class_id);
    console.log(req.user)
    connection.query(
        'call tookattendance(?,?,?)',
        [sub_id, semester_id, class_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            console.log(results)
            res.send(results[0]);
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
            res.send(results[0]);
        }
    )
});

router.get('/attend', (req, res)=>{
    console.log("confirm");
    if(!req.privilege.attend) return res.sendStatus(401);
    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    var user_id = req.user.id;
    console.log(class_id);
    console.log(req.user)
    connection.query(
        'call tookattendance(?,?,?,?)',
        [sub_id, semester_id, class_id,user_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            console.log(results)
            res.send(results[0]);
        }
    )
});

router.post('/addattendance', (req, res)=>{
    if(!req.privilege.attend) return res.sendStatus(401);
    console.log("add");
    var sub_id = req.body.sub_id;
    var semester_id = req.body.semester_id;
    var class_id = req.body.class_id;
    var user_id = req.user.id;
    var date = req.body.date;

    connection.query(
        'call tookAttendance(?,?,?,?,?)',
        [sub_id, semester_id, class_id,date,user_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});
router.get('/showquiz', (req, res)=>{
    if(!req.privilege.showQuiz) return res.sendStatus(401);
    console.log("showquiz");

    var sub_id = req.query.sub_id;
    var semester_id = req.query.semester_id;
    var class_id = req.query.class_id;
    var quiz_name = req.query.quiz_name;
    var question_id = req.query.question_id;
    var user_id = req.user.id;
    connection.query(
        'call showQuiz(?,?,?,?,?)',
        [sub_id, semester_id, class_id, quiz_name,question_id],
        (err, results, fields)=>{
            if(err) return res.status(500).send(err);
            res.send(results[0]);
        }
    )
});
module.exports = router;