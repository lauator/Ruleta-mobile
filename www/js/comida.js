//  Creo una variable y le asigno un objeto llamado Winwheel (el cual esta incluido en la libreria Winwheel.min.js)
var miRuleta= new Winwheel({ 
    'numSegments': 8, //cantidad de segmentos
    'outerRadius': 200, //Tamaño de ruleta//
    'lineWidth': 2,  //tamaño de las lineas que dividen los segmentos//   
    'strokeStyle': 'black',  //color de las lineas
    'drawMode' : 'image', //para que permita cargar una imagen en el espacio de la ruleta//
    'imageOverlay' : true, //para que la imagen cargada se superponga a la ruleta//
    //cada uno de los segmentos, ordenados en sentido de las agujas del reloj
    'segments': [
        {'text': 'Hamburguesa'},
        {'text': 'Pizza'},
        {'text': 'Carne'},
        {'text': 'Pasta'},
        {'text': 'Verduras'},
        {'text': 'Tarta'},
        {'text': 'Pollo'},
        {'text': 'Pescado'},
    ],
    
    //La animacion que hace que se mueva
    'animation':{
        'type': 'spinToStop',
        'duration': 4, //lo que dura la animacion de la ruleta
        'callbackFinished': 'Mensaje()', //llama a la funcion de entregar el mensaje dependiendo de lo que haya salido en la ruleta
        'callbackAfter': 'dibujarIndicador()' //llama a la funcion de dibujar el indicador
    }  
});

//  Creo una variable y le asigno un objeto llamado Image(el cual esta incluido en la libreria Winwheel.min.js)
let loadedImg = new Image();
 
// Cuando se cargue la imagen, la funcion se activara
loadedImg.onload = function()
{
    miRuleta.wheelImage = loadedImg;    //  Hace la imagen de la ruleta igual a la variable creada (nuestra imagen)
    miRuleta.draw();                    //  También llama a la función de dibujo para hacer la ruleta.
}
 
// Se establece la ruta de la imagen en la variable creada, una vez hecho eso se accionara la funcion de arriba
loadedImg.src = "../imagenes/comida1.png";

//Muestra el mensaje una vez que frena la ruleta
function Mensaje() {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    alert("Hoy puedes comer: " + SegmentoSeleccionado.text + "!"); //consigue el segmento de texto que haya salido en la ruleta y lo muestra en un alert
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
//permite hacer el gesto de deslizar hacia la izquierda o derecha para que gire la ruleta
var gesto= document.getElementById("canvas");
Hammer(canvas).on('swiperight', function(){
miRuleta.startAnimation() //funcion que hace empezar la animacion de la ruleta
});

//permite hacer el gesto de deslizar hacia la izquierda o derecha para que cambie de página
var cambioderecha= document.querySelector("#header");
Hammer(header).on('swiperight', function(){
window.location="../html/Bebida.html";
});

var cambioizquierda= document.querySelector("#header");
Hammer(header).on('swipeleft', function(){
window.location="../index.html";
});



//música
window.onload=function(){
 
    // creamos el objeto audio
    var audioElement = document.createElement('audio');

    // indicamos el archivo de audio a cargar
    audioElement.setAttribute('src', '../musica/musica.mp3');

    // Si deseamos que una vez cargado empieze a sonar...
    audioElement.setAttribute('autoplay', 'autoplay');

    audioElement.setAttribute('loop', 'loop');

    document.getElementById("pause").addEventListener("click", function() {
        // hacemos pausa
        audioElement.pause();
    });
};










