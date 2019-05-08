var miRuleta= new Winwheel({ 
    'numSegments': 8,
    'outerRadius': 200,
    'lineWidth': 2,     
    'strokeStyle': 'black',
    'drawMode' : 'image',
    'imageOverlay' : true,
    //cada uno de los segmentos, ordenados en sentido de las agujas del reloj
    'segments': [
        {'text': 'Bar'},
        {'text': 'Boliche(Discoteca)'},
        {'text': 'Pool'},
        {'text': 'Bowling'},
        {'text': 'Cine'},
        {'text': 'Teatro'},
        {'text': 'Karaoke'},
        {'text': 'Cena'},
    ],
    
    //La animacion que hace que se mueva
    'animation':{
        'type': 'spinToStop',
        'duration': 4,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()'
    }  
});

// Create new image object in memory.
let loadedImg = new Image();
 
// Create callback to execute once the image has finished loading.
loadedImg.onload = function()
{
    miRuleta.wheelImage = loadedImg;    // Make wheelImage equal the loaded image object.
    miRuleta.draw();                    // Also call draw function to render the wheel.
}
 
// Set the image source, once complete this will trigger the onLoad callback (above).
loadedImg.src = "../imagenes/salida.png";

//Muestra el mensaje una vez que frena la ruleta
function Mensaje() {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    alert("Hoy puedes ir a un/una: " + SegmentoSeleccionado.text + "!");
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
window.location="../html/Peli.html";
});

var cambioizquierda= document.querySelector("#header");
Hammer(header).on('swipeleft', function(){
window.location="../html/Ropa.html";
});

