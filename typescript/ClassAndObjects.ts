export class Employee{

    public employeeName: string;
    public employeeAge: number;
    public employeeSalary: number;

    constructor(name: string, age: number, salary: number){
        this.employeeName = name;
        this.employeeAge = age;
        this.employeeSalary = salary;
    }

    public work(): void{ // instance method
        console.log(`${this.employeeName} is working.`);
    }

    public static payTaxes(){ // static methods
        console.log("Employee must pay taxes");
    }

}


export function greetings(): void{
    console.log("Hello, World!");
}