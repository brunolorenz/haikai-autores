var letra1;
var letra2;
var letra3;
var r = 89;
var g = 76;
var b = 41;


function preload () {
  myFont = loadFont('assets/Lora-Italic.ttf')
  myFonttitulo = loadFont('assets/BreeSerif-Regular.ttf')
  frase1 = loadStrings("frases1.txt");
  frase2 = loadStrings("frases2.txt")
  frase3 = loadStrings("frases3.txt");

}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255,253,234);
  textFont(myFont);
  fill(31,31,122,100);
  textSize(20);
  textAlign(CENTER);
  text("clique na tela",windowWidth/2,windowHeight/2);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255,253,234);
  textFont(myFont);
  fill(31,31,122,100);
  textSize(20);
  textAlign(CENTER);
  text("clique na tela",windowWidth/2,windowHeight/2);
  window.location.reload(true)
}

function touchStarted() {

  var catalogo = random(9999);
  var linha1 = random(frase1)
  var linha2 = random(frase2)
	var linha3 = random(frase3)
  var centrov = windowWidth/2;
  var centroh = windowHeight/2;


textSize(40);
textStyle(BOLD);
textAlign(CENTER);
textFont(myFont);
background(255,253,234);

fill(r,g,b,255);
text(linha1, centrov, centroh-50);
fill(r,g,b,200);
text(linha2, centrov, centroh);
fill(r,g,b,150);
text(linha3, centrov, centroh+50);

textFont(myFonttitulo);
textSize(12);
fill(31,31,31,150);
text("S E U  H A I K A I   nº "+round(catalogo), centrov, 50);

}

function keyReleased() {
  saveCanvas();
}
