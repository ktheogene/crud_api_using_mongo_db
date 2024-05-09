const mongoose = require("mongoose")
const Product = require("../modules/productModule")


const createProduct  = async(req,res) =>{
  try {
    const product =await Product.create(req.body)
    res.status(200).json(product)
  } ca 
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getProduct = async(req,res) =>{
    try {
        const {id} =req.params;
        const product =await Product.findById(id)
        res.st/atus(200).json(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const deleteProduct = async(req,res) =>{
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id)
        if(!Product){
            res.status(404).json({message : "product not found"})
        }
        res.status(200).json({message : "product deleted successfully"});
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const updatedProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product =await Product.findByIdAndUpdate(id,req.body)
    
        if(!product){
          return  res.status(404).json({message: "product not found"});
        }else{
        const updatedProduct = await  Product.findById(id); 
        res.status(200).json(updatedProduct)
        }
        
    } catch (error) {
      res.status(500).json({message: error.message})  
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updatedProduct 
    
}