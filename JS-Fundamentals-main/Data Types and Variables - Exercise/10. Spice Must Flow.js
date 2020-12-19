function solve(n) {
    let days=0
    let spice=0
    while(n >=100) {
        spice+=n
        days++
        n-=10
        if(spice >26) {
            spice-=26
        }else {
            spice=0
        }
    }
    console.log(days);
    if(spice >26) {
        console.log(spice-26);
    }else {
        console.log(0);
    }
}
