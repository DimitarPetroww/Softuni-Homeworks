function solve(num1 , num2 , operator) {
    const multiply = (x , y) => x * y
    const add=(x , y) => x + y
    const divide=(x , y) => x / y
    const subtract=(x , y) => x - y


    if(operator==="multiply") {
        return multiply(num1 , num2)
    }else if(operator==="divide") {
        return divide(num1 , num2)
    }else if(operator==="add") {
        return add(num1 , num2)
    }else if(operator==="subtract") {
        return subtract(num1 , num2)
    }
}
