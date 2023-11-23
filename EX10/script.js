let gabarito = ['A', 'B', 'C', 'D', 'E', 'E', 'D', 'C', 'B', 'A',
                'A', 'B', 'C', 'D', 'E', 'E', 'D', 'C', 'B', 'A',
                'A', 'C', 'D', 'A', 'B', 'C', 'E', 'E', 'D', 'E'];

let numeroAlunos = 2;

let respostasAlunos = [
    {numero: 1, respostas: ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E',
                            'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E',
                            'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E']},
    {numero: 2, respostas: ['E', 'D', 'C', 'B', 'A', 'E', 'D', 'C', 'B', 'A',
                            'E', 'D', 'C', 'B', 'A', 'E', 'D', 'C', 'B', 'A',
                            'E', 'D', 'C', 'B', 'A', 'E', 'D', 'C', 'B', 'A']}
];

function executar() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < numeroAlunos; i++) {
        let aluno = respostasAlunos[i];
        let acertos = 0;

        for (let j = 0; j < gabarito.length; j++) {
            if (aluno.respostas[j] === gabarito[j]) {
                acertos++;
            }
        }

        resultado.innerHTML += `Aluno ${aluno.numero}: ${acertos} acertos<br>`;
    }
}