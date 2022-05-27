var canvas = document.querySelector('.forca')
var context = canvas.getContext('2d');

//width:464 h: 300






context.fillStyle = '#0A3871'


context.fillRect(180, 100, 2, 200);
context.fillRect(180, 100, 80, 2);
context.fillRect(260, 100, 2, 40);
context.fillRect(0,298,468,2);



function desenhaCabeça() {
    context.beginPath();
    context.arc(260, 150, 10, 0, 2 * 3.14);
    context.fill();
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(260, 150, 8, 0, 2 * 3.14);
    context.fill();

}
function desenhaTronco() {
    context.fillStyle = '#0A3871'
    context.fillRect(260, 160, 2, 50);

}
function desenhaBraçoD() {
    context.beginPath();
    context.moveTo(260, 170);
    context.lineTo(275, 185);
    context.stroke();


}
function desenhaBraçoE() {
    context.beginPath();
    context.moveTo(260, 170);
    context.lineTo(245, 185);
    context.stroke();


}
function desenhaPernaD() {
    context.beginPath();
    context.fillStyle = '#0A3871'
    context.moveTo(260, 210);
    context.lineTo(280, 230);
    context.stroke();


}
function desenhaPernaE() {
    context.beginPath();
    context.moveTo(260, 210);
    context.lineTo(240, 230);
    context.stroke();

}
/*
desenhaCabeça()
desenhaTronco()
desenhaBraçoD()
desenhaBraçoE()
desenhaPernaD()
desenhaPernaE()
*/




































