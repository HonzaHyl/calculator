let display_value = ""

const display_text = document.querySelector("#display-text")

const container = document.querySelector(".button-container");
const buttons = container.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display_value = display_value+button.id
        display_text.textContent = display_value;
    });
});



function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(num1, num2, operation){
    if (operation == "+"){
        return add(num1, num2)

    } else if (operation == "-"){
        return substract(num1, num2)

    } else if (operation == "*"){
        return multiply(num1, num2)

    } else if (operation == "/"){
        return divide(num1, num2)
    }
}


let num1;
let num2;
let operation;
