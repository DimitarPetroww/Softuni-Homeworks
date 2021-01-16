function solve(arr) {
    let classroom=new Map()
    for (const event of arr) {
        let [student , ...grades]=event.split(" ")
        if(classroom.has(student)) {
            classroom.set(student , classroom.get(student).concat(grades))
        }else {
            classroom.set(student , grades)
        }
    }
    let result=Array.from(classroom).sort((a , b) =>{
        let sumOfA=0
        for(let i=0;i<a[1].length;i++) {
            sumOfA+=Number(a[1][i])
        }
        let sumOfB=0
        for(let i=0;i<b[1].length;i++) {
            sumOfB+=Number(b[1][i])
        }
        return (sumOfA / a[1].length) - (sumOfB / b[1].length)
    })
    for (const student of result) {
        console.log(`${student[0]}: ${student[1].join(", ")}`);
    }
}
