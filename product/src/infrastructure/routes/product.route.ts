import express from "express";
import { ProductController } from "../controller/product.controller";
import { GetAllProductUsecase } from "../../usecases/getAllProduct.usecase";
import { GetProductByIdUsecase } from "../../usecases/getProductById.usecase";
import { UpdateProductDetailsUsecase } from "../../usecases/updateProductDetails.usecase";
import { ProductRepository } from "../repositories/product.repository";

const router = express.Router();

// repository
const productRepository = new ProductRepository();

// usecase
const getAllProductUsecase = new GetAllProductUsecase(productRepository);
const getProductByIdUsecase = new GetProductByIdUsecase(productRepository);
const updateProductDetailsUsecase = new UpdateProductDetailsUsecase(productRepository);

// controller
const productController = new ProductController(getAllProductUsecase, getProductByIdUsecase, updateProductDetailsUsecase);

router.get("/", productController.getAllProduct);
router.get("/:productId", productController.getProductById);
router.put("/:productId", productController.updateProductDetails);

export default router;
