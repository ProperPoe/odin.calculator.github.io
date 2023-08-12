const calcBtn = document.querySelectorAll("button");


calcBtn.forEach((operand) => {
    operand.addEventListener("click", ()=>{
        calculation(operand)
    })
})

const calculation = (value) => {
    console.log(value.value)
}