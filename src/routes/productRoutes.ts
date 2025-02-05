import express, { Request, Response } from "express";
import { findAll, createOne, findOneById } from "../mongoDatabase/product";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// 🛒 Get all products
router.get("/", (_req: Request, res: Response) => {
  const products = findAll();
  res.json(products);
});

// ➕ Add a new product
router.post("/", async (req: Request, res: Response): Promise<any> => {
  const { name, price, stock } = req.body;

  if (!name || !price || !stock) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newProduct = { id: uuidv4(), name, price, stock };
  createOne(newProduct);

  res
    .status(201)
    .json({ message: "Product added successfully", product: newProduct });
});

// 🔄 Update product stock
router.put("/:id", async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const { stock } = req.body;

  const product = findOneById(id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  if (stock < 0) {
    return res.status(400).json({ error: "Stock cannot be negative" });
  }

  product.stock = stock;
  res.json({ message: "Product stock updated", product });
});

export default router;
