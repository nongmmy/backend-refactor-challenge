import axios from "axios";
import { OrderRepositoryInterface } from "../../domain/repositories/orderRepository.interface";

export class OrderRepository implements OrderRepositoryInterface {

  findAllByUserId = async (userId: string) => {
    // API endpoint for fetching recent users
    const apiUrl = 'http://localhost:3000/orders';

    // Set up query parameters
    const queryParams = {
      userId,
    };

    // Convert query parameters to a string
    const queryString = new URLSearchParams(queryParams).toString();

    // Combine API endpoint with query parameters
    const fullUrl = `${apiUrl}?${queryString}`;


    const result = await axios.get(fullUrl)
    return result.data
  }
}