function executar() {
    let vetor1 = []
    let vetor2 = []
    let operacoes = []
    let resultado = []
    let qtdCalculos = 20
    
    for (let i = 0; i < qtdCalculos; i++) {
        vetor1.push(Number(prompt("Digite o valor " + (i + 1) + " do primeiro vetor:")));
        
        let operacao = prompt("Digite a operação a ser realizada ( + - / * ):");
        while (!['+', '-', '*', '/'].includes(operacao)) {
            operacao = prompt("Operação inválida. Digite novamente: ");
        }
        operacoes.push(operacao);
        
        vetor2.push(Number(prompt("Digite o valor " + (i + 1) + " do segundo vetor:")));
        
        resultado.push(calcularOperacao(vetor1[i], vetor2[i], operacoes[i]));
    }
    
    let resultadoHTML = ``
    for (let i = 0; i < qtdCalculos; i++) {
        resultadoHTML += `(${i}+1) ${vetor1[i]} ${operacoes[i]} ${vetor2[i]} = ${resultado[i]} <br>`
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
}

function calcularOperacao(valor1, valor2, operacao) {
    switch (operacao) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            return valor1 / valor2;
    }
}