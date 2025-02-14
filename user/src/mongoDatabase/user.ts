export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  role: "user" | "admin";
};
const users: User[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    role: "user",
  },
]; // pretend this is a mongoDB collection

export const updateOne = (user: User) => {
  // let's pretend this is a mongoDB updateOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  const index = users.findIndex((u) => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
  }
};

export const findOneById = (id: string) => {
  // let's pretend this is a mongoDB findOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  return users.find((u) => u.id === id);
};

export const findOneByEmail = (email: string) => {
  // let's pretend this is a mongoDB findOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  return users.find((u) => u.email === email);
};

export const createOne = (user: User) => {
  // let's pretend this is a mongoDB createOne
  // you can move things around, but you don't have to implement real database operations, just pretend
  users.push(user);
};
