export type Order = {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
};

const orders: Order[] = [
  {
    id: "1",
    userId: "1",
    productId: "1",
    quantity: 1,
    totalPrice: 100,
  },
  {
    id: "2",
    userId: "1",
    productId: "2",
    quantity: 2,
    totalPrice: 400,
  },
  {
    id: "3",
    userId: "2",
    productId: "1",
    quantity: 1,
    totalPrice: 100,
  },
]; // pretend this is a mongoDB collection

export const updateOne = (order: Order) => {
  // let's pretend this is a mongoDB updateOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  const index = orders.findIndex((p) => p.id === order.id);
  if (index !== -1) {
    orders[index] = order;
  }
};

export const findOneById = (id: string) => {
  // let's pretend this is a mongoDB findOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  return orders.find((p) => p.id === id);
};

export const findAll = () => {
  return orders;
};

export const createOne = (order: Order) => {
  // let's pretend this is a mongoDB createOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  orders.push(order);
};

export const findAllByUserId = (userId: string) => {
  return orders.filter((o) => o.userId === userId);
};
