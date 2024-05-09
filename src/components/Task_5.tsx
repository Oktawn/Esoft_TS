export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserNameType = User["email"];

type UserFieldsToBoolean = {
  [k in keyof User]: boolean;
};



function getUserFieldType<T extends keyof User>(key: T): User[T] {
  return null as any;
}

const nameType = getUserFieldType('id');
const ageType = getUserFieldType('email');
