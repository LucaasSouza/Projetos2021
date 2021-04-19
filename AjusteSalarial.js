var repeticao = Number(prompt("Insira quantas vezes você deseja solicitar o calculador do Ajuste Salarial"))
var i = 0

while(i<repeticao){
    alert("Bem vindo ao app de Ajuste Salarial das Organizações Tabajara")

    function porcentagem(n1) {

        var n1 = Number(prompt("Insira o seu salário aqui"))

        if (n1 > 0 && n1 < 281) {
            var porcentagem1 = (n1 * 20) / 100

            alert("O salário antes do reajuste é de: R$" + n1)
            alert("O percentual de aumento aplicado foi de: 20%")
            alert("O valor do aumento foi de: R$" + porcentagem1)
            alert("O seu salário após o aumento será de: R$" + (porcentagem1 + n1))
        }

        if (n1 > 280 && n1 < 701) {
            var porcentagem1 = (n1 * 15) / 100

            alert("O salário antes do reajuste é de: R$" + n1)
            alert("O percentual de aumento aplicado foi de: 15%")
            alert("O valor do aumento foi de: R$" + porcentagem1)
            alert("O seu salário após o aumento será de: R$" + (porcentagem1 + n1))
        }

        if (n1 > 700 && n1 < 1501) {
            var porcentagem1 = (n1 * 10) / 100

            alert("O salário antes do reajuste é de: R$" + n1)
            alert("O percentual de aumento aplicado foi de: 10%")
            alert("O valor do aumento foi de: R$" + porcentagem1)
            alert("O seu salário após o aumento será de: R$" + (porcentagem1 + n1))
        }

        if (n1 > 1500) {
            var porcentagem1 = (n1 * 5) / 100

            alert("O salário antes do reajuste é de: R$" + n1)
            alert("O percentual de aumento aplicado foi de: 5%")
            alert("O valor do aumento foi de: R$" + porcentagem1)
            alert("O seu salário após o aumento será de: R$" + (porcentagem1 + n1))
        }
    }

    alert(porcentagem())
    i++
}