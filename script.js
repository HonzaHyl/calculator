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
