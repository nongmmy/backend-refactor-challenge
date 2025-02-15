import express from "express";
import { ProductController } from "../controller/product.controller";
import { GetAllProductUsecase } from "../../usecases/getAllProduct.usecase";
import { ProductRepository } from "../repositories/product.repository";



const router = express.Router();

const productRepository = new ProductRepository()
const getAllProductUsecase = new GetAllProductUsecase(productRepository)
const productController = new ProductController(getAllProductUsecase)

// 🛒 Get all products
router.get("/", productController.getAllProduct);

export default router;
