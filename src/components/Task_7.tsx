interface User {
  id: number;
  name: string;
  age: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Book {
  isbn: string;
  title: string;
  author: string;
}

export function findInArray<T, K extends keyof T>(items: T[], key: K | K[], value: T[K] | T[K][]): T[] | undefined {

  let keyAr = Array.isArray(key) ? key : [key];
  let valAr = Array.isArray(value) ? value : [value];

  return items.filter((item) => {
    return keyAr.every((key, index) => item[key] === valAr[index])
  });
}
const users: User[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
];

const books: Book[] = [
  { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
  { isbn: "67890", title: "Learning TypeScript", author: "Another One" },
];

export const testUser = findInArray(users, ['age', 'name'], [25,"Alice"]);