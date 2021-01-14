function foo(arr) {
    let result = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let [systems, component, subC] = arr[i].split(" | ")
        if ((result.filter(x => x.name === systems)).length === 0) {
            obj = {
                name: systems,
                component: []
            }
            result.push(obj)
        }
        let sysIndex = result.findIndex(x => x.name === systems)
        if ((result[sysIndex].component.filter(x => x.name == component)).length === 0) {
            obj = {
                name: component,
                sub: []
            }
            result[sysIndex].component.push(obj)
        }
        let compIndex = result[sysIndex].component.findIndex(x => x.name === component)

        result[sysIndex].component[compIndex].sub.push(subC)
    }
    result.sort((a, b) => {
        if (a.component.length === b.component.length) {
            return a.name.localeCompare(b.name)
        }
        return b.component.length - a.component.length
    })
    result.forEach(x => {
        x.component.sort((a, b) => {

            return b.sub.length - a.sub.length

        })
    })
    result.forEach(x => {
        console.log(`${x.name}`);
        x.component.forEach(x1 => {
            console.log(`|||${x1.name}`);
            x1.sub.forEach(x2 =>
                console.log(`||||||${x2}`))
        })
    })
}
