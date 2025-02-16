import axios from 'axios';

import { ProductRepositoryInterface } from '../../domain/repositories/productRepository.interface';
import { Product } from '../../domain/model/product';

export class ProductRepository implements ProductRepositoryInterface {

  private apiUrl = process.env.PRODUCT_URL;

  findOneById = async (productId: string) => {
    const fullUrl = `${this.apiUrl}/${productId}`;

    const result = await axios.get(fullUrl);
    return result.data;
  };

  updateOne = async (product: Product) => {
    const fullUrl = `${this.apiUrl}/${product.id}`;

    await axios.put(fullUrl, product);
  };
}