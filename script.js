const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const calcBtn = document.querySelectorAll("button")
const display = document.getElementById("calc-display")
const resultDisplay = document.getElementById("result-display")
const calculations = document.getElementById("calculations")
const equals = document.getElementById("equals")
const clear = document.getElementById("clear")
const back = document.getElementById("back")

let numOne = [];
let numTwo = [];
let operators = [];
let result = [];
let operationsArray = []
let evalArray = []

let operatorNotClick = true;
let itsNotOver = true;



const calc = (button) => {
    console.log(button.value)
    evalArray.push(button.value)
    calculations.innerText = evalArray.filter((x)=>x!=="=").join("")
    
    if(button.value === "="){
        calculations.innerText = ""
        let evalConnect = evalArray.slice(0,-1).join("")
        //console.log(eval(evalConnect))
        resultDisplay.innerText = eval(evalConnect)
    }
    if(button.value === "clear"){
        evalArray.length = 0
        resultDisplay.innerText = ""
        calculations.innerText = ""
    }
    /*if(button.value === "back"){
        evalArray.pop()
        console.log(evalArray.pop())
        //calculations.innerText = evalArray.pop().join("")
    }*/
}

operand.forEach((button) => {
    button.addEventListener(("click"), () => {
        calc(button)
    })
})




