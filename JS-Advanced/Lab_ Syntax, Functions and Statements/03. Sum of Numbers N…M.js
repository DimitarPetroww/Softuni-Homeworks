function solve(...n) {
   n=n.map(Number)
   let arr=[]
   for(let i=n[0];i<=n[1];i++) {
        arr.push(i)
   }
   console.log(arr.reduce((a , c) => a + c , 0));
}
