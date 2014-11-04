var page = require('webpage').create();

//variables to use for date format
var date = new Date()
var nom = date.getFullYear() + '_' + date.getMonth() + '_' + date.getDate()

//define the size of the screen
page.viewportSize = {
  width: 2048,
  height: 900
};

//Mexico screenshot
page.open("https://location.services.mozilla.com/map#5/22.634/-101.777", function() {
  page.render(nom + '_mex_.png');
  phantom.exit();
});
