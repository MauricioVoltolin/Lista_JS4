/*Crie um programa que some dois vetores de mesmo tamanho e armazene o resultado em
um terceiro vetor.*/
let tamanho = 5
let vetor1 = [tamanho]
let vetor2 = [tamanho]
let vetor3 = [tamanho]

function executar() {
    lerVetores()
    vetor3 = somaVetores(vetor1, vetor2)
    exibirVetor()
}

function lerVetores() {
    for(let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Digite o ${i+1}° número inteiro: `))
        vetor1[i] = x
    }

    for(let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Digite o ${i+1}° número inteiro: `))
        vetor2[i] = x
    }
}

function somaVetores(vetor1, vetor2) {
    if (vetor1.lenght == vetor2.lenght) {
        
        let vetor3 = []
        for(let i = 0; i < vetor1.length; i++) {
            vetor3[i] = vetor1[i] + vetor2[i]
        }
        return vetor3
    
    } else {
        alert(`ERRO - Vetores de tamanhos diferentes!`)
    }
}

function exibirVetor() {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `<p>[${vetor1}] + <br> [${vetor2}] = <br> [${vetor3}]<p>`
}