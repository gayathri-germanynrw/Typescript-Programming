import { Employee, greetings } from "./ClassAndObjects";

let employee1: Employee = new Employee("Emily", 35, 100_000);

console.log(employee1);

greetings();

employee1.work();

Employee.payTaxes();