const tamanho = 15
let vetor = []

function executar() {
    lerVetor()
    exibirVetor()
    alert(`A soma dos elementos é ${somaVetor()}`)
}

function lerVetor() {
    vetor = []
    for(let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Digite o ${i+1}° número inteiro: `))
        vetor.push(x)       
    }
}

function somaVetor() {
    let soma = 0
    for(let i = 0; i < tamanho; i++) {
        soma += vetor[i]
    }
    return soma
}

function exibirVetor() {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ''
    for(let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>Vetor[${i}] = ${vetor[i]}</p>`
    }
}