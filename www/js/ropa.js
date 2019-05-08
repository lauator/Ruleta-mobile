var miRuleta= new Winwheel({ 
    'numSegments': 10,
    'outerRadius': 200,
    'lineWidth': 2,     
    'strokeStyle': 'black',
    //cada uno de los segmentos, ordenados en sentido de las agujas del reloj
    'segments': [
        {'fillStyle':'#FF0000' ,'text': 'Rojo con negro'},
        {'fillStyle':'#D8BFD8' ,'text': 'Color Pastel'},
        {'fillStyle':'#F0FFFF' ,'text': 'Blanco con cafe'},
        {'fillStyle':'#343f51' ,'text': 'Denim c/ algo claro'},
        {'fillStyle':'#B0C4DE' ,'text': 'Estilo marinero'},
        {'fillStyle':'#FFD700' ,'text': 'Color Mostaza'},
        {'fillStyle':'#581d22' ,'text': 'Color Marsala'},
        {'fillStyle':'#FFC0CB' ,'text': 'Rosa con blanco'},
        {'fillStyle':'#00FF00' ,'text': 'Gris con verde'},
        {'fillStyle':'#4169E1' ,'text': 'Azul con beige'},
        
    ],
    
    //La animacion que hace que se mueva
    'animation':{
        'type': 'spinToStop',
        'duration': 4,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()'
    }  
});



//Muestra el mensaje una vez que frena la ruleta
function Mensaje() {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    alert("Hoy puedes ponerte algo: " + SegmentoSeleccionado.text + "!");
    // Reinicio de la ruleta (Valor inicial)
    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    miRuleta.draw();
    dibujarIndicador();
}
//Dibuja el triangulo negro sobre la ruleta 
dibujarIndicador();
function dibujarIndicador() {
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = 'navy';     
    ctx.fillStyle = 'black';     
    ctx.lineWidth = 2;
    ctx.beginPath();             
    ctx.moveTo(170, 0);          
    ctx.lineTo(230, 0);          
    ctx.lineTo(200, 40);
    ctx.lineTo(171, 0);
    ctx.stroke();                
    ctx.fill();                  
}

var gesto= document.getElementById("canvas");
Hammer(canvas).on('swiperight', function(){
miRuleta.startAnimation() //funcion que hace empezar la animacion de la ruleta
});

var cambioderecha= document.querySelector("#header");
Hammer(header).on('swiperight', function(){
window.location="../html/Salida.html";
});

var cambioizquierda= document.querySelector("#header");
Hammer(header).on('swipeleft', function(){
window.location="../html/Bebida.html";
});