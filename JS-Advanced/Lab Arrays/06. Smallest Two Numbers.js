function solve(arr) {
    console.log(arr.sort((a , b)=> a - b).splice(0,2).join(" "));
}
