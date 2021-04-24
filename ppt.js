var player1 = prompt("Você escolhe: \nPedra, Papel ou Tesoura?")

var array = ["Pedra", "Papel", "Tesoura"]
var bot = array[Math.floor(Math.random() * array.length)]

console.log("Player 1 jogou: " + player1)
console.log("Bot jogou: " + bot)

switch(player1){
    case "Pedra":
        switch(bot){
            case "Pedra":
                console.log("Empate")
            break;

            case "Papel":
                console.log("Bot Win")
            break;

            case "Tesoura":
                console.log("Player 1 Win")
            break;
        }
    break;

    case "Papel":
        switch(bot){
            case "Pedra":
                console.log("Player 1 Win")
            break;

            case "Papel":
                console.log("Empate")
            break;

            case "Tesoura":
                console.log("Bot Win")
            break;
        }
    break;

    case "Tesoura":
        switch(bot){
            case "Pedra":
                console.log("Bot Win")
            break;

            case "Papel":
                console.log("Player 1 Win")
            break;

            case "Tesoura":
                console.log("Empate")
            break;
        }
    break;
}