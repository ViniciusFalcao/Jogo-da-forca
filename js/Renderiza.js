

addEventListener('load', function renderiza() {
    //Dados do jogo
    var lista = ['ALURA', 'CASA', 'JAVA', 'FRONTEND', 'PANELA']
    var erros = 0;
    var acertos = 0;
    var caps = false
    //Funções
    function sorteiaPalavra() {
        var n_sorteados = Math.floor(Math.random() * lista.length)

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
        var tecl_up = tecla.toUpperCase()


        for (let index = 0; index < letras.length; index++) {
            if (tecl_up == palavra[index]) {
                letras[index].value = palavra[index];
                letra_igual = true

            }



        }
        if (!letra_igual && tecla != 'CapsLock' && tecla != 'Shift') {
            var repetiu = false;

            var falhas = document.querySelectorAll('.input_falhas')

            for (let index = 0; index < falhas.length; index++) {
                if (falhas[index].value == tecla) {
                    repetiu = true;
                    break;

                }

            }


            if (!repetiu) {
                var p = document.querySelector('p')
                var input = document.createElement('input');
                input.value = `${tecla.toUpperCase()}`
                input.classList.add('input_falhas')
                input.addEventListener('click', function () {
                    this.blur();
                })

                p.appendChild(input)

                erros++

            }

        }
        if (letra_igual) {
            acertos++

        }



    }

    //Código



    var palavra = lista[sorteiaPalavra()]

    carregaLetras();

    var inputs = document.querySelectorAll('.input_palavra')
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].addEventListener('click', function () {
            this.blur()

        })

    }




    addEventListener('keydown', function (tecla) {
        if (tecla.key == 'Alt') {
            tecla.preventDefault();
            return

        }

        var padrao = '[A-Z]'
        if (!tecla.key.match(padrao)) {
            return

        }


        valorLetras(tecla.key);



        console.log(tecla.key)
        console.log('erros:'+erros+'  acertos'+acertos)
    })











    console.log(palavra)

})
