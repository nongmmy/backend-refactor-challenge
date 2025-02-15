import { Request, Response } from "express";
import { GetAllProductUsecase } from "../../usecases/getAllProduct.usecase";
import { GetProductByIdUsecase } from "../../usecases/getProductById.usecase";
import { UpdateProductDetailsUsecase } from "../../usecases/updateProductDetails.usecase";

export class ProductController {

  constructor(
    private getAllProductUsecase: GetAllProductUsecase,
    private getProductByIdUsecase: GetProductByIdUsecase,
    private updateProductDetailsUsecase: UpdateProductDetailsUsecase,
  ) { }

  getAllProduct = (req: Request, res: Response) => {
    const products = this.getAllProductUsecase.execute();
    res.json(products);
  };

  getProductById = (req: Request, res: Response) => {
    try {
      const { productId } = req.params;

      const product = this.getProductByIdUsecase.execute(productId);
      res.json(product);

    } catch (error: any) {
      if (error.message === "Product not found") {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  };

  updateProductDetails = (req: Request, res: Response) => {
    const product = req.body;

    this.updateProductDetailsUsecase.execute(product);

    res
      .status(201)
      .json({ message: "Product updated successfully", });
  };
}