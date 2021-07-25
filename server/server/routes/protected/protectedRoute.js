const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const connection = require('../../connection');


function getPrivilege(user) {
    //Request and check user group
    const privilege = {
        listQuiz : false,
        getAllQuizOfClass : false,
        addQuiz : false,
        inforClass : false,
        listgroup: false,
        joinsubject: false,
        joingroup: false,
        outgroup: false,
        creategroup: false,
        viewmem: false,
        listsubject: false,
        viewResultQuiz: false,
        submitquiz: false,
        listsubject_GV: false,
        assquiztoclass: false,
        listclass:false,
        createclass: false,
        liststudent: false,
        getnomax: false,
        showQuestion: false,
        showattend: false,
        tookattend: false,
        countabsent: false,
        attend: false,
        addattend: false,
        showQuiz: false,
        deletegroup: false
    };

    if(user.job_type == 'GV')
    {
        privilege.listQuiz = true;
        privilege.getAllQuizOfClass = true;
        privilege.addQuiz = true;
        privilege.deleteQuiz = true;
        privilege.listsubject_GV = true;
        privilege.addquiztoclass = true;
        privilege.listclass = true;
        privilege.createclass = true;
        privilege.liststudent = true;
        privilege.viewListExam = true;
        privilege.createNewExam = true;
        privilege.deleteExam =true;
        privilege.createExamCode = true;
        privilege.deleteExamCode = true;
        privilege.viewListStudentDoExamCode = true;
        privilege.deleteStudentDoExamCode = true;
        privilege.getAllQuestionAndAnswers = true;

    }
    if(user.job_type == 'SV')
    {
        privilege.showQuestion = true;
        privilege.listQuiz = true;
        privilege.getAllQuizOfClass = true;
        privilege.inforClass = true;
        privilege.listgroup = true;
        privilege.joingroup = true;
        privilege.joinsubject = true;
        privilege.outgroup = true;
        privilege.creategroup = true;
        privilege.viewmem = true;
        privilege.listsubject = true;
        privilege.viewResultQuiz = true;
        privilege.submitquiz = true;
        privilege.findGroup = true;
        privilege.getnomax = true;
        privilege.showMark = true;
        privilege.showAttend = true;
        privilege.tookattend = true;
        privilege.countabsent = true;
        privilege.attend = true;
        privilege.addattend = true;
        privilege.showQuiz = true;
        privilege.deletegroup = true;
    }


    return privilege;
}


// chay bat ke url nao
router.use((req, res, next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader;

    if(req.url == '/authenticate/signup' || req.url == '/authenticate/signin') return next();
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, 'JWR-TOKEN-SECRET-SHOULD-BE-STORED-IN-PROCESS-ENV', (err, user) => {
        if (err) return res.sendStatus(403);

        // console.log(user);

        req.user = user;
        req.privilege = getPrivilege(user);

        next();
    })
});


router.use('/student', require('./student/studentApi'));
router.use('/teacher', require('./teacher/teacherApi'));


module.exports = router;
