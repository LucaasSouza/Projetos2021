var quantAlunos = Number(prompt("Insira a quantidade de alunos"))

var alunosAp = [] //Aprovados
var alunosRp = [] //Reprovados
var alunosPF = [] //Fizeram a prova final
var alunosPFA = [] //Passaram na prova final
var alunosPFR = [] //Reprovaram na prova final

var i = 0

while (i < quantAlunos) {
    var nomeAluno = prompt("Informe qual o nome do aluno!")

    alert("O nome do aluno escolhido é " + nomeAluno)

    var notaUnidade1 = Number(prompt("Informe a nota da 1° unidade"))
    var notaUnidade2 = Number(prompt("Informe a nota da 2° unidade"))

    const médiaMínima = 3
    const médiaEscolar = 7
    const notaMáxima = 10
    const mínimoProvaFinal = 5

    alunoMédiaFinal = (notaUnidade1 + notaUnidade2) / 2

    if (alunoMédiaFinal >= médiaEscolar) {
        alert("Sua média final é: " + alunoMédiaFinal)
        alert("Você foi aprovado por média (AM)!")

        alunosAp.push(nomeAluno)
    }

    if (alunoMédiaFinal > médiaMínima && alunoMédiaFinal < médiaEscolar) {
        alert("Sua média final é: " + alunoMédiaFinal)
        alert("Você foi reprovado (R)!")

        alunosRp.push(nomeAluno)
    }

    else if (alunoMédiaFinal <= médiaMínima) {
        alert("Sua média final é: " + alunoMédiaFinal)
        alert("Você não passou, mas por ter tirado uma nota acima da mínima terá direito à prova final!")
        var notaProvaFinal = Number(prompt("Informe a nota da Prova Final!"))

        alunosPF.push(nomeAluno)

        if (notaProvaFinal >= mínimoProvaFinal) {
            alert("Você foi aprovado por conceito (AC)!")

            alunosPFA.push(nomeAluno)
        }
        else {
            alert("Você foi reprovado por conceito (RC)!")

            alunosPFR.push(nomeAluno)
        }
    }

    i++
}

console.log("Lista de alunos aprovados:")
console.log(alunosAp)

console.log("Lista de alunos reprovados:")
console.log(alunosRp)

console.log("Porcentagem de alunos aprovados:")
console.log((alunosAp.length * 100) / quantAlunos + "%")

console.log("Porcentagem de alunos reprovados:")
console.log((alunosRp.length * 100) / quantAlunos + "%")

console.log("Lista de alunos que fizeram a prova final:")
console.log(alunosPF)

console.log("Porcentagem de alunos que fizeram a prova final e foram aprovados:")
console.log((alunosPFA.length * 100) / quantAlunos + "%")

console.log("Porcentagem de alunos que fizeram a prova final e foram reprovados:")
console.log((alunosPFR.length * 100) / quantAlunos + "%")