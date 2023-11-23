function executar() {
    let vetor = []
    tamanho = 20
    lerVetores(vetor)
    multiplicarValores(vetor)
}

function lerVetores(vetor) {
    for(let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Digite o ${i+1}° número inteiro: `))
        vetor[i] = x
    }
    resultado.innerHTML = `<p>Vetor normal: <br> [${vetor}]<p>`
}

function multiplicarValores(vetor) {
    for(let i = 0; i < tamanho; i++) {
        vetor[i] = vetor[i] * i
    }
    resultado.innerHTML += `<p>Vetor multiplicado: <br> [${vetor}]<p>`
}