import path from 'path';
import ProductModel from '../Models/prodcuts-models.js';
import { URL } from 'url';
export default class ProductController{
 
  getProducts(req,res){
    let products=ProductModel.get();
    res.render("products",{products:products})
  }
  getAddForm(req,res,next){
   return res.render("new-product",{errors:null,success: false})
  }
  addNewProduct(req,res,next){

    console.log(req.body)
    ProductModel.add(req.body);
    let products=ProductModel.get();
    return res.render('products',{products})

  }
}
