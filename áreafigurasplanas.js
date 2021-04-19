var repete = Number(prompt("Digite quantas figuras você irá calcular"))
var i = 0

while(i < repete){
    var escolha = Number(prompt("Digite o número da figura em que você deseja calcular a área:\n1- Quadrado \n2- Círculo \n3- Retângulo \n4- Trapézio \n5- Losango"))

    switch (escolha) {
        case 1:
            var lado = parseFloat(prompt("Insira o lado do quadrado"))

            console.log("A área do quadrado é:")
            console.log(lado * lado)
            break;

        case 2:
            var raio = parseFloat(prompt("Insira o raio do círculo"))
            var pi = 3.14

            console.log("A área do círculo é:")
            console.log(pi * (raio * raio))
            break;

        case 3:
            var base = parseFloat(prompt("Insira a base do retângulo"))
            var altura = parseFloat(prompt("Insira a altura do retângulo"))

            console.log("A área do retângulo é:")
            console.log(base * altura)
            break;

        case 4:
            var baseMa = parseFloat(prompt("Insira a base maior do trapézio"))
            var baseMe = parseFloat(prompt("Insira a base menor do trapézio"))
            var alturaT = parseFloat(prompt("Insira a altura do trapézio"))

            console.log("A área do trapézio é:")
            console.log(((baseMa + baseMe) * alturaT) / 2)
            break;

        case 5:
            var diagonalMa = parseFloat(prompt("Insira a diagonal maior do losango"))
            var diagonalMe = parseFloat(prompt("Insira a diagonal menor do losango"))

            console.log("A área do losango é:")
            console.log((diagonalMa * diagonalMe) / 2)
            break;

        default:
            alert("Opção não encontrada, tente novamente!")
            break;
    }

    i++
}