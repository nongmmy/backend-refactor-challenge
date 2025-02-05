import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
