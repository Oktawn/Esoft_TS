interface Person {
    name: string;
    age: number;
}

interface Adult {
    fullName: string;
    age: number;
}

function mapAndFilter<T, U>(items: T[], transform: ((item: T) => U), filter: (item: U) => boolean): U[] {
    return items.map(transform).filter(filter)
}

function mapAndFilterSort<T, U>(items: T[], transform: ((item: T) => U), filter: (item: U) => boolean, sort: (a: U, b: U) => number): U[] {
    return items.map(transform).sort(sort).filter(filter)
}


const people: Person[] = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
];

export const adults: Adult[] = mapAndFilter(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18
);

export const adultsSort: Adult[] = mapAndFilterSort(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18,
    (a, b) => a.age - b.age
);


// Могут быть различными т.к. Т - входной тип, а И - тип в который преобразуем 
