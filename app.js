var dash_button = require('node-dash-button');
var dash = dash_button("YOUR_MAC_ADD", null, null, 'all'); //address from step above

dash.on("detected", function (){
    console.log("found it, yay");
});