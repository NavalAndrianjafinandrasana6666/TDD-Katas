import { greet, Person } from "../src/person";


describe("Attributes", () => {
  it("should return the correct age", () => {
    const subject = new Person("John", 10);
    expect(subject.age).toEqual(10);
  });

  it("should return the correct display name", () => {
    const subject = new Person("John", 10, "Doe");
    expect(subject.displayName).toEqual("John Doe");
  });

  it.skip("should return the correct display name when surname is not given", () => {
    const subject = new Person("John", 10);
    expect(subject.displayName).toEqual("John");
  });
});

describe("Greetings", () => {
  it("should greet a person without surname correctly", () => {
    const subject = new Person("John", 10)
    const result = greet(subject);

    expect(result).toEqual("Hello, John");
  });

  it.skip("should greet a person with surname correctly", () => {
    const subject = new Person("John", 10, "Doe")
    const result = greet(subject);

    expect(result).toEqual("Hello, John Doe");
  });
});