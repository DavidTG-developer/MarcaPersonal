document.addEventListener("mousedown", coordenadasIniciales);
document.addEventListener("mouseup", coordenadasFinales);

var cuadro = document.getElementById("Dibujo_area");
var papel = cuadro.getContext("2d");
var xi,xf,yi,yf;

function coordenadasIniciales(evento1) {
  console.log(evento1);
  if(evento1.target.id=="Dibujo_area"){
    xi=evento1.layerX;
    yi=evento1.layerY;
    console.log("xi"+evento1.layerX);
  }
}
function coordenadasFinales(evento2) {
  var colorcito="red";
  if (evento2.target.id=="Dibujo_area") {
    xf=evento2.layerX;
    yf=evento2.layerY;
    dibujarLinea(colorcito,xi,yi,xf,yf,papel);
  }
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
