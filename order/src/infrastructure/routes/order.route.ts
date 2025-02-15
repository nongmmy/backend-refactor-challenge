import express from "express";
import { OrderController } from "../controller/order.controller";
import { PlaceOrderUsecase } from "../../usecases/placeOrder.usecase";
import { GetOrdersUsecase } from "../../usecases/getOrders.usecase";
import { OrderRepository } from "../repositories/order.repository";
import { ProductRepository } from "../repositories/product.repository";


const router = express.Router();

const orderRepository = new OrderRepository();
const productRepository = new ProductRepository();
const placeOrderUsecase = new PlaceOrderUsecase(orderRepository, productRepository);
const getOrders = new GetOrdersUsecase(orderRepository);
const orderController = new OrderController(placeOrderUsecase, getOrders);

router.post("/", orderController.placeOrder);
router.get("/", orderController.getOrders);

export default router;
