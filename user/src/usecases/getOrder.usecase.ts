import { UserRepositoryInterface } from "../domain/repositories/userRepository.interface";

export class GetOrderUsecase {
  constructor(private userRepository: UserRepositoryInterface) { }

  execute() {
    // const { id } = req.params;

    // const user = User.findOneById(id);
    // if (!user) {
    //   return res.status(404).json({ error: "User not found" });
    // }

    // const userOrders = Order.findAllByUserId(id);

    // const detailedOrders = userOrders.map((order) => {
    //   const product = Product.findOneById(order.productId);
    //   return {
    //     ...order,
    //     productName: product ? product.name : "Unknown",
    //     productPrice: product ? product.price : 0,
    //   };
    // });

    // return detailedOrders
  }

}