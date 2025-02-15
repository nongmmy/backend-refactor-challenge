import { Request, Response } from "express"
import { GetAllProductUsecase } from "../../usecases/getAllProduct.usecase"

export class ProductController {

  constructor(private getAllProductUsecase: GetAllProductUsecase) { }

  getAllProduct = (req: Request, res: Response) => {

    const products = this.getAllProductUsecase.execute()
    res.json(products)
  }
}