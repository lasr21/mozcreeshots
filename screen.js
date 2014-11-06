var page = require('webpage').create();

//variables para la fecha
var date = new Date()
var nom = date.getFullYear() + '_' + date.getMonth() + '_' + date.getDate()

//Definimos el tamaño de la pantalla
page.viewportSize = { width: 2048, height: 900 };

var tomascreen_recortado = function () {
  page.clipRect = { top: 260, left: 545, width: 970, height: 600, };
  page.render('rec_' + nom + '_mex_.png');
  phantom.exit();	
};

var tomascreen_completo = function () {
  page.render('com_' + nom + '_mex_.png');
};

//Mexico screenshot
page.open("https://location.services.mozilla.com/map#5/22.634/-101.777", function() {
  setTimeout(tomascreen_completo, 3000);
  setTimeout(tomascreen_recortado, 3000);
});
