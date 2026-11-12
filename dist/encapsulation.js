//* Encapsulation : Protect a state and change it through a methods
//* Access modifier
//?  public
//?  private
//?  protect
//? readonly 
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
    getSalaryWithBonus() {
        return this._baseSalary + 5000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('Salary cannot be negative value');
        }
        this._baseSalary = newSalary;
    }
}
const employee = new Employee('Tisha', 22000);
const employee2 = new Employee('Mir', 34000);
console.log(employee.getSalaryWithBonus());
export {};
