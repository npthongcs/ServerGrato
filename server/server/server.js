const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

app.use('/', require('./routes/protected/protectedRoute'));
app.use('/authenticate', require('./routes/authenticate'));

var PORT = process.env.PORT || '4000';

app.listen(PORT ,() =>{
    console.log(`Server is running on port: ${process.env.PORT || '4000'}`)

});

module.exports = app;
