function calculateSum() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = num1 + num2;
    document.getElementById('result').innerHTML = 'Result: ' + sum;
}


function calculateMin() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let dif = num1 - num2;
    document.getElementById('result').innerHTML = 'Result: ' + dif;
}

function calculateMul() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let mul = num1 * num2;
    document.getElementById('result').innerHTML = 'Result: ' + mul;
}


function calculateDiv() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let div = num1 / num2;
    document.getElementById('result').innerHTML = 'Result: ' + div;
}