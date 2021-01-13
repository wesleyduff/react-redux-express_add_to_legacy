const
    express = require('express'),
    router = express.Router(),
    todo = require('todo'),
    ejs = require('ejs')
;

//OLD WAY
// router.get('/todo', function (req, res) {
//     //res.sendFile(path.join(__dirname, '../client', 'build/todo.html'));
//     res.render('../node_modules/todo/build/todo',{});
// });

//BETTER WAY
router.get('/todo', function (req, res) {
    res.render('pages/react-app/todo', {"app": todo.page, render:ejs.render});
});



module.exports = router;