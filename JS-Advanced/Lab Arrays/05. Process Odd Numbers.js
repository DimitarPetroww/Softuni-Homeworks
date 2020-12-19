function solve(arr) {
    console.log(arr.filter((x , i)=> {
        if(i % 2 !==0) {
            return x.toString()
        }
    }).reverse().map(x=>x*2).join(" "));
}
