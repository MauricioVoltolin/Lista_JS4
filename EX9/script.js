function executar() {
    let lancamentos = 50
    let resultadoDado = []
    
    lerVetor(resultadoDado, lancamentos)
    let resultadoContagem = contarResultados(resultadoDado)

    let resultadoHTML = ``
    for (let i = 0; i < 6; i++) {
        let vezes = resultadoContagem[i]
        resultadoHTML += `${i+1}: ${vezes} (${(vezes/lancamentos)*100}%)<br>`
    }

    document.getElementById("resultado").innerHTML = resultadoHTML
}

function lerVetor(vetor, vezes) {
    for(let i = 0; i < vezes; i++) {
        let x = Number(prompt(`Digite o ${i+1}° resultado do dado: `))
        while (![1, 2, 3, 4, 5, 6].includes(x)) {
            alert("Por favor, insira um número entre 1 e 6.")
            x = Number(prompt(`Digite o ${i+1}° resultado do dado: `))
        }
        vetor[i] = x
    }
}

function contarResultados(arrayResultado) {
    let contagem = [0, 0, 0, 0, 0, 0]
    for (let i = 0; i < arrayResultado.length; i++) {
        let resultado = arrayResultado[i]
        switch(resultado) {
            case 1:
                contagem[0] += 1 
                break
            case 2:
                contagem[1] += 1  
                break
            case 3:
                contagem[2] += 1
                break
            case 4:
                contagem[3] += 1
                break
            case 5:
                contagem[4] += 1
                break
            case 6:
                contagem[5] += 1
                break
        }
    }

    return contagem
}