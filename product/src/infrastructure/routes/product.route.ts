import express from "express";
import { ProductController } from "../controller/product.controller";
import { GetAllProductUsecase } from "../../usecases/getAllProduct.usecase";
import { GetProductByIdUsecase } from "../../usecases/getProductById.usecase";
import { UpdateProductDetailsUsecase } from "../../usecases/updateProductDetails.usecase";
import { ProductRepository } from "../repositories/product.repository";

const router = express.Router();

const productRepository = new ProductRepository();
const getAllProductUsecase = new GetAllProductUsecase(productRepository);
const getProductByIdUsecase = new GetProductByIdUsecase(productRepository);
const updateProductDetailsUsecase = new UpdateProductDetailsUsecase(productRepository);
const productController = new ProductController(getAllProductUsecase, getProductByIdUsecase, updateProductDetailsUsecase);

// 🛒 Get all products
router.get("/", productController.getAllProduct);

// Get Product by id
router.get("/:productId", productController.getProductById);

// Update Product details
router.put("/:productId", productController.updateProductDetails);

export default router;
