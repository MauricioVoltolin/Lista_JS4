let cinema = [];
let fileiras = ['A', 'B', 'C', 'D'];

for (let i = 0; i < 4; i++) {
    cinema[i] = [];
    for (let j = 0; j < 20; j++) {
        cinema[i][j] = 0;
    }
}

function exibirLegendas() {
    let LegendasDiv = document.getElementById('legendas');
    LegendasDiv.innerHTML = '';
    
    let legendaVazia = document.createElement('div');
    legendaVazia.className = 'legenda';

    LegendasDiv.appendChild(legendaVazia);
    
    for (let i = 1; i <= 20; i++) {
        let legenda = document.createElement('div');
        legenda.className = 'legenda';
        legenda.innerText = i;
        LegendasDiv.appendChild(legenda);
    }
    
}

function exibirCinema() {
    let cinemaDiv = document.getElementById('cinema');
    cinemaDiv.innerHTML = '';
    
    for (let i = 0; i < 4; i++) {
        let fileiraDiv = document.createElement('div');
        fileiraDiv.className = 'fileira';
        
        let LegendasDiv = document.createElement('div');
        LegendasDiv.className = 'legenda';

        LegendasDiv.innerText = fileiras[i];
        fileiraDiv.appendChild(LegendasDiv);
        
        for (let j = 0; j < 20; j++) {
            let poltrona = document.createElement('div');
            poltrona.className = 'poltrona';
            
            if (cinema[i][j] === 1) {
                poltrona.classList.add('ocupada');
            }
            
            fileiraDiv.appendChild(poltrona);
        }
        
        cinemaDiv.appendChild(fileiraDiv);
    }
}

function comprarPoltrona() {
    let fileira = prompt("Informe a fileira (A, B, C, D):");
    let indiceFileira = fileiras.indexOf(fileira.toUpperCase());
    
    if (indiceFileira < 0 || indiceFileira > 3) {
        alert("Fileira inválida! Por favor, insira A, B, C ou D.");
        return;
    }

    let poltrona = prompt("Informe o número da poltrona (1-20):");
    let indicePoltrona = parseInt(poltrona) - 1;
    
    if (isNaN(indicePoltrona) || indicePoltrona < 0 || indicePoltrona > 19) {
        alert("Número de poltrona inválido! Por favor, insira um número inteiro entre 1 e 20.");
        return;
    }

    if (cinema[indiceFileira][indicePoltrona] === 0) {
        cinema[indiceFileira][indicePoltrona] = 1;
        alert("Poltrona comprada com sucesso!");
    } else {
        alert("Poltrona já está ocupada!");
    }

    exibirCinema();
    atualizarStatus();
}

function atualizarStatus() {
    let qtdOcupadas = 0;
    let qtdVazias = 0;
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 20; j++) {
            if (cinema[i][j] === 1) {
                qtdOcupadas++;
            } else {
                qtdVazias++;
            }
        }
    }
    
    document.getElementById('status').innerHTML = "Poltronas: " + qtdOcupadas + " ocupadas, " + qtdVazias + " vazias.";
}
exibirLegendas();
exibirCinema();
atualizarStatus();