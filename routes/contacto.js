var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {});
});

var nodemailer= require('nodemailer');
router.post('/', async(req, res, next)=>{
 
  if(!req.body.nombre || !req.body.email || !req.body.telefono && !req.body.mensaje){
    res.render('contacto', {
      message:'TODOS LOS DATOS SON REQUERIDOS'
      });
      
    return;
  }
  var nombre= req.body.nombre;
  var email= req.body.email;
  var tel= req.body.telefono;
  var mensaje=req.body.mensaje;

  var obj={
    to:'rociobalvarado51@gmail.com',
    subject:'CONTACTO WEB',
    html:nombre + ' con email: '+ email + ' y telefono: '+ tel+ ' se contactó a través de la web<br>Dejó el siguiente mensaje: ' + mensaje
  }

  var transport= nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: process.env.SMTP_PORT,
    auth:{
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(obj);
  
  res.render('contacto', {
    message:'Mensaje enviado correctamente, en la brevedad nos contactaremos'
  });
});

module.exports = router;