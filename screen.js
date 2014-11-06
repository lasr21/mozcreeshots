var page = require('webpage').create();

//variables para la fecha
var date = new Date()
var nom = date.getFullYear() + '_' + date.getMonth() + '_' + date.getDate()

//Definimos el tamaño de la pantalla
page.viewportSize = {
  width: 2048,
  height: 900
};

//Para que solgo saque la imagen del tamaño correcto
page.clipRect = {
  top: 260,
  left: 545,
  width: 970,
  height: 600,
};

//funcion para que espere 3 segundos para que cargue por completo la pagina
var tomascreen = function () {
  page.render(nom + '_mex_.png');
  phantom.exit();	
};

//Mexico screenshot
page.open("https://location.services.mozilla.com/map#5/22.634/-101.777", function() {
  setTimeout(tomascreen, 3000);
});
