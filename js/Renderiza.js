var list=[
    'ALURA', 'CASA', 'JAVA', 'CAVALO', 'PANELA', 'CORAÇAO', 'PATO', 'RIMA', 'COMPUTADOR',
    'COBRA', 'BRASIL', 'ALEMANHA', 'CEMITERIO', 'PAI', 'CORAL', 'PEIXE', 'SOL', 'ESCADA', 'PROGRAMADOR',
    'FLORESTA', 'GALINHA', 'BARCO', 'FOGO', 'QUADRADO', 'AMAR', 'CAIR', 'GATO', 'JANELA', 'PORTA', 'FUSCA',
    'VERMELHO', 'OCEANO', 'PAZ', 'VIVER', 'MOTO', 'AMIGOS', 'AMARELO', 'TELHADO', 'PRINCIPE', 'REI', 'CHATEADO'
]

localStorage.setItem('list',JSON.stringify(list))

addEventListener('load', function renderiza() {
    //Dados do jogo
    var lista_default=JSON.parse(this.localStorage.list)
    var input_cell = document.querySelector('.input_cell')
    var lista = JSON.parse(this.localStorage.lista);
    console.log(lista)
    /*[
        'ALURA', 'CASA', 'JAVA', 'CAVALO', 'PANELA', 'CORAÇAO', 'PATO', 'RIMA', 'COMPUTADOR',
        'COBRA', 'BRASIL', 'ALEMANHA', 'CEMITERIO', 'PAI', 'CORAL', 'PEIXE', 'SOL', 'ESCADA', 'PROGRAMADOR',
        'FLORESTA', 'GALINHA', 'BARCO', 'FOGO', 'QUADRADO', 'AMAR', 'CAIR', 'GATO', 'JANELA', 'PORTA', 'FUSCA',
        'VERMELHO', 'OCEANO', 'PAZ', 'VIVER', 'MOTO', 'AMIGOS', 'AMARELO', 'TELHADO', 'PRINCIPE', 'REI', 'CHATEADO'
    ];*/

    this.localStorage.setItem('lista', JSON.stringify(lista))


    var erros = 0;
    var acertos = 0;
    var caps = false
    var ganhou = false
    //Funções
    function sorteiaPalavra() {
        var n_sorteados = Math.floor(Math.random() * lista.length)

        return n_sorteados

    }
    function carregaLetras() {
        var letras = document.querySelectorAll('.input_palavra');
        letras.forEach(letra => {
            letra.remove()

        });

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
                if (falhas[index].value == tecl_up) {
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
                if (erros == 1) {
                    desenhaCabeça()

                } else if (erros == 2) {
                    desenhaTronco()

                } else if (erros == 3) {
                    desenhaBraçoD()

                } else if (erros == 4) {
                    desenhaBraçoE()

                } else if (erros == 5) {
                    desenhaPernaD()

                } else {
                    desenhaPernaE()
                    setTimeout(() => {
                        alert('Você perdeu!')
                        location.reload()


                    }, 500);


                }

            }

        }
        if (letra_igual) {
            acertos++

        }



    }

    //Código
    context.fillStyle = '#0A3871'
    desenhaForca();





    var palavra = lista[sorteiaPalavra()]

    carregaLetras();
    input_cell.focus()

    var inputs = document.querySelectorAll('.input_palavra')
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].addEventListener('click', function () {
            this.blur()

        })

    }




    addEventListener('keypress', function (tecla) {



        if (tecla.key == 'Alt') {
            tecla.preventDefault();
            return

        }

        var padrao = '[A-Z-a-z]'
        if (!tecla.key.match(padrao)) {
            return

        }


        valorLetras(tecla.key);


        for (let index = 0; index < palavra.length; index++) {
            var blocos = document.querySelectorAll('.input_palavra')
            if (palavra[index] == blocos[index].value) {
                ganhou = true;

            } else {
                ganhou = false;
                break;
            }

        }
        console.log(tecla.key)
        console.log('erros:' + erros + '  acertos:' + acertos)
        console.log(ganhou)
        if (ganhou) {
            setTimeout(function () {
                alert('Você Ganhou')
                location.reload()

            }, 500)


        }


    })

    var btns_teclado = document.querySelectorAll('.btn_teclado')
    console.log(btns_teclado)

    for (let index = 0; index < btns_teclado.length; index++) {
        btns_teclado[index].addEventListener('click', function () {
            var tecla = this.textContent
            valorLetras(tecla);


            for (let index = 0; index < palavra.length; index++) {
                var blocos = document.querySelectorAll('.input_palavra')
                if (palavra[index] == blocos[index].value) {
                    ganhou = true;

                } else {
                    ganhou = false;
                    break;
                }

            }
            console.log(tecla)
            console.log('erros:' + erros + '  acertos:' + acertos)
            console.log(ganhou)
            if (ganhou) {
                setTimeout(function () {
                    alert('Você Ganhou')
                    location.reload()

                }, 500)


            }

            console.log(tecla)


        })


    }














    console.log(palavra)

    var novo_j = document.querySelector('.btn_novoj')

    novo_j.addEventListener('click', function () {
        var falhas = document.querySelectorAll('.input_falhas')
        falhas.forEach(element => {
            element.remove()

        });
        context.fillStyle = 'rgb(226, 223, 223)';

        context.fillRect(0, 0, 464, 300);
        context.fillStyle = '#0A3871'
        desenhaForca();



        palavra = lista[sorteiaPalavra()]
        carregaLetras();
        erros = 0;
        acertos = 0;
        caps = false
        ganhou = false

        console.log('nova palavra:' + palavra)
        console.log(erros + '/' + acertos)


    })
    var salvar = document.querySelector('.btn_salvar')
    var input = document.querySelector('.palavra_add')

    input.addEventListener("keypress", function (e) {
        const char=String.fromCharCode(e.keyCode);
        const key=e.keyCode
        const pattern='[a-z]';
        if (!char.match(pattern)&& key!=32) {
            e.preventDefault();
            
        }
        
    });

    salvar.addEventListener('click', function () {
        var nova_palavra = input.value
        var padrao = '[a-z]'

        if (nova_palavra.length <= 8 && nova_palavra.match(padrao)) {


            lista.push(nova_palavra.toUpperCase())
            localStorage.removeItem(lista)

            localStorage.setItem('lista', JSON.stringify(lista))

            var falhas = document.querySelectorAll('.input_falhas')
            falhas.forEach(element => {
                element.remove()

            });
            context.fillStyle = 'rgb(226, 223, 223)';

            context.fillRect(0, 0, 464, 300);
            context.fillStyle = '#0A3871'
            desenhaForca();



            palavra = lista[sorteiaPalavra()]
            carregaLetras();
            erros = 0;
            acertos = 0;
            caps = false
            ganhou = false

            addNone(tela_add);
            retiraNone(tela_jogo);
        } else {
            alert('Palavra invalida')
            input.value=''
            input.focus()
        }










    })

    var cancel = document.querySelector('.btn_cancel')

    cancel.addEventListener('click', function () {
        location.reload();

    })


})