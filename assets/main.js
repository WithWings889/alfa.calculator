
document.querySelector('#operator-controls').addEventListener('click', (event) => {

    const label = document.querySelector('#result-label');
    const number1 = Number(document.getElementById("number-1").value);
    const number2 = Number(document.getElementById("number-2").value);

    let operator = event.target.dataset.operator;
    if (operator) {

        label.innerText = "Result is : " + count(number1, number2, operator);
        setTimeout(() => label.innerText = "", 5000);
    }

});

function count(number1, number2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }

    return result;
}