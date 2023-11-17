function calcularSomatorio() {
    const numeroInput = document.getElementById('numero');
    const resultadoElement = document.getElementById('resultado');
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
        const somatorio = somatorioDivisiveis3ou5(numero);
        resultadoElement.textContent = `O somatório é: ${somatorio}`;
    } else {
        resultadoElement.textContent = 'Por favor, insira um número válido.';
    }
}

function somatorioDivisiveis3ou5(numero) {
    let somatorio = 0;

    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }
   
    return somatorio;
}