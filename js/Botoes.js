//funções
function retiraNone(variavel) {
    variavel.classList.remove('display_none')
    
}

function addNone(variavel) {
    variavel.classList.add('display_none')


    
}


//botoes tela inicial
var btn_cmç=document.querySelector('.btn_cmç')
var btn_add=document.querySelector('.btn_add')
//botoes tela de jogo

var desistir=document.querySelector('.btn_desistir')

//telas
var tela_inicial=document.querySelector('.container_inicial')
var tela_add=document.querySelector('.container_add')
var tela_jogo=document.querySelector('.container')

tela_add.classList.add('display_none')
tela_jogo.classList.add('display_none')




btn_cmç.addEventListener('click',function () {
    addNone(tela_inicial);
    retiraNone(tela_jogo);
    
    
    

    
})

btn_add.addEventListener('click',function () {
    addNone(tela_inicial);
    retiraNone(tela_add);
    var add=document.querySelector('.palavra_add')
    add.focus()
    
})
desistir.addEventListener('click',function () {
    location.reload()
    
})



