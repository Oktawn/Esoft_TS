import { User } from "./warmUP";

// Определите Generic интерфейс Response с одним параметром типа T. Второй параметр status: number
interface ResponseEx<T> {
  name: T;
  status: number;
}
// Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных
function createResponse<T>(data: T, status: number): ResponseEx<T> {
  return {
    name: data,
    status: status,
  };
}

let numAr = [1, 23, 123];
const numericResponse = createResponse(numAr, 200);

const userResponse = createResponse<User>(
  { name: "Test", id: 1, email: "gg@ya.ru" },
  200
);
