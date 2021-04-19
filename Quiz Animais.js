var especie = Number(prompt("1 - Mamífero \n 2 - Ave \n 3 - Réptil"));

switch (especie){
    case 1:
    var patas = Number(prompt("1 - Quadrúpede \n 2 - Bípede \n 3 - Voador \n 4 - Aquático"));
        switch (patas) {
            case 1:
            var alimento = Number(prompt("1 - Carnívoro \n 2 - Herbívoro"));
                if(alimento == 1){
                    alert("Leão")
                }
                if(alimento == 2){
                    alert("Cavalo")
                }
            break;

            case 2:
            var alimento = Number(prompt("1 - Omnívoro \n 2 - Frutífero"));
                if(alimento == 1){
                    alert("Homem")
                }
                if(alimento == 2){
                    alert("Macaco")
                }
            break;

            case 3:
                alert("Morcego")
            break;

            case 4:
                alert("Baleia")
            break;
        }
    break;

    case 2:
    var voantes = Number(prompt("1 - Não voadoras \n 2 - Nadadoras \n 3 - De rapina")) 
                switch(voantes){
                    case 1:
                    var habitat = Number(prompt("1 - Tropical \n 2 - Polar"))
                        if(habitat == 1){
                            alert("Avestruz")
                        }
                        if(habitat == 2){
                            alert("Pinguim")
                        }
                    break;

                    case 2:
                        if(voantes == 2){
                            alert("Pato")
                        }
                    break;

                    case 3:
                        if(voantes == 3){
                            alert("Águia")
                        }
                    break;
                }
    break;

    case 3:
    var caracteristicas = Number(prompt("1 - Com Casco \n 2 - Carnívoros \n 3 - Sem Pata"))
                switch(caracteristicas){
                    case 1:
                        if(caracteristicas == 1){
                            alert("Tartaruga")
                        }
                    break;
            
                    case 2:
                        if(caracteristicas == 2){
                            alert("Crocodilo")
                        }
                    break;

                    case 3:
                        if(caracteristicas == 3){
                            alert("Cobra")
                        }
                    break;
                }
    break;
          
    default:
        alert("Nenhum animal encontrado")
    break;
}