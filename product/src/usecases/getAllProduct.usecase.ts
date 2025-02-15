import { ProductRepositoryInterface } from "../domain/repositories/productRepository.interface";

export class GetAllProductUsecase {

  constructor(private productRepository: ProductRepositoryInterface) { }

  execute() {
    const products = this.productRepository.findAll();
    return products
  }
}