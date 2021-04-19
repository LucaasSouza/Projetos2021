var telinha = alert("Bem vindo ao RPG Em Busca da Chave de Trunko")
var menuRPG = Number(prompt("Você está pronto para embarcar nessa aventura? \n1- Sim \n2- Não \n3- Fechar"))
var i = 1 //Pega informação do Vetor

var nar = "Narrador: "
var vozTorre = "*Voz Misteriosa*: "
var barT = "Bartender: "
var mago = "Mago: "

var personagemLista = [
    {}
]

switch(menuRPG){
    case 1: //Inicia o game
        alert("Deixe eu me apresentar, muito prazer, eu sou o Narrador, e irei narrar seus feitos no decorrer da história.")

        alert("Breve História: \nHá alguns anos atrás, houve uma guerra que durou 100 anos entre o nosso Reino, O Reino de Rēgnö, e o reino inimigo, O Reino de Malämykø. \nNo final, nosso reino foi o vencedor dessa disputa, mas o preço foi caro, todos os nossos cavaleiros morreram ... Ou pelo menos quase todos, pois você está aqui né?")
        alert("O problema é que a alma desses guerreiros estão enjauladas na Gaiola de Trunko, dessa forma, nossos guerreiros nunca poderam ter a paz que eles tanto desejam.\nSomente uma chave especial pode abrí-lo, e você foi requisitado por um 'cidadão comum' para procurar essa chave.")
        
        alert("Bom ... Então vamos nessa!")
        alert("Inicialmente, vamos criar seu personagem.")

        var personagem = {
            nomePerso: prompt("Insira aqui o nome do seu personagem"),
            poder: prompt("Digite abaixo um elemento que você irá controlar: \nFogo \nÁgua \nTerra \nAr"),
            arma: prompt("Digite abaixo a arma que você irá usar: \nEspada \nArco e Flecha \nCajado")
        }
        personagemLista.push(personagem)
        console.log(personagemLista[i])

        alert(nar + "Nossa história começa numa taberna. \nO bartender se aproxima de você e fala")
        alert(barT + "Vejo que você é o único cavaleiro que sobrou em nosso reino")
        alert(barT + "Você tem interesse em fazer um serviço pra mim?")

        var resposta1 = prompt("Digite sua resposta: \nSim \nNão")
        
        alert(`${personagemLista[i].nomePerso}: ${resposta1}`)

        switch(resposta1){
            case "Sim":
                alert(barT + "Ótimo, seu trabalho é ir atrás da chave de Trunko") //Trunko é Bau em Esperanto
                alert(`${personagemLista[i].nomePerso}: Por onde eu devo começar ?`)
                alert(barT + "Eu sugiro você ir para a torre do grande mago, lá ele pode ajudar você.")

                alert(nar + "Você sai da Taberna e começa a andar em direção a torre, quando no meio do caminho aparece um mero ladrão.")
                var escolha1 = prompt(nar + "Você deseja batalhar ou tentar fugir? \nBatalhar \nFugir")

                switch(escolha1){
                    case "Batalhar": //Escolha Batalhar
                        alert(`Você saca sua/seu ${personagemLista[i].arma} e ataca o ladrão`)
                        alert("Com um só hit, você mata o ladrão e continua seu caminho.")

                        alert(nar + "Chegando na torre, vemos que a única forma de entrar é decifrando um enigma")
                        alert(vozTorre + "Para nesta torre você entrar, um enigma terá que decifrar")
                        alert(vozTorre + "O enigma é ... Que animal anda pela manhã sobre quatro patas, a tarde sobre duas e a noite sobre três?")

                        var respTorre = prompt(vozTorre + "Responda com uma só palavra")

                        alert(`${personagemLista[i].nomePerso} fala que a resposta é ${respTorre}`)

                        while(respTorre != "Homem"){
                                alert(vozTorre + "Resposta incorreta, tente novamente!")

                                var respTorre = prompt(vozTorre + "Responda com uma só palavra")
                                alert(`${personagemLista[i].nomePerso} fala que a resposta é ${respTorre}`)
                            }

                        if(respTorre == "Homem"){
                                alert(vozTorre + "Sua resposta está correta, pode entrar")
                                alert(nar + "A porta se abre, e você caminha em direção ao topo da torre.")

                                alert(mago + "Deixe eu adivinhar, você veio em busca da chave")
                                alert(personagemLista[i].nomePerso + "Como você sabe?")
                                alert(mago + "Eu sou um mago, sei de quase tudo, e sei que, você irá ficar meio triste agora")
                                alert(personagemLista[i].nomePerso + "Por que?")
                                alert(mago + "Porque a chave foi dividida em duas partes, por um mago malígno chamado Vroti. \nVocê pode escolher procurar um dos pedaços na taberna do centro, ou com o Rei, ou na caverna do Dragão de ossos, ou no poço de Cnosi")

                                var escolha2 = prompt("Você escolhe ir ver o(a) ...\nRei \nTaberna \nCaverna \nPoço")

                                switch(escolha2){
                                    case "Rei":
                                        alert(nar + "Você chega no castelo do rei, mas os soldados te param. Eles perguntam")
                                        alert("Soldados: Para neste castelo adentrar, um enigma deve decifrar")
                                        alert(personagemLista[i].nomePerso + "É sério? Acabei de resolver um agora pouco")
                                        alert("Soldados: Numa noite chuvosa, diga-me uma resposta clara, fale uma coisa que cai em pé, e corre deitada")

                                        var resposta2 = prompt("Digite a sua resposta")
                                        
                                        while(resposta2 != "Chuva"){
                                            alert("Soldados: Resposta incorreta, tente novamente!")

                                            var resposta2 = prompt("Digite a sua resposta")
                                        }
                                        if(resposta2 == "Chuva"){
                                            alert("Soldados: Resposta correta, pode entrar nobre cavaleiro")

                                            alert(`${nar} Você, meu caro ${personagemLista[i].nomePerso} agora entra no castelo para falar com o Rei`)
                                            alert("Rei: O que veio fazer aqui?")

                                            var resposta3 = prompt("Escolha o que quer dizer \nVim à procura da chave \nVim ver como o senhor está")

                                            switch(resposta3){
                                                case "Vim à procura da chave":
                                                    alert("Rei: Hahaha, você veio ao lugar errado, a chave não está aqui")
                                                    alert(`${personagemLista[i].nomePerso} Eu não acredito nisso, o grande mago me falou que estaria aqui`)
                                                    alert("Rei: Você se opõe ao seu Rei?")

                                                    var resposta4 = prompt(nar + "Digite sua resposta, Sim ou Não?")

                                                    switch(resposta4){
                                                        case "Sim":
                                                            alert("Rei: Você será sentenciado à morte")
                                                            alert("Fim de Jogo")
                                                        break;

                                                        case "Não":
                                                            alert("Rei: Pois então continue sua jornada, ela NÃO ESTÁ AQUI")
                                                            var escolha2 = prompt("Você escolhe ir ver o(a) ...\nRei \nTaberna \nCaverna \nPoço")
                                                        break;
                                                    }
                                                break;

                                                case "Vim ver como o senhor está":
                                                    alert("Rei: Não te devo satisfações, vá embora")
                                                    var escolha2 = prompt("Você escolhe ir ver o(a) ...\nRei \nTaberna \nCaverna \nPoço")
                                                break;
                                            }
                                        }
                                    break;

                                    case "Taberna": // Aqui está um dos pedaços
                                        alert(`${nar} Você volta pelo mesmo local de onde matou o ladrão, mas se sentiu arrependido por tê-lo matado \nVocê pensa que tinha outras formas de lidar com aquela situação ... Mas continua seu caminho`)
                                        alert(`${nar} Chegando no bar, você já chega dizendo`)

                                        alert(`${personagemLista[i].nomePerso} VOCÊ ME FEZ ANDAR ISSO TUDO, MAS NÃO ME DISSE QUE TINHA UMA DAS CHAVES`)
                                        alert(`${barT} Mas ... A chave ... não está ... comigo`)

                                        var escolha3 = prompt("Narrador: Você deseja: \nQuestionar \nNão questionar")

                                        switch(escolha3){
                                            case "Questionar":
                                                alert(`${personagemLista[i].nomePerso} NÃO MINTA PRA MIM, EU SEI QUE ESTÁ COM VOCÊ`)
                                                alert(`${barT} Eu juro que ...`)
                                                alert(`${barT} Tá, ela está comigo, mas para tê-la, terá que responder uma pergunta`)

                                                alert(`${personagemLista[i].nomePerso} Caraca, esse povo daqui curte uma charada`)

                                                alert(`${barT} Numa quarta um caçador foi caçar, numa quinta ele matou um coelho, e numa cesta ele trouxe o animal para casa`)
                                                alert(`${barT}Em qual dia ele trouxe o animal para casa?`)
                                                
                                                var resposta5 = prompt("Responda sabiamente")

                                                while(resposta5 != "Quinta"){
                                                    alert(`${barT}Que idiota, VOCÊ ERROU`)
                                                }
                                        }
                                    break;

                                    case "Caverna":
                                    
                                    break;

                                    case "Poço": // Aqui está um dos pedaços
                                    
                                    break;
                                }
                            }

                    break;

                    case "Fugir": //Escolha Fugir
                        alert(nar + "Você com medo tenta fugir. Sua fuga dá certo, porém, você acaba retornando à Taberna.")
                        alert("O bartender vê que você estava tremendo de medo. Todos presentes no local começaram a rir de você.")
                        alert("Você acaba desistindo de continuar sua jornada.")

                        alert("Fim de Jogo")
                    break;
                }

            break;

            case "Não":
                alert(barT + "Ah, tá bom então, babaca!")
                alert("Fim de Jogo")
            break;
        }
    break;
    
    case 2: //O jogador não está pronto
        alert(nar + "Se você sente que não está pronto, tudo bem, estarei aqui quando você se sentir preparado.")
    break;

    case 3: //Fecha o jogo
    break;
}