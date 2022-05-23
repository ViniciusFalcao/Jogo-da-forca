
addEventListener('load', function renderiza() {
    //Dados do jogo
    var lista = ['ALURA', 'CASA', 'JAVA', 'FRONTEND', 'PANELA']
    var erros = 0;
    var acertos = 0;
    //Funções
    function sorteiaPalavra() {
        var n_sorteados = Math.round(Math.random() * (lista.length - 1))
        return n_sorteados

    }
    function carregaLetras() {
        for (let index = 0; index < palavra.length; index++) {
            var div = document.querySelector('.letras')
            var input = document.createElement('input')
            input.classList.add('input_palavra')

            div.appendChild(input)


        }

    }
    function valorLetras(tecla) {
        var letras = document.querySelectorAll('.input_palavra')
        var letra_igual = false;


        for (let index = 0; index < letras.length; index++) {
            if (tecla == palavra[index]) {
                letras[index].value = palavra[index];
                letra_igual = true

            }



        }
        if (!letra_igual) {
            var p = document.querySelector('p')
            var input = document.createElement('input');
            input.value = `${tecla}`
            input.classList.add('input_falhas')

            p.appendChild(input)

            erros++

        }
        if (letra_igual) {
            acertos++
            
        }



    }

    //Código



    var palavra = lista[sorteiaPalavra()]

    carregaLetras();
    addEventListener('keydown', function (tecla) {
        valorLetras(tecla.key);
        console.log('erros:'+erros)
        console.log('acertos: '+acertos)


    })











    console.log(palavra)

})
