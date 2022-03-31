let prevNumber = '';
let calculationOperator = '';
let currentNumber ='0' ;

let calculatorScreen = document.getElementById('hasil-input');

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
    if(currentNumber === '0') {
       currentNumber = number;
    }else {
        currentNumber += number;
    };
};

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

numbers.forEach((number) => {
    number.addEventListener("click", (r) => {
        inputNumber(r.target.innerText);
        updateScreen(currentNumber);
    });
});

const inputOperator = (operator) =>{
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0'
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.innerText);
       
    });
});

const hitung = document.querySelector('.hitung');

hitung.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

const calculate = () => {
    let result = '';
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result =parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "x":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
        
    }
    currentNumber = result;
    calculationOperator = '';
};

const clearBtn = document.querySelector('.clear-all');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

const decimal = document.querySelector('.desimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.innerText);
    updateScreen(currentNumber);
});

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
};

const perc = document.querySelector('.persen');

const inputPerc = (value) => {
   if(currentNumber.includes("%")){
       return;
     }
     currentNumber += value;
     return value = parseFloat(currentNumber) / 100;
}

perc.addEventListener('click', (r) => {
    inputPerc(r.target.innerText);
    updateScreen(currentNumber);
});
