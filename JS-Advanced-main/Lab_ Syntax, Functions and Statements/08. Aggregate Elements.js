function solve(arr) {
    console.log(arr.reduce((a , v)=> a + v , 0));
    console.log(arr.reduce((a , c)=> a + 1 / c , 0));
    console.log(arr.reduce((a , p)=> a + p , ""));
}
