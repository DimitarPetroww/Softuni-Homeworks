class Company {
    constructor() {
        this.departments = []
    }
    validate(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i] || arr[i] < 0) {
                return false
            }
        }
        return true
    }
    addEmployee(name, salary, position, department) {
        if (this.validate([name, salary, position, department])) {
            if (!this.departments[department]) {
                this.departments[department] = {}
            }
            this.departments[department][name] = [salary , position, department]
            return `New employee is hired. Name: ${name}. Position: ${position}`
        } else {
            throw new Error("Invalid input!")
        }
    }
    bestDepartment() {
        let best=Object.entries(this.departments).sort((a , b)=> {
            return Object.values(b[1])[0][0] - Object.values(a[1])[0][0]
        })[0]
        let avg=Object.values(best[1]).map(x=> x[0]).reduce((a , b)=> a + b,0) / Object.values(best[1]).length
        let employeets=[]
        Object.entries(best[1]).sort((a , b)=> {
            return b[1][0] - a[1][0] || a[0].localeCompare(b[0])
        }).forEach(x=> {
            employeets.push(`${x[0]} ${x[1][0]} ${x[1][1]}`)
        })
        return `Best Department is: ${best[0]}\nAverage salary: ${avg.toFixed(2)}\n${employeets.join("\n")}`
    }
}
