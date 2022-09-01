const express = require("express")
const router = express.Router()
const Products = require("../Models/Products")

router.get("/products", async (req,res) => {
   const products = await Products.find()
   if(products){
    res.json(products)
   } else {
    res.status(400).send("Products not found")
   }
})

router.get("/products/:id", async(req,res) => {
   const {id} = req.params
   const foundProducts = await Products.findById(id)

   if(foundProducts){
      res.status(200).json(foundProducts)
   } else {
      res.status(400).send("Products not found")
   }
})

module.exports = router