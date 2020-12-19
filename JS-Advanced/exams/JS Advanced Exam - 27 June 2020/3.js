class VeterinaryClinic {
    constructor(clinicName, capacity) {
        Object.assign(this, { clinicName, capacity, clients: [], currentWorkload: 0, totalProfit: 0 })
    }
    newCustomer(ownerName, petName, kind, procedures) {
        if (this.capacity <= this.currentWorkload) {
            throw new Error("Sorry, we are not able to accept more patients!")
        }
        let found = this.clients.find(x => x[0]===ownerName)
        if (found && found[1].find(x=> x[petName]) && found[1].find(x=> x[petName])[petName].procedures.length > 0) {  
            throw new Error(`This pet is already registered under ${ ownerName } name! ${ petName } is on our lists, waiting for ${found[1].find(x=> x[petName])[petName].procedures.join(", ") }.`)
        } else {
            this.currentWorkload++
            if(found) {
                found[1].push({[petName]: {kind , procedures}})
            }else {
                this.clients.push([ownerName , [{[petName] :{kind , procedures}}]])
            }
            return `Welcome ${ petName }!`
        }
    }
    onLeaving(ownerName , petName) {
        let owner=this.clients.find(x=> x[0]===ownerName)
        if(!owner) {
            throw new Error("Sorry, there is no such client!")
        }
        let pet=owner[1].find(x=> x[petName])
        if(!pet || pet[petName].procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${ petName }!`)
        }
        this.totalProfit+= pet[petName].procedures.length * 500.00
        this.currentWorkload--
        pet[petName].procedures=[]
        return `Goodbye ${ petName }. Stay safe!`
    }
    toString() {
        let result= [
            `${ this.clinicName } is ${ Math.floor( this.currentWorkload / this.capacity * 100) }% busy today!`,
            `Total profit: ${ this.totalProfit.toFixed(2) }$` ,
        ]
        this.clients.sort((a , b)=> a[0].localeCompare(b[0])).forEach(x=> {
            let tokens=x[1].map(y=> Object.entries(y)).sort((a , b)=> a[0][0].localeCompare(b[0][0]))
            result.push(`${x[0]} with:\n${tokens.map(x=>`---${x[0][0]} - a ${x[0][1].kind.toLowerCase()} that needs: ${x[0][1].procedures.join(", ")}`).join("\n")}`)
        })
        return result.join("\n")
    }
}
