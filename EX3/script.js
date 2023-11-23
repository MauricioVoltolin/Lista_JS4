let tamanho = 20
let vetor = [tamanho]

function executar() {
    lerVetores(vetor)
    vetor.reverse()
    exibirVetor()
}

function lerVetores(vetor) {
    for(let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Digite o ${i+1}° número inteiro: `))
        vetor[i] = x
    }
    resultado.innerHTML = `<p>Vetor normal: <br> [${vetor}]<p>`
}

function exibirVetor() {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML += `<p>Vetor invertido: <br> [${vetor}]<p>`
}