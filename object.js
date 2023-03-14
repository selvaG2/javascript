// object creation using literal
var emp={
    id:21,
    name:"selva"
};

console.log(emp.id+" "+emp.name);

// object creation using new

var obj1 = new Object();
obj1.age=21;
obj1.number=1234567890;
obj1.salary=12,000;

console.log(obj1.age+" "+obj1.number+" "+obj1.salary);

// constructor

function std(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;
}

var e = new std(21,"selva",19);

console.log(e.id+" "+e.name+" "+e.age);

//test

class Person {
    constructor(name, age, gender, address) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    
    if (this.constructor === Person) {
    throw new Error("You Can`t create an instance for abstract class.");
    }
    }
    display() {
    throw new Error("Abstract class doesn`t have any implementation.");
    }
    }
    class Employee extends Person {
    constructor(name, age, gender, address, emp_code, department,designation, salary) {
    
    super(name, age, gender, address);
    this.emp_code = emp_code;
    this.department = department;
    this.designation = designation;
    this.salary = salary;
    }
    
    display() {
    document.getElementById("emp1").innerHTML = (e1.name + "-" +e1.age + "-" + e1.gender + "-" + e1.address + "-" + e1.emp_code + "-" +e1.department + "-" + e1.designation + "-" + e1.salary);}
    }
    // const e1 =new Person("Selva", 19, "male", "3n,gopal swamy kovilstreet", "emp1", "Human resourse", "HR", 120000);
    // console.log(e1.name);
    const e1 = new Employee("Selva", 19, "male", "3n,gopal swamy kovilstreet", "emp1", "Human resourse", "HR", 120000);
    e1.display();