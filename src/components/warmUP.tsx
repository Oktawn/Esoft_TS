// Part 1
export interface User {
  id: number;
  name: string;
  email: string;
}

interface Activity {
  userId: number;
  activity: string;
  timestamp: Date;
}

async function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then((response) => response.json());
}
type PartialUser = Partial<User>;

type ReadonlyActivity = Readonly<Activity>;

function getUserActivities(userId: number) {
  return fetchData(`/api/activities/${userId}`);
}

type ActivitiesReturnType = ReturnType<typeof getUserActivities>;

type AdminPermissions = { canBanUser: boolean };
type BasicPermissions = { canEditProfile: boolean };
type PermissionsType<T> = T extends "admin"
  ? AdminPermissions
  : BasicPermissions;

// Part 2

type Alias = string | number;
type StringOrNumber = Alias;
// type StringOrNumber=string | number;

function logMessage(message: StringOrNumber) {
  console.log(message);
}
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
function isString(value: StringOrNumber): value is string {
  return typeof value === "string";
}

// Бросьте исключение, если значение не является числом
function assertIsNumber(value: any): asserts value is number {
  if (!(typeof value === "number")) throwError("No number");
}

// Завершите функцию processValue, используя isString и assertIsNumber
// function processValue(value: StringOrNumber) ??
function processValue(value: any) {
  if (isString(value)) logMessage(`String value: ${value.toUpperCase()}`);
  else {
    assertIsNumber(value);
    logMessage(`Number value: ${value.toFixed(2)}`);
  }
}
