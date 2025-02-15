import { Request, Response } from "express";
import { PlaceOrderUsecase } from "../../usecases/placeOrder.usecase";

export class OrderController {

  constructor(private placeOrderUsecase: PlaceOrderUsecase) { }

  placeOrder = (req: Request, res: Response) => {
    try {
      const { userId, productId, quantity } = req.body;

      const newUser = this.placeOrderUsecase.execute(userId, productId, quantity)

      res
        .status(201)
        .json({ message: "Order placed successfully", });

    } catch (error) {

      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      } else {
        res.status(500).json({ error: "Internal Server Error" })
      }

    }
  }

}