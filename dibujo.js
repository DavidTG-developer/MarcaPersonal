var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);

var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");
var ancho=d.width;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas=parseInt(texto.value); ;
  var l=0;
  var h=ancho/lineas;
  var xi, yi, xf, yf;
  var color="#FAA";

  while (l<lineas) {
    yi=h*l;
    xf=h*(l+1);
    dibujarLinea("red",0,yi,xf,300);
    console.log("Linea"+1);
    l=l+1;
  }
  l=0;
  while (l<lineas) {
    xi=h*l;
    yf=h*(l+1);
    dibujarLinea("blue",xi,0,300,yf);
    console.log("Linea"+1);
    l=l+1;
  }
}
