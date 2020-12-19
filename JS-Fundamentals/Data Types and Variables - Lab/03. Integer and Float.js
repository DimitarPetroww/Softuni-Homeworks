function solve(...arr) {
    let res=arr.reduce((a , b)=> a + b , 0)
    res += res % 1 === 0 ? " - Integer" : " - Float"
    console.log(res);
}
