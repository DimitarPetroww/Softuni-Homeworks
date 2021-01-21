function solve(arr) {
    let obj = {}
    arr.splice(arr.indexOf("Ave Cesar"), arr.length)
    for (const event of arr) {
        if (event.includes(" vs ")) {
            let [gladiator1, gladiator2] = event.split(" vs ")
            if (obj.hasOwnProperty(gladiator1) && obj.hasOwnProperty(gladiator2)) {
                if (Object.entries(obj[gladiator1]).some(x => Object.entries(obj[gladiator2]).some(y => y.includes(x[0])))) {
                    let sum1 = 0
                    for (const currentValue1 of Object.values(obj[gladiator1])) {
                        sum1 += currentValue1
                    }
                    let sum2 = 0
                    for (const currentValue2 of Object.values(obj[gladiator2])) {
                        sum2 += currentValue2
                    }
                    if (sum1 > sum2) {
                        delete obj[gladiator2]
                    } else {
                        delete obj[gladiator1]
                    }
                }
            }
        } else {
            let [gladiator, technique, skill] = event.split(" -> ")
            skill = Number(skill)
            if (obj.hasOwnProperty(gladiator)) {
                if (obj[gladiator].hasOwnProperty(technique)) {
                    if (obj[gladiator][technique] < skill) {
                        obj[gladiator][technique] = skill
                    }
                } else {
                    obj[gladiator][technique] = skill
                }
            } else {
                obj[gladiator] = { [technique]: skill }
            }
        }
    }
    function sum (x) {
        let sum=0
        for (const value of Object.values(x)) {
            sum+=value           
        }
        return sum
    }
    obj=Object.entries(obj).sort((a,b) => {
        if(sum(a[1]) - sum(b[1]) !== 0 ) {
            return sum(b[1]) - sum(a[1])
        }
        return a[0].localeCompare(b[0])
    }) 

    obj.forEach(x => {
        console.log(`${x[0]}: ${sum(x[1])} skill`)
        let items=Object.entries(x[1]).sort((a , b)=> {
            if(a[1] - b[1] !==0) {
                return b[1] - a[1]
            }
            return a[0].localeCompare(b[0])
        })
        items.forEach(x=> {
            console.log(`- ${x[0]} <!> ${x[1]}`)
        }) 
    })
}
