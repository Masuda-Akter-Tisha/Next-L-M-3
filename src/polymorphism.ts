//* Polymorphism : different employees respond differently to the same method call

class Employee {
    constructor (
        public name : string, 
        protected _baseSalary : number,
    ) {}

    get baseSalary () : number {
        return this._baseSalary;
    }

    set baseSalary (newSalary : number) {
        if (newSalary < 0) {
            throw new Error ('Salary cannot be negative value');
        }
        this._baseSalary = newSalary;
    }

    calculatePay (texRate : number) {
        return this._baseSalary - this._baseSalary * texRate;
    }

}

class Manager extends Employee {
    override calculatePay () {
        return this._baseSalary ;
    }
}

class Developer extends Employee {
    
    constructor (
        name : string, 
        _baseSalary : number,
        public type : string
    ) {

        super (name, _baseSalary)

    }
    
     override calculatePay (texRate : number) {

        return this._baseSalary - this._baseSalary * texRate ;
    }
}


const employee = new Employee ('Tisha', 23000);
console.log(employee.calculatePay (0.1));

const manager = new Manager ('Tasif', 34000);
console.log(manager.calculatePay ());

const developer = new Developer ('mir', 50000, 'Backend');
console.log(developer.calculatePay (0.1));
