var contas = [
    {
        nome: "Teste",
        senha: "000",
        saldo: 1000,
        idadeC: 20,
    },
]

alert("Bem vindo ao Banco TchurusBangu TudusBagos")

apresentacao()

function apresentacao() {
    var apresentacao = Number(prompt("Qual serviço você deseja acessar? \n\n1- Criar uma nova conta \n2- Fazer login \n3- Fechar"))

    switch (apresentacao) {
        case 1:
            novaConta()
            break;

        case 2:
            login()
            break;

        case 3:
            break;

        default:
            alert("Serviço não encontrado!")
            break;
    }
}

function novaConta() { //MP 1
    var idade = Number(prompt("Insira sua idade:"))

    if (idade >= 18 && idade <= 110) {
        var novaConta = {
            nome: prompt("Insira seu nome:"),
            senha: prompt("Insira sua senha:"),
            saldo: 0,
            idadeC: idade,
        }
        contas.push(novaConta)

        alert("Conta criada com sucesso!")
        apresentacao()
    } else {
        console.log("Idade não permitida")
        apresentacao()
    }
}

function login() {
    var flag = false;
    var nomeL = prompt("Digite seu nome para Login:");

    for (i = 0; i < contas.length && flag === false; i++) {
        if (nomeL == contas[i].nome) {

            var senhaL = prompt("Digite sua senha para Login:")

            if (senhaL == contas[i].senha) {
                flag = true;
                menu()

            } else {
                alert("Senha incorreta!")
            }

            if (flag === false) {

                senhaL = prompt("Digite sua senha para Login:")
                if (senhaL == contas[i].senha) {
                    flag = true;
                    menu()

                } else {
                    alert("Senha incorreta!")
                    apresentacao()
                }
            }
        }
    }

    if (flag == false) {
        alert("Usuário não encontrado!")
        apresentacao()
    }

    function menu() {
        var opcao = Number(prompt("Serviços: \n\n1- Depositar \n2- Sacar \n3- Transferência \n4- Consultar seu saldo atual \n5- Ver informações da conta \n6- Fechar"))

        switch (opcao) {
            case 1: //Depositar
                deposito()
                break;

            case 2: //Sacar
                saque()
                break;

            case 3: //Transferir
                transferir()
                break;

            case 4: //Consultar saldo
                alert("Seu saldo é de R$" + contas[i].saldo)
                menu()
                break;

            case 5: //Informações da sua Conta
                console.log(contas[i])
                menu()
                break;

            case 6: //Sair
                apresentacao()
                break;

            case 999:
                console.log(contas)
                menu()
                break;

            default:
                alert("Informações não encontradas!")
                apresentacao()
                break;
        }

        function deposito() {
            var deposito = parseFloat(prompt("Insira o valor do depósito"))

            if (deposito > 0) {
                contas[i].saldo = contas[i].saldo + deposito
                alert("Depósito efetuado com sucesso!")

                menu()
            } else {
                alert("Valor indisponível!")
                menu()
            }
        }

        function saque() {
            var saque = parseFloat(prompt("Insira o valor que você deseja sacar"))

            if (saque <= contas[i].saldo) {
                contas[i].saldo = contas[i].saldo - saque
                alert("Saque efetuado com sucesso!")

                menu()
            } else {
                alert("Valor indisponível!")

                menu()
            }
        }

        function transferir() {
            alert("Para garantirmos a sua segurança, coloque seu nome novamente para concluir esta ação:")
            var flag = false
            var nomeT = prompt("Insira o nome da sua conta:")

            for (var i = 0; i < contas.length; i++) {
                if (nomeT == contas[i].nome) {

                    alert("Para garantirmos a sua segurança, coloque sua senha novamente para concluir esta ação:")
                    var senhaT = prompt("Insira a sua senha: ")

                    if (senhaT == contas[i].senha) {
                        alert("Acesso Permitido!")

                        var nome = prompt("Insira o nome da conta destino")
                        var flag = false

                        for (var j = 0; j < contas.length && flag == false; j++) {
                            if (nome == contas[j].nome) {

                                var valor = parseFloat(prompt("Insira o valor da transferencia"))

                                if (valor <= contas[i].saldo) {
                                    contas[i].saldo = contas[i].saldo - valor
                                    contas[j].saldo = contas[j].saldo + valor

                                    flag = true
                                } else {
                                    alert("Saldo insuficiente!")
                                    menu()
                                }

                                if (flag == true) {
                                    alert("Transferência concluída!")
                                    menu()
                                } else {
                                    alert("Conta não encontrada!")
                                    menu()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}