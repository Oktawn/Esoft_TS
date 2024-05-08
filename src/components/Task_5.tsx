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

export function getUserFieldType(key: keyof User) {
  const temp: User = { id: 0, name: "", email: "", age: 0 };
  return typeof temp[key];

}

const nameType = getUserFieldType('id');
const ageType = getUserFieldType("age");
