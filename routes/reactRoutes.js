var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/todo', function (req, res) {
    //res.sendFile(path.join(__dirname, '../client', 'build/todo.html'));
    res.render('../client/build/todo', {});
});

module.exports = router;