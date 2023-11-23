/*Crie  um  programa  que  leia  um  vetor  de  10  elementos  reais,  calcule  e  exiba  a  média 
aritmética destes elementos.*/
function executar() {
    let vetor = []
    tamanho = 10
    lerVetores(vetor)
    
    let madia = calcularMedia(vetor)

    document.getElementById("resultado").innerHTML = `A média dos valores inseridos é de: ${media}`
}

function lerVetores(vetor) {
    for(let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Digite o ${i+1}° número real: `))
        vetor[i] = x
    }
}

function calcularMedia(vetor) {
    let soma = 0
    for(let i = 0; i < tamanho; i++) {
        soma += vetor[i]
    }
    
    media = soma/tamanho
    return media
}