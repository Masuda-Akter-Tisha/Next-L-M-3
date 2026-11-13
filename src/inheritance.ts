//* Inheritance : a Manager is an employee with additional responsibility

class Employee {
    constructor (
        public name : string, 
        protected _baseSalary : number,
    ) {}

    // get baseSalary () : number {
    //     return this._baseSalary;
    // }


    set baseSalary (newSalary : number) {
        if (newSalary < 0) {
            throw new Error ('Salary cannot be negative value');
        }
        this._baseSalary = newSalary;
    }

    describe () : string {
        return `${this.name} earns ${this._baseSalary}`;
    }
}

class Manager extends Employee {
   
//     teamMemberCount : number;

//     constructor (name : string, _baseSalary : number, teamMemberCount : number) {
//         super (name, _baseSalary)
//         this.teamMemberCount = teamMemberCount;
//     }
// }
   
// shorthand
    constructor (
        name : string, 
        _baseSalary : number, 
       public teamMemberCount : number
    ) {
        
        super (name, _baseSalary)
    }

    describeWork () : string {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }

    describeManager () : string {
        return `${this.name} earns ${this._baseSalary}`
    }
}


const employee = new Employee ('Tisha', 22000);
console.log(employee.describe ());

const manager = new Manager ('Tasif', 25000, 20);
console.log(manager.describe ());
console.log(manager.describeWork ());
console.log(manager.describeManager ());







