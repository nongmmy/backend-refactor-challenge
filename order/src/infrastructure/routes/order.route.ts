import express from "express";
import { OrderController } from "../controller/order.controller";
import { PlaceOrderUsecase } from "../../usecases/placeOrder.usecase";
import { OrderRepository } from "../repositories/order.repository";


const router = express.Router();

const orderRepository = new OrderRepository()
const placeOrderUsecase = new PlaceOrderUsecase(orderRepository)
const orderController = new OrderController(placeOrderUsecase)

router.post("/", orderController.placeOrder);

export default router;
