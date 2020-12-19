function solve(num) {
    let common=String(num).split("")[0]
    console.log(String(num).split("").every(x=> x ===common));
    console.log(String(num).split("").map(x=> Number(x)).reduce((a , c)=> a + c , 0));

}
