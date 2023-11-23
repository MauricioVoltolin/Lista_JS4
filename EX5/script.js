function executar() {
    let vetor = []
    tamanho = 24
    lerVetores(vetor)
    let min = Math.min.apply(null, vetor)
    let posMin = vetor.indexOf(Math.min.apply(null, vetor))

    let max = Math.max.apply(null, vetor)
    let posMax = vetor.indexOf(Math.max.apply(null, vetor))
    
    let madia = calcularMedia(vetor)

    document.getElementById("resultado").innerHTML = `Resultados obtidos:<br>`
    document.getElementById("resultado").innerHTML += `Maior: ${max}° (${posMax}h) | Menor: ${min}°  (${posMin}h) | Média: ${media}°`
}

function lerVetores(vetor) {
    for(let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Digite a temperatura em °C referente às ${i}h: `))
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