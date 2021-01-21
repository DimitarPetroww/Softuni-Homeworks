function solve(arr) {
    let result={}
    for (const current of arr) {
        let [company , employeeId]=current.split(" -> ")
            if(result[company]===undefined) result[company]=[]
            if(!result[company].includes(employeeId)) {
                result[company].push(employeeId)
            }
    }
    result=Object.entries(result).sort((x , y) => x[0].localeCompare(y[0]))
    result.forEach(x => {
        console.log(x[0]);
        for (const employeeId of x[1]) {
            console.log(`-- ${employeeId}`)
        }
    })
}
