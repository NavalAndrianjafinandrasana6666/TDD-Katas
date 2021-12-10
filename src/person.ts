/*
References:
- https://www.typescriptlang.org/docs/handbook/2/classes.html
*/

export class Person {
  readonly name: string
  readonly surname: string
  readonly age: number

  constructor(name, age, surname?) {
    this.name = name
    this.age = age
    this.surname = surname
  }

  get displayName() {
    return `${this.name} ${this.surname}`;
  }
}

export const greet = (person: Person) => {
  return `Hello, ${person.name}`;
}