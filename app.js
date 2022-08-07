var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session= require('express-session');
var indexRouter = require('./routes/index');
var nosotrosRouter = require('./routes/nosotros');
var cursosRouter = require('./routes/cursos');
var galeriaRouter = require('./routes/galeria');
var menuRouter= require('./routes/menu');
var contactoRouter = require('./routes/contacto');
var usersRouter = require('./routes/users');
var loginRouter= require('./routes/admin/login');
var adminRouter= require('./routes/admin/menu');
const pool = require('./models/bd');
const { Cookie } = require('express-session');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'Hola1234',
  resave: false,
  saveUninitialized: true
}));

secured= async(req, res, next)=>{
  try {
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next();
    } else{
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/cursos', cursosRouter);
app.use('/galeria', galeriaRouter);
app.use('/menu', menuRouter);
app.use('/contacto', contactoRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/menu', secured, adminRouter);
 

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

module.exports = app;
