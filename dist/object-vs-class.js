// interface Employee {
//     name : string;
//     baseSalary : number
// }
// const employee : Employee = {
//     name : 'Tisha',
//     baseSalary : 20000,
// }
// const employee2 : Employee = {
//     name : 'Tasif',
//     baseSalary : 20000
// }
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee = new Employee('Tisha', 22200);
const employee2 = new Employee('Mir', 34000);
export {};
// console.log(employee instanceof Employee);
// console.log(employee2 instanceof Employee);
