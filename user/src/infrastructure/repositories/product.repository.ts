import axios from "axios";
import { ProductRepositoryInterface } from "../../domain/repositories/productRepository.interface";

export class ProductRepository implements ProductRepositoryInterface {
  findOneById = async (productId: string) => {
    // API endpoint for fetching recent users
    const apiUrl = 'http://localhost:3001/products';

    // Combine API endpoint with query parameters
    const fullUrl = `${apiUrl}/${productId}`;


    const result = await axios.get(fullUrl)
    return result.data
  }
}