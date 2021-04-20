var contas = []

alert("Bem vindo ao 'Teste de Login'")
alert("ATENÇÃO!!! \nPara acessar sua conta, é necessário criar a conta antes ... Gênio")

const idadePermMin = 12
const idadePermMax = 110

var idade = Number(prompt("Insira sua idade"))

if (idade >= idadePermMin && idade <= idadePermMax) {
    function newPerfil() {
        var novoPerfil = {
            email: prompt("Insira aqui seu email:"),
            senha: prompt("Insira aqui sua senha:"),
            nickName: prompt("Insira aqui seu Nickname:"),
            idadeP: idade
        }

        contas.push(novoPerfil)
        menu()
    }

    function testeLogin() {
        var emailLogin = prompt("Insira aqui seu email:")

        for (var i = 0; i < contas.length; i++) {
            if (emailLogin == contas[i].email) {
                alert("Email correto!")

                var senhaLogin = prompt("Insira aqui sua senha:")
                if (senhaLogin == contas[i].senha) {
                    alert("Senha correta!")
                    alert("Login uau")

                    console.log("Lista de perfis: " + contas)
                } else {
                    alert("Senha incorreta!")
                    menu()
                }
            } else {
                alert("Email incorreto!")
                menu()
            }

            if (emailLogin != contas[i].email) {
                alert("Email não encontrado!")
                menu()
            }
        }
    }

    menu()

    function menu() {
        var menu = Number(prompt("Você deseja acessar \n1- Criar uma conta \n2- Acessar sua conta"))

        switch (menu) {
            case 1:
                newPerfil()
                break;

            case 2:
                testeLogin()
                break;

            default:
                alert("Opção não encontrada!")
                break;
        }
    }
}else{
    alert("Idade não permitida!")
}