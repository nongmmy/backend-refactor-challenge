import express, { Request, Response } from "express";
import * as Product from "../mongoDatabase/product";
import * as Order from "../mongoDatabase/order";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// 📦 Place a new order
router.post("/", async (req: Request, res: Response): Promise<any> => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || !quantity || quantity <= 0) {
    return res.status(400).json({ error: "Invalid order details" });
  }

  const product = Product.findOneById(productId);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  if (product.stock < quantity) {
    return res.status(400).json({ error: "Insufficient stock" });
  }

  const totalPrice = product.price * quantity;
  const newOrder = { id: uuidv4(), userId, productId, quantity, totalPrice };

  Order.createOne(newOrder);
  product.stock -= quantity; // ⚠ Modifying stock directly (bad practice)

  res
    .status(201)
    .json({ message: "Order placed successfully", order: newOrder });
});

// 📑 Get all orders
router.get("/", (_req: Request, res: Response) => {
  res.json(Order.findAll());
});

// 📄 Get order details by ID
router.get("/:id", async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  const order = Order.findOneById(id);
  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  res.json(order);
});

export default router;
