function solve(array = []) {
   let result = []; 
   for(let index1 = 0; index1 <= array.length - 1; index1++) { 
       let currentNum = array[index1];
       let isItBiggest = false;
       for(let j = index1; j < array.length ; j++) { 
           

           if(currentNum <= array[j + 1]) { 
               isItBiggest = true;
               break;
           }
       }

       if(!isItBiggest) { 
           result.push(currentNum);
       }
   }
    console.log(result.join(' '));
}
