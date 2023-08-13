const nine = document.getElementById("nine")
const eight = document.getElementById("eight")
const seven = document.getElementById("seven")
const six = document.getElementById("six")
const five = document.getElementById("five")
const four = document.getElementById("four")
const three = document.getElementById("three")
const two = document.getElementById("two")
const one = document.getElementById("one")
const multiply = document.querySelector("multiply")
const minus = document.querySelector("minus")
const add = document.querySelector("add")
const equals = document.querySelector("equal")



const calc = (bum) => {
    let arr = []
    arr.push(bum)
    console.log(arr)
}

//console.log(arr)

nine.addEventListener("click", ()=>{
    calc(nine.value)
})
eight.addEventListener("click", ()=>{
    calc(eight.value)
})
seven.addEventListener("click", ()=>{
    calc(seven.value)
})
six.addEventListener("click", ()=>{
    calc(six.value)
})
five.addEventListener("click", ()=>{
    calc(five.value)
})
four.addEventListener("click", ()=>{
    calc(four.value)
})
three.addEventListener("click", ()=>{
    calc(three.value)
})
two.addEventListener("click", ()=>{
    calc(two.value)
    arr.push(two.value)
})
one.addEventListener("click", ()=>{
    calc(one.value)
    arr.push(one.value)
})




