function solve(arr) {
    class Employee {
        constructor (name , length) {
            this.name=name
            this.length=length
        }
    }
    let employees=[]
    arr.forEach((x) => {
        employees.push(new Employee(x , x.length))
    })
    for(let employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.length}`);
    }
}
