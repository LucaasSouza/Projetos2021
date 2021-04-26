alert("ATENÇÃO: Jogue com o console do seu navegador aberto para ver informações adicionais!")

var escolha = Number(prompt("Qual modo de jogo você deseja jogar? \n1- Sem bot   2- Com bot"))

switch (escolha) {
	case 1://Sem Bot
		var rodadas = Number(prompt("Quantas rodadas você deseja jogar?"))
		var contador = 0 //Limita as rodadas que serão geradas

		var listaP1 = [] //Lista dos P1(players 1)

		alert("Bem vindos ao 'Akinator do Paraguai'")
		alert("O jogo é o seguinte \nO jogador 1 tem que advinhar o número que o jogador 2 digitou, simplismente isso. \nEntão vamos começar?")

		while (contador < rodadas) {

			var player1 = {
				jogador1: prompt("Jogador 1, digite aqui seu nome:"), //Nome do P1
				tentativas: 0,
			}
			alert("O nome do(a) Jogador 1 é: " + player1.jogador1)

			var jogador2 = prompt("Jogador 2, digite aqui seu nome:")
			alert("O nome do(a) Jogador 2 é: " + jogador2)

			alert(player1.jogador1 + ", feche seus olhos :)")

			var pensei = Number(prompt(jogador2 + ", escreva um número para o(a) " + player1.jogador1 + " tentar adivinhar."))
			var resposta = Number(prompt(player1.jogador1 + ", agora é sua vez. Escreva aqui sua resposta:"))

			var i = 0
			while (resposta != pensei) {
				alert("Você errou!")
				if (resposta > pensei) {
					alert(`O número digitado pelo(a) ${jogador2} é menor`)
				} else {
					alert(`O número digitado pelo(a) ${jogador2} é maior`)
				}

				var resposta = Number(prompt(player1.jogador1 + ", agora é sua vez. Escreva aqui sua resposta:"))

				i++
				player1.tentativas++
			}

			if (resposta == pensei) {
				alert("Acertou!")
			}

			listaP1.push(player1)
			console.log("O número de jogadas erradas do(a) " + player1.jogador1 + " foram: " + i)

			alert("Fim da rodada")
			contador++
		}

		for (var a = 0; a < listaP1.length; a++) {
			for (var b = a + 1; b < listaP1.length; b++) {
				if (listaP1[a].tentativas > listaP1[b].tentativas) {
					aux = listaP1[a]
					listaP1[a] = listaP1[b]
					listaP1[b] = aux
				}
			}
		}

		console.log("Lista Geral")
		console.log(listaP1)

		if (rodadas == 2) {
			console.log("Ranking:")
			console.log("O primeiro lugar é do(a): " + listaP1[0].jogador1)
			console.log("O terceiro lugar é do(a): " + listaP1[1].jogador1)
		}

		if (rodadas >= 3) {
			console.log("Ranking:")
			console.log("O primeiro lugar é do(a): " + listaP1[0].jogador1)
			console.log("O segundo lugar é do(a): " + listaP1[1].jogador1)
			console.log("O terceiro lugar é do(a): " + listaP1[2].jogador1)
		}
	break;

	case 2://Com Bot
		var rodadas = Number(prompt("Quantas rodadas você deseja jogar?"))
		var contador = 0 //Limita as rodadas que serão geradas

		var listaP1 = [] //Lista dos P1(players 1)

		alert("Bem vindos ao 'Akinator do Paraguai'")
		alert("O jogo é o seguinte: \nO jogador 1 tem que advinhar o número que o bot gerou, simplismente isso.\nEntão vamos começar?")

		while (contador < rodadas) {
			var player1 = {
				jogador1: prompt("Jogador 1, digite aqui seu nome:"), //Nome do P1
				tentativas: 0,
			}

			alert("O nome do(a) Jogador 1 é: " + player1.jogador1)
			alert("Agora o bot irá gerar um número aleatório entre 0 e 100")

			var bot = Math.floor(Math.random() * 100)

			var resposta = Number(prompt(player1.jogador1 + ", escreva aqui sua resposta:"))

			var i = 0
			while (resposta != bot) {
				alert("Você errou!")
				if (resposta > bot) {
					alert(`O número digitado pelo(a) bot é menor`)
				} else {
					alert(`O número digitado pelo(a) bot é maior`)
				}

				var resposta = Number(prompt(player1.jogador1 + ", agora é sua vez. Escreva aqui sua resposta:"))

				i++
				player1.tentativas++
			}

			if (resposta == bot) {
				alert("Acertou!")
			}

			listaP1.push(player1)
			console.log(`O número de jogadas erradas do(a) ${player1.jogador1} foram: ${i}`)

			alert("Fim da rodada")
			contador++
		}

		for (var a = 0; a < listaP1.length; a++) {
			for (var b = a + 1; b < listaP1.length; b++) {
				if (listaP1[a].tentativas > listaP1[b].tentativas) {
					aux = listaP1[a]
					listaP1[a] = listaP1[b]
					listaP1[b] = aux
				}
			}
		}

		console.log("Lista Geral:")
		console.log(listaP1)

		if (rodadas == 2) {
			console.log("Ranking:")
			console.log("O primeiro lugar é do(a): " + listaP1[0].jogador1)
			console.log("O segundo lugar é do(a): " + listaP1[1].jogador1)
		}

		if (rodadas >= 3) {
			console.log("Ranking:")
			console.log("O primeiro lugar é do(a): " + listaP1[0].jogador1)
			console.log("O segundo lugar é do(a): " + listaP1[1].jogador1)
			console.log("O terceiro lugar é do(a): " + listaP1[2].jogador1)
		}
		break;
}