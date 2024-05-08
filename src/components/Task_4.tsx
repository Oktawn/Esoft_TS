interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}

type PartialEmployee = Partial<Employee>;
type ReadonlyEmployee = Readonly<Employee>;

export function printEmployeeInfo(employee: PartialEmployee) {
  console.log(employee);
}
