let currentNumber = [];
let firstNumber;
let secondNumber;
let operation;
let equation;
//Handle displaying clicked numbers on calculator display
const handleClick = val => {
    if(!firstNumber){
    currentNumber.push(val);
    document.getElementById("display").value = currentNumber.join('');
    }else{
        currentNumber.push(val);
        document.getElementById("display").value = currentNumber.join('');
    }
}
//handle choosing the operation and inputting the second number to apply arithmetic to.
const handleOp = op => {
    operation = op;
    firstNumber = currentNumber.join('');
    currentNumber = [];
}
//handle displaying the results of the equation on the calculator.
const handleEquals = () => {
    secondNumber = currentNumber.join('');
    if(operation === '+'){
        document.getElementById('display').value = Number(firstNumber) + Number(secondNumber);
    }else if(operation === '-'){
        document.getElementById('display').value = Number(firstNumber) - Number(secondNumber);
    }else if(operation === '*'){
        document.getElementById('display').value = Number(firstNumber) * Number(secondNumber);
    }else{
        document.getElementById('display').value = Number(firstNumber) / Number(secondNumber);
    }
}
//handle resetting the values in the calculator
const handleClear = () => {
    document.getElementById("display").value = 0;
    currentNumber = [];
    firstNumber = undefined;
    secondNumber = undefined;
    operation = undefined;
}
//handle deleting the last input applied to the calculator
const handleBackspace = () => {
    currentNumber.pop();
    document.getElementById('display').value = currentNumber.join('');
    if(currentNumber.length === 0) {
        document.getElementById('display').value = 0;
    }
}



