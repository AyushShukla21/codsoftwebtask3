let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

let currentInput = '';
let operator = '';
let firstValue = '';
let secondValue = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.value;

        if (value >= '0' && value <= '9' || value === '.') {
            currentInput += value;
            display.innerText = currentInput;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            firstValue = currentInput;
            operator = value;
            currentInput = '';
        } else if (value === '=') {
            secondValue = currentInput;
            currentInput = evaluateExpression(firstValue, operator, secondValue);
            display.innerText = currentInput;
        }
        else if(value === 'AC'){
            currentInput=" ";
            display.innerText = currentInput;
        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        }
    });
});

function evaluateExpression(firstValue, operator, secondValue) {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
    }
    return result;
}