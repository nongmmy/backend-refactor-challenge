import express, { Request, Response } from "express";
// import * as Product from "../mongoDatabase/product";
import * as Order from "../mongoDatabase/order";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// 📦 Place a new order
// stock should be updated, and the order should be created
router.post("/", async (req: Request, res: Response): Promise<any> => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || !quantity || quantity <= 0) {
    return res.status(400).json({ error: "Invalid order details" });
  }

  // const product = Product.findOneById(productId);
  // if (!product) {
  //   return res.status(404).json({ error: "Product not found" });
  // }

  // if (product.stock < quantity) {
  //   return res.status(400).json({ error: "Insufficient stock" });
  // }

  // const totalPrice = product.price * quantity;
  // const newOrder = { id: uuidv4(), userId, productId, quantity, totalPrice };

  // Order.createOne(newOrder);
  // product.stock -= quantity;
  // Product.updateOne(product);

  // res
  //   .status(201)
  //   .json({ message: "Order placed successfully", order: newOrder });

  res.json('success')
});

export default router;
