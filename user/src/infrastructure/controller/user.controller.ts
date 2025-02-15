import { Request, Response } from "express";
import { RegisterUsecase } from "../../usecases/register.usecase"

export class UserController {

  constructor(private registerUsecase: RegisterUsecase) { }

  register = (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const newUser = this.registerUsecase.execute(email, password)

      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });

    } catch (error) {

      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      } else {
        res.status(500).json({ error: "Internal Server Error" })
      }

    }
  }

}