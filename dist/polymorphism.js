//* Polymorphism : different employees respond differently to the same method call
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
    calculatePay(texRate) {
        return this._baseSalary - this._baseSalary * texRate;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this._baseSalary;
    }
}
class Developer extends Employee {
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.type = type;
    }
    calculatePay(texRate) {
        return this._baseSalary - this._baseSalary * texRate;
    }
}
const employee = new Employee('Tisha', 23000);
console.log(employee.calculatePay(0.1));
const manager = new Manager('Tasif', 34000);
console.log(manager.calculatePay());
const developer = new Developer('mir', 50000, 'Backend');
console.log(developer.calculatePay(0.1));
export {};
