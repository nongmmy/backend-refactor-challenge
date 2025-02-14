import express, { Request, Response } from "express";
import * as Product from "../mongoDatabase/product";
const router = express.Router();

// 🛒 Get all products
router.get("/", (_req: Request, res: Response) => {
  const products = Product.findAll();
  res.json(products);
});

export default router;
