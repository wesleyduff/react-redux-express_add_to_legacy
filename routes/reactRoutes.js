var express = require('express');
var router = express.Router();

var todo = require('todo');
var util = require('util');
console.log(`---- require works`)
console.log(util.inspect(todo))

var ejs = require('ejs')

// router.get('/todo', function (req, res) {
//     //res.sendFile(path.join(__dirname, '../client', 'build/todo.html'));
//     res.render('../node_modules/todo/build/todo',{});
// });

router.get('/todo', function (req, res) {
    //res.sendFile(path.join(__dirname, '../client', 'build/todo.html'));
    res.render('pages/react-app/todo', {"app": todo.page, render:ejs.render});
});



module.exports = router;