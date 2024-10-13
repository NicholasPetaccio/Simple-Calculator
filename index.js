let currentNumber = [];
let firstNumber;
let secondNumber;
let operation;
let result;
//Handle displaying clicked numbers on calculator display.
const handleClick = val => {
    //handle for case in which a user tries to input multiple decimal points.
    if(val === '.' && currentNumber.includes('.')){
        return;
    }
    //handle for when the first number has a value and requires a value for the second number.
    if(!firstNumber){
    currentNumber.push(val);
    document.getElementById("display").value = currentNumber.join('');
    }else{
        currentNumber.push(val);
        document.getElementById("display").value = currentNumber.join('');
    }
    //handle chaining previous results with further arithmetic.
    if(result){
        firstNumber = result;
        secondNumber = document.getElementById('display').value;
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
    //handle edge case if user tries to divide by 0
    if(operation === '/' && Number(firstNumber) === 0 || operation === '/' && Number(secondNumber) === 0){
        return document.getElementById('display').value = 'Err - Cannot divide by 0';
    }else{
    switch(operation) {
        case '+':
            document.getElementById('display').value = Number(firstNumber) + Number(secondNumber);
            break;
        case '-':
            document.getElementById('display').value = Number(firstNumber) - Number(secondNumber);
            break;
        case '*':
            document.getElementById('display').value = Number(firstNumber) * Number(secondNumber);
            break;
        case '/':
            document.getElementById('display').value = Number(firstNumber) / Number(secondNumber);
            break;
        default:
            document.getElementById('display').value = 'Err';
        }
    }
    result = document.getElementById('display').value;
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



