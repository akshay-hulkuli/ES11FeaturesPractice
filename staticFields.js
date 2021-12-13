class Employee {
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getId(){
        return this.id;
    }
}

const emp = new Employee(2,'siri',100000);

console.log(emp.getId());

// console.log(Employee.getId()); //gives error


class Employee2 {
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    static getId(){
        return this.id;
    }
}

//no need to instantiate

console.log(Employee2.getId());