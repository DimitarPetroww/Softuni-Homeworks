function subtract() {
    let firstNum=document.querySelector("#firstNumber").value
    let secondNum=document.querySelector("#secondNumber").value
    document.getElementById("result").textContent=Number(firstNum) - Number(secondNum)
}
