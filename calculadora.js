alert("Calculadora")
var primeiro = Number(prompt("Digite aqui o primeiro número que você deseja:"))
var operadores = Number(prompt("1- Somar \n2- Subtrair \n3- Multiplicar \n4- Dividir \n5- Porcentagem"))

switch(operadores){
    case 1:
        var segundo = Number(prompt("Digite aqui o segundo número que você deseja:"))
        alert("O valor é: " + (primeiro + segundo))
    break;

    case 2:
        var segundo = Number(prompt("Digite aqui o segundo número que você deseja:"))
        alert("O valor é: " + (primeiro - segundo))
    break;

    case 3:
        var segundo = Number(prompt("Digite aqui o segundo número que você deseja:"))
        alert("O valor é: " + (primeiro * segundo))
    break;

    case 4:
        var segundo = Number(prompt("Digite aqui o segundo número que você deseja:"))
        alert("O valor é: "+ (primeiro / segundo))
    break;

    case 5:
        var porcentagemN = Number(prompt("Insira a porcentagem a ser aplicada"))

        alert("O valor é " + (primeiro*porcentagemN)/100)
    break;

    default:
        alert("Operador não encontrado")
    break;
}