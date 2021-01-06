function solve(arr) {
    let filtered=arr.filter((el , idx) => arr.indexOf(el)===idx)
    console.log(filtered.join(" "));
}
