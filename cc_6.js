// Coding Challenge 00

// Code goes here

// Step 1:

// Step 2:

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe(){
        return`${this.name} is an employee in ${this.department}`
    }
}

// Step 3:

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe(){
        return`${this.name} manages ${this.teamSize} people in ${this.department}`
    }
}

// Step 4:

let emp1 = new Employee("Raiden", "Sales");
let emp2 = new Employee("Roxas", "Marketing");
let mgr1 = new Manager("Zack", "Sales", 8);
let mgr2 = new Manager("Riku", "IT", 6);

console.log(emp1.describe());
console.log(emp2.describe());
console.log(mgr1.describe());
console.log(mgr2.describe());

// Step 5:

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        for (let e of this.employees) {
            console.log(e.describe());
        }

    }

}

// Step 6: 

let bartsCompany = new Company();
bartsCompany.addEmployee(emp1);
bartsCompany.addEmployee(emp2);
bartsCompany.addEmployee(mgr1);
bartsCompany.addEmployee(mgr2);

bartsCompany.listEmployees();