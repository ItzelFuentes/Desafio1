var express = require('express');
var router = express.Router();
//const productControllers = require('../controllers/productControllers')
let productModel = require('../models/Product');

router.get("/", async function (req, res, next) {
  const resultado = await productModel.find();
  res.json(resultado);
});

router.post("/", async function (req, res, next) {
  const product = new productModel({
    id: req.body.id, //Extra el Id pasado por el body
    description: req.body.description,
    name: req.body.name,
    price: req.body.price,
    images: req.body.images
  });

  const result = await product.save(); // Lo guarda en Mongo
  res.json('Registro Agregado exitosamente');

});

router.put("/:id", async function (req, res, next) {
  const filter = {id: req.body.id}; //Condición de Query
  const update = {name: req.body.name}; //Campos a modificar

  const resultado = await productModel.findOneAndUpdate(filter, update, {
    new:true,
    upsert: true
  });


  res.json("Se actualiza el producto");
 });
 
 router.delete("/:id", async function (req, res, next) {
   //Buscar un producto por ID y regresa una lista
   const resul = await productModel.find({id: req.body.id}).exec();
   //Si se encontró lo elimina
   if (resul.length > 0) {
     await productModel.deleteOne({id: req.body.id});
     res.json("Eliminando producto");
   } else {
     res.json({error: "No se encontró el producto con Id " + req.body.id})
   } 
 });
 

/*/* GET products listing. 

//mostrar un producto
router
  .route('/')
  .get(productControllers.getAllProducts) 
  .post(productControllers.createNewProduct)
*/
 
module.exports = router;
