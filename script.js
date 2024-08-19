function add() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber + secondNumber;
  alert('The result is: ' + result);
}

function subtract() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber - secondNumber;
  alert('The result is: ' + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber * secondNumber;
  alert('The result is: ' + result);
}

function divide() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber / secondNumber;
  alert('The result is: ' + result);
}

function simpleInterest() {
  const firstNumber = parseFloat(prompt('Enter the principal amount (in RM):'));
  const secondNumber = parseFloat(
    prompt('Enter the rate of interest (in % per annum):')
  );
  const thirdNumber = parseFloat(
    prompt('Enter the duration of time (number of years):')
  );
  const result = (firstNumber * secondNumber * thirdNumber) / 100;
  const formattedResult = result.toFixed(2);
  alert('The result is: RM' + formattedResult);
}

function compoundInterest() {
  const firstNumber = parseFloat(prompt('Enter the principal amount (in RM):'));
  const secondNumber = parseFloat(
    prompt('Enter the rate of interest (in % per annum):')
  );
  const thirdNumber = parseFloat(
    prompt('Enter the duration of time (number of years):')
  );
  const result =
    firstNumber * (1 + secondNumber / 100) ** thirdNumber - firstNumber;
  const formattedResult = result.toFixed(2);
  alert('The result is: RM' + formattedResult);
}
