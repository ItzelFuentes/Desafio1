/*const Product = require ('../models/product');
const asyncHandler = require('express-async-handler')

const getAllProducts = asyncHandler(async (req, res)=> {
    const products = await Product.find().lean();
    if(!products?.length){
        return res.status(400).json({message: 'No se encontraron productos'})
    }
    res.json(products);
  })

  const createNewProduct = (req, res) => {
    let data = [
        {"status": "200", "mensaje":"Ok"},
        {
        "id": req.body.id,
        "name": req.body.name,
        "description": req.body.description,
        "price":req.body.price,
        "images":""
      }]
      res.json(data);  
  }

module.exports = {
    getAllProducts,
    createNewProduct
}*/
