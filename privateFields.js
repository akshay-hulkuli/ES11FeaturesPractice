//To define a private property in JavaScript, it should have the hashtag symbol in the prefix.

class Employee {
    #id;
    constructor(id,name,salary){
        this.#id = id;
        this.name = name;
        this.salary = salary;
    }
    getId(){
        return this.#id;
    }
}

const emp = new Employee(1,'akshay','88888888');


console.log(emp.name);
// console.log(emp.#id);
console.log(emp.getId())