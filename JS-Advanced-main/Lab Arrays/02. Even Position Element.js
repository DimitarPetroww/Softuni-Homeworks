function solve(arr) {
    console.log(arr.reduce((a , c, i)=> {
        if(i % 2===0) {
            a+=`${c} `
        }
        return a
    }, ""));
}
