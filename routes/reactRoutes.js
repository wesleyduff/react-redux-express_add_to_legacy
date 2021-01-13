var express = require('express');
var router = express.Router();

router.get('/todo', function (req, res) {
    //res.sendFile(path.join(__dirname, '../client', 'build/todo.html'));
    res.render('../node_modules/todo/build/todo',{});
});


module.exports = router;