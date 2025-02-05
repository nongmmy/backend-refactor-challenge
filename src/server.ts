import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
