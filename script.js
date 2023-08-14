const operand = document.querySelectorAll(".operand");
const resultDisplay = document.getElementById("result-display")
const calculations = document.getElementById("calculations")
const equals = document.getElementById("equals")
const clear = document.getElementById("clear")
const back = document.getElementById("back")

let evalArray = []


const calc = (button) => {
    console.log(button.value)
    evalArray.push(button.value)
    calculations.innerText = evalArray.join("")
    
    
    equals.addEventListener("click", () => {
        calculations.innerText = ""
        let evalConnect = evalArray.join("")
        resultDisplay.innerText = eval(evalConnect)
    })

    clear.addEventListener("click", () => {
        evalArray.length = 0
        resultDisplay.innerText = ""
        calculations.innerText = ""
    })

}

back.addEventListener("click", () => {
    if (evalArray.length > 0) {
        evalArray.pop();
        calculations.innerText = evalArray.join("");
    }
});

operand.forEach((button) => {
    button.addEventListener(("click"), () => {
        calc(button)
       
    })
})




