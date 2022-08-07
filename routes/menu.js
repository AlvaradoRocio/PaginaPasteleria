var express = require('express');
const { route } = require('.');
var router = express.Router();
var menuModel= require('../models/menuModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var menu= await menuModel.getProductos();
  res.render('menu', {
    menu
  });
});

router.get('modificar/:id', async (req, res, next)=>{
  
  let menu= await menuModel.getProductosById(req.params.id);
  res.render('admin/modificar', {
    layout:'admin/menu', 
    menu
  });
});

module.exports = router;