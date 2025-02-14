import express, { Request, Response } from "express";
// import { createOne, findOneByEmail } from "../mongoDatabase/user";
import { v4 as uuidv4 } from "uuid";
import * as User from "../mongoDatabase/user";
// import * as Order from "../../order/src/mongoDatabase/order";
// import * as Product from "../mongoDatabase/product";
const router = express.Router();

router.post("/register", async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const existingUser = User.findOneByEmail(email);
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = {
    id: uuidv4(),
    email,
    password,
    firstName: "",
    lastName: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    role: "user" as const,
  };
  User.createOne(newUser);

  console.log(`Sending welcome email to ${email}`);

  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
});

// router.get("/:id/orders", async (req: Request, res: Response): Promise<any> => {
//   const { id } = req.params;

//   const user = User.findOneById(id);
//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   const userOrders = Order.findAllByUserId(id);

//   const detailedOrders = userOrders.map((order) => {
//     const product = Product.findOneById(order.productId);
//     return {
//       ...order,
//       productName: product ? product.name : "Unknown",
//       productPrice: product ? product.price : 0,
//     };
//   });

//   res.json(detailedOrders);
// });

export default router;
