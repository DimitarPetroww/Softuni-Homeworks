function solve() {
    let expression = document.getElementById("expressionOutput")
    let result = document.getElementById("resultOutput")
    let keys = document.querySelector(".keys")
    document.querySelector(".clear").addEventListener("click" , () => {
        expression.textContent=""
        result.textContent=""
    })
    keys.addEventListener("click", function (event) {
        let button = event.target.value
        switch (button) {
            case "+":
            case "-":
            case "*":
            case "/":
                expression.textContent += ` ${button} `
                break;
            case "=":
                let [leftOperand, operator, rightOperand] = expression.textContent.split(" ")
                if (rightOperand === "") {
                    result.textContent = "NaN"
                } else {
                    result.textContent = calculate(Number(leftOperand), operator, Number(rightOperand))
                }
                break;
            default:
                expression.textContent += button
        }
    })
    function calculate(operand1, operator, operand2) {
        switch (operator) {
            case "+":
                return operand1 + operand2
            case "-":
                return operand1 - operand2
            case "*":
                return operand1 * operand2
            case "/":
                return operand1 / operand2
        }
    }
}
