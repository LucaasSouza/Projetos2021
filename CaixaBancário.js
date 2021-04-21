var contas = [
    {
        nome: "Teste",
        senha: "000",
        saldo: 1000,
        idadeC: 20,
    }
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
            close()
        break;

        default:
            alert("Serviço não encontrado!")
        break;
    }
}

function novaConta() { //MP 1
    var idade = Number(prompt("Insira sua idade"))

    if (idade >= 18 && idade <= 110) {
        var novaConta = {
            nome: prompt("Insira seu nome"),
            senha: prompt("Insira sua senha"),
            saldo: 0,
            idadeC: idade,
        }
        contas.push(novaConta)

        apresentacao()
    } else {
        console.log("Idade não permitida")
        apresentacao()
    }
}

function login() { //MP 2
    var nomeLogin = prompt("Insira o nome da sua conta para fazer login")

    for (var i = 0; i != contas.length; i++) {
        if (nomeLogin == contas[i].nome) {
            alert("Conta encontrada")
            var senhaLogin = prompt("Insira a sua senha para fazer login")

            if (senhaLogin == contas[i].senha) {
                alert("Login efetuado")
                menu()
            }
        }

        function menu() {
            var opcao = Number(prompt("Serviços: \n\n1- Depositar \n2- Sacar \n3- Transferência \n4- Consultar seu saldo atual \n5- Ver informações da conta \n6- Fechar"))

            switch (opcao) {
                case 1: //Depositar
                    var deposito = parseFloat(prompt("Insira o valor do depósito"))

                    if (deposito > 0) {
                        contas[i].saldo = contas[i].saldo + deposito
                        alert("Depósito efetuado com sucesso!")

                        menu()
                    } else {
                        alert("Valor indisponível!")
                        menu()
                    }
                break;

                case 2: //Sacar
                    var saque = parseFloat(prompt("Insira o valor que você deseja sacar"))

                    if (saque <= contas[i].saldo) {
                        contas[i].saldo = contas[i].saldo - saque
                        alert("Saque efetuado com sucesso!")

                        menu()
                    } else {
                        alert("Valor indisponível!")

                        menu()
                    }
                break;

                case 3: //Transferir
                    var nome = prompt("Insira o nome da conta destino")

                    for (var j = 0; j < contas.length; j++) {
                        if (nome == contas[j].nome) {
                            alert("Conta destino encontrada")

                            var valor = parseFloat(prompt("Insira o valor da transferencia"))

                            if (valor <= contas[i].saldo) {
                                contas[i].saldo = contas[i].saldo - valor
                                contas[j].saldo = contas[j].saldo + valor

                                alert("Transferência efetuada com sucesso!")

                                menu()
                            } else {
                                alert("Valor indisponível!")

                                menu()
                            }
                        } else {
                            alert("Conta destino não encontrada")
                            menu()
                        }
                    }
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

                default:
                    alert("Informações não encontradas!")
                    apresentacao()
                break;
            }
        }
    }
}