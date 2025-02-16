import express from "express";
import { ProductController } from "../controller/product.controller";
import { GetAllProductsUsecase } from "../../usecases/getAllProduct.usecase";
import { GetProductDetailsUsecase } from "../../usecases/getProductById.usecase";
import { UpdateProductDetailsUsecase } from "../../usecases/updateProductDetails.usecase";
import { ProductRepository } from "../repositories/product.repository";

const router = express.Router();

// repository
const productRepository = new ProductRepository();

// usecase
const getAllProductsUsecase = new GetAllProductsUsecase(productRepository);
const getProductDetailsUsecase = new GetProductDetailsUsecase(productRepository);
const updateProductDetailsUsecase = new UpdateProductDetailsUsecase(productRepository);

// controller
const productController = new ProductController(getAllProductsUsecase, getProductDetailsUsecase, updateProductDetailsUsecase);

router.get("/", productController.getAllProduct);
router.get("/:productId", productController.getProductById);
router.put("/:productId", productController.updateProductDetails);

export default router;
