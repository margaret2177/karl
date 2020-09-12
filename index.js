let btn = document.querySelector(".btn");
let colorCode = document.querySelector(".colorCode");
let hexCode = document.querySelector(".hexCode");
let container = document.body;
let r,g,b;





btn.addEventListener('click',function(){
    // colorCode.textContent=bgColor;
    console.log("clicked");
    // document.body.style.background = random_bg_color();
    var bg=window.getComputedStyle(container, null).getPropertyValue("background-color");
    var openPar = bg.indexOf("(");
    var closePar = bg.indexOf(")");
    var numVal = bg.slice(openPar +1,(closePar));
    var splitedVal = numVal.split(', ')
    r = splitedVal[0];
    g = splitedVal[1];
    b = splitedVal[2];
    colorCode.textContent=window.getComputedStyle(container, null).getPropertyValue("background-color");
    hexCode.textContent=fullColorHex(r,g,b);
    
    console.log(fullColorHex(r,g,b));
    console.log(r);
    console.log(g);
    console.log(b);
    console.log( splitedVal);
    // console.log(typeof(random_bg_color()));
});




function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
//  console.log(bgColor);
  
    // document.body.style.background = bgColor;
    }

    var fullColorHex = function(r,g,b) {   
        var red = rgbToHex(r);
        var green = rgbToHex(g);
        var blue = rgbToHex(b);
        return red+green+blue;
      };

      var rgbToHex = function (rgb) { 
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      };