function solve(arr) {
  let x1=arr.shift()
  let y1=arr.shift()
  let x2=arr.shift()
  let y2=arr.shift()
  console.log(`{${x1}, ${y1}} to {0, 0} is ${checkValidity(x1 , y2 , 0 , 0)}`);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${checkValidity(x2 , y2 , 0 , 0)}`);
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkValidity(x1 , y1 , x2, y2)}`);
  function checkValidity(x1 , y1 , x2 , y2) {
      let value=Math.sqrt((x2 -x1) **2 + (y2 - y1)**2)
      if(Number.isInteger(value)) {
          return "valid"
      }else {
          return "invalid"
      }
  }
}
