//* Inheritance : a Manager is an employee with additional responsibility
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('Salary cannot be negative value');
        }
        this._baseSalary = newSalary;
    }
    describe() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
}
const employee = new Employee('Tisha', 22000);
console.log(employee.describe());
const manager = new Manager('Tasif', 25000, 20);
console.log(manager);
export {};
