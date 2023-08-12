const calcBtn = document.querySelectorAll("button");


calcBtn.forEach((operand) => {
    operand.addEventListener("click", ()=>{
        calculation(operand)
        add()
        subtract()
        multiply()
        divide()
    })
})

const add = (operator) => {
    
}
const subtract = (operator) => {
    
}
const multiply = (operator) => {
    
}
const divide = (operator) => {
    
}

const calculation = (value) => {
    console.log(value.value)
}