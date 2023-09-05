import express from "express"
import ProductController from "./src/Controller/products-controller.js"
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import ValidationMiddleware from "./src/Middlewares/Validation.middleware.js";


const server=express();
//Parse Data
server.use(express.urlencoded({extended:true}))

//Setup view Engine
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),"src","views"))
server.use(ejsLayouts)


const productController=new ProductController();
server.get("/",productController.getProducts)
server.get("/new",productController.getAddForm)
server.post(
    "/",
    ValidationMiddleware,
    productController.addNewProduct )

server.use(express.static('src/views'))

server.listen(3400);