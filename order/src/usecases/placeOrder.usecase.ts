import { OrderRepositoryInterface } from "../domain/repositories/orderRepository.interface"

export class PlaceOrderUsecase {
  constructor(private orderRepository: OrderRepositoryInterface) { }

  execute = (userId: number, productId: number, quantity: number) => {
    if (!userId || !productId || !quantity || quantity <= 0) {
      throw new Error("Invalid order details")
    }

    // const product = Product.findOneById(productId);
    // if (!product) {
    //   throw new Error("Product not found")
    // }

    // if (product.stock < quantity) {
    //   return res.status(400).json({ error: "Insufficient stock" });
    // }

    // const totalPrice = product.price * quantity;
    // const newOrder = { id: uuidv4(), userId, productId, quantity, totalPrice };

    // Order.createOne(newOrder);
    // product.stock -= quantity;
    // Product.updateOne(product);

    // res
    //   .status(201)
    //   .json({ message: "Order placed successfully", order: newOrder });

  }
}