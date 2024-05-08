import { User } from "./Task_5";

interface Identifiable {
  id: number;
}

function findById<T extends Identifiable[]>(items: T, id: number) {
  return items.find((item) => item.id === id);
}
const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
];

const usersN = findById(users, 1);
