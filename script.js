const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const calcBtn = document.querySelectorAll("button")
const display = document.getElementById("calc-display")
const resultDisplay = document.getElementById("result-display")
const calculations = document.getElementById("calculations")

let numOne = [];
let numTwo = [];
let operators = [];
let result = [];
let operationsArray = []

let operatorNotClick = true;

operand.forEach((sum) => {
    sum.addEventListener("click", () => {
        if(operatorNotClick){
            numOne.push(+sum.value)
            operationsArray.push(+sum.value)
            calculations.innerText = operationsArray.join("")
        }else{
            numTwo.push(+sum.value)
            operationsArray.push(+sum.value)
            calculations.innerText = operationsArray.join("")
        }

        operator.forEach((op) => {
            op.addEventListener("click", () => {
                operatorNotClick = false
                operators.push(op.value)
                console.log(operators)
                console.log(operators[0])
                if(operators.length < 2){
                    operationsArray.push(operators[0])
                }
                calculations.innerText = operationsArray.join("")
                calc(operators[0])
            })
        
            
        })
        let num1 = numOne.join("")
        let num2 = numTwo.join("")

        function calc (hmm){
            if(+num1 > 0 && +num2 > 0){
                if(hmm === "+"){
                    result.push(+num1 + +num2)
                }else if(hmm === "-"){
                    result.push(+num1 - +num2)
                }else if(hmm === "x"){
                    result.push(+num1 * +num2)
                }else if(hmm === "/"){
                    result.push(+num1 / +num2)
                }
                resultDisplay.innerText = result[0]
            }
            console.log(operationsArray)
        } 
    })
})



