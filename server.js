var createError = require('http-errors');
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();

var expressAppRoutes = require('./routes/expressAppRoutes');
var reactAppRoutes = require('./routes/reactRoutes');

// view engine setup
app.use(expressLayouts)
app.set('layout', './global/layout')
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/todo', '/build')))



app.use('/', expressAppRoutes);
app.use('/react-app', reactAppRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(process.env.PORT || 3000);