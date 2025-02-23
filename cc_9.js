// Task 1 - Created Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; // Employee name
        this.id = id; // Unique ID
        this.department = department; // Department name
        this.salary = salary; // Monthly salary
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12; // Annual salary calculation
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // Test Data 

console.log(emp1.getDetails()); 
console.log(emp1.calculateAnnualSalary()); 

// Task 2 - Created Manager Class with Inheritance
class Manager extends Employee { //Creating Manager Class
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // Inheriting Employee properties
        this.teamSize = teamSize; // Team size for manager
    }

    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return super.calculateAnnualSalary() * 0.1; // Bonus is 10% of annual salary
    }

    calculateAnnualSalary() { //Task 4 - Consider bonuses for managers.
        return super.calculateAnnualSalary() + this.calculateBonus(); 
}
}
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // Test Cases

console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

// Task 3: Creating a Company Class

class Company {
    constructor(name) {
        this.name = name; // Company name
        this.employees = []; // Array to store employees
    }

    addEmployee(employee) {
        this.employees.push(employee); // Add employee to list
    }

    listEmployees() {
        this.employees.forEach(emp => console.log(emp.getDetails())); // Log all employee details
    }
    
    calculateTotalPayroll() { //Task 4 - returns the sum of all employee salaries (including managers)
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0); 
    }

    promoteToManager (employee, teamSize) { //Task 5 - Implementing Promotions
        const index = this.employees.indexOf(employee); 
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); 
}
}

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

// Task 4: Implementing a Payroll System
console.log(company.calculateTotalPayroll()); 

// Task 5: Implementing Promotions
company.promoteToManager(emp1, 3); 
company.listEmployees(); 