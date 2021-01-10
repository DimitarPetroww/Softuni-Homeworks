// let sum3Curry = (a) => (b) => (c) => {
//             let result = a + b + c;
//             return result;
//         }

//         let sum3b = sum3Curry(1)
//         let sum3c = sum3b(3)
//         let result = sum3c(5)

//         // console.log(result);
//         // console.log(sum3Curry(1)(2)(3));


// let pow = (y,x) => x ** y;
// let sqr = pow.bind(null, 2); 

// console.log(sqr(2));


// let value = (function () {
//     return 2 * 10 + 15 + 'pesho'
// })

// console.log(value());


function broken() {
    if(Math.random() < 0.3){
        throw new Error('Something is broken!');
    }
    
    return `yey`
}
const logger = (error) => console.warn(error);
try {
    console.log( broken() )
} catch (errror){
    logger(errror)
    console.log(`Something went wrong, we are sorry :(`);
}