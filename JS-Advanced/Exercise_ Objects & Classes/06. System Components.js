function solve(arr) {
    Object.entries(arr.reduce((a , c)=> {
        let [system , comp , subC]=c.split(" | ")
        if(a[system]) {
            if(a[system][comp]) {
                a[system][comp].push(subC)
            }else {
                a[system][comp]=[subC]
            }
        }else {
            a[system]={[comp] : [subC]}
        }
        return a
    }, {}))
    .sort((x,y)=>Object.keys(y[1]).length - Object.keys(x[1]).length || x[0].localeCompare(y[0]))
    .forEach(x=> {
        console.log(x[0]);
        let components=Object.entries(x[1]).sort((x , y)=> y[1].length - x[1].length)
        components.forEach(x=> {
            console.log(`|||${x[0]}`);
            x[1].forEach(x=> {
                console.log(`||||||${x}`);
            })
        })
    })

}
