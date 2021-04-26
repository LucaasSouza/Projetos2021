var contas = [
    {
        email: "teste@gmail.com",
        senha: "000",
        nickName: "Testeuau",
        idadeP: 18,
    }
]

alert("Bem vindo ao 'Teste de Login'")
alert("ATENÇÃO!!! \nPara acessar sua conta, é necessário criar a conta antes.")

var idade = Number(prompt("Insira sua idade:"))
if (idade >= 12 && idade <= 110) {
    menu()
} else {
    alert("Idade não permitida!")
}

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
    var flag = false
    var emailLogin = prompt("Insira aqui seu email:");

    for (i = 0; i < contas.length && flag === false; i++) {
        if (emailLogin == contas[i].email) {
            alert("Email correto!")

            var senhaLogin = prompt("Insira aqui sua senha:")

            if (senhaLogin == contas[i].senha) {
                flag = true
                alert("Login efetuado")

                console.log(contas)
            } else {
                alert("Senha incorreta!")
                menu()
            }
        }
    }

    if(flag == false) {
        alert("Email incorreto!")
        menu()
    }
}