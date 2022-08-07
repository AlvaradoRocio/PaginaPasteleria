var express = require('express');
var router = express.Router();
var menuModel=require('../../models/menuModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var menu= await menuModel.getProductos();
  res.render('admin/menu', {
      layout: 'admin/layout', 
      usuario: req.session.nombre,
      menu
  })});

  router.get('/eliminar/:id', async (req, res, next)=>{
    var id = req.params.id;
    await menuModel.deleteProductos(id);
    res.redirect('/admin/menu');
  })

  router.get('/agregar', (req, res)=>{
    res.render('admin/agregar', {
      layout:'admin/layout'
    });
  });

  router.post('/agregar', async function(req, res){
    try {
      if(req.body.titulo!='' && req.body.cuerpo!=''){
        await menuModel.insertProductos(req.body);
        res.redirect('/admin/menu')
      } else {
        res.render('admin/agregar', {
          layout:'admin/layout',
          error:true, 
          message:'Todos los campos son requeridos'
        });
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

  router.get('/modificar/:id', async (req, res, next)=>{
    let menu= await menuModel.getProductosById(req.params.id);
    
    res.render('admin/modificar',{
      layout:'admin/layout',
      menu
    });
  });

  router.post('/modificar', async function(req, res, next){
    try {
      let obj={
        titulo: req.body.titulo,
        cuerpo: req.body.cuerpo
      }
      await menuModel.updateProductos(obj, req.body.id);
      res.redirect('/admin/menu');

    } catch (error) {
      console.log(error);
      res.render('admin/modificar', {
        layout:'admin/layout', 
        error:true,
        message: 'No se modificó el producto del menu'
      });
    }
  });

  module.exports = router;