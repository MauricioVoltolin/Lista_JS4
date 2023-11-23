function executar() {
    let vetor = [];

    lerVetores(vetor)

    let vetorResultado = separarParesImpares(vetor)

    alert("Elementos pares: " + vetorResultado['pares'] + "\nElementos ímpares: " + vetorResultado['impares']);
    alert(vetorResultado)
}

function lerVetores(vetor) {
    for(let i = 0; i < 10; i++) {
        vetor[i] = Number(prompt("Digite o " + (i+1) + "º número:"));
    }
}

function separarParesImpares(vetor) {
    let pares = [];
    let impares = [];
    
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] % 2 == 0) {
            pares.push(vetor[i]);
        } else {
            impares.push(vetor[i]);
        }
    }

    return {'pares':pares, 'impares':impares}
}