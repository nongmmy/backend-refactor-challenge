export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};
const products: Product[] = []; // pretend this is a mongoDB collection
export const updateOne = (product: Product) => {
  // let's pretend this is a mongoDB updateOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  const index = products.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    products[index] = product;
  }
};

export const findOneById = (id: string) => {
  // let's pretend this is a mongoDB findOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  return products.find((p) => p.id === id);
};

export const findAll = () => {
  return products;
};

export const createOne = (product: Product) => {
  // let's pretend this is a mongoDB createOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  products.push(product);
};
