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