let valorDisplay = '';

function apareceNoDisplay(value) {
    valorDisplay += value;
    document.getElementById('display').value = valorDisplay;
}

function limparDisplay() {
    valorDisplay = '';
    document.getElementById('display').value = valorDisplay;
}

function calcularResultado() {
    try {
        valorDisplay = eval(valorDisplay);
        document.getElementById('display').value = valorDisplay;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function raizQuadrada() {
    valorDisplay = Math.sqrt(eval(valorDisplay));
    document.getElementById('display').value = valorDisplay;
}

function potencia() {
    valorDisplay = Math.pow(eval(valorDisplay), 2);
    document.getElementById('display').value = valorDisplay;
}