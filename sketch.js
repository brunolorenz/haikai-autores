var letra1;
var letra2;
var letra3;
var r = 114;
var g = 11;
var b = 99;
function preload () {
  myFont = loadFont('assets/Solway-ExtraBold.ttf')
  myFonttitulo = loadFont('assets/Solway-Bold.ttf')
  frase1 = loadStrings("frases1.txt");
  frase2 = loadStrings("frases2.txt");
  frase3 = loadStrings("frases3.txt");
  autores = loadStrings("autores.txt");
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
  background(195,82,37);
  textFont(myFont);
  fill(195,82,37,100);
  textSize(20);
  textAlign(CENTER);
  text("clique na tela",windowWidth/2,windowHeight/2);
  window.location.reload(true)
}
function touchStarted() {
    var catalogo = random(9999);
    //cria linha 1
    var index1 = round(random(frase1.length));
    console.log(index1);
    console.log(frase1);
    var autor1 = autores[index1];
    var linha1 = frase1[index1];
    console.log(linha1);
    //cria linha 2
    var index2 = round(random(frase2.length));
    var autor2 = autores[index2];
    var linha2 = frase1[index2];
    //cria linha 3
    var index3 = round(random(frase3.length));
    var autor3 = autores[index3];
    var linha3 = frase1[index3];
    var centrov = windowWidth/2;
    var centroh = windowHeight/2;
    //texto haikai
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER);
    textFont(myFont);
    background(195,82,37);
    fill(r,g,b,255);
    text(linha1, centrov, centroh-50);
    fill(r,g,b,200);
    text(linha2, centrov, centroh);
    fill(r,g,b,150);
    text(linha3, centrov, centroh+50);
    //texto autores
    textFont(myFonttitulo);
    textSize(12);
    fill(228,253,225,100);
    text("verso de autoria de "+autor1, centrov, windowHeight-50-15-15);
    text("verso de autoria de "+autor2, centrov, windowHeight-50-15);
    text("verso de autoria de "+autor3, centrov, windowHeight-50);
    //texto titulo
    textFont(myFonttitulo);
    textSize(12);
    fill(228,253,225,100);
    text("S E U  H A I K A I   nº "+round(catalogo), centrov, 50);
}
function keyReleased() {
  saveCanvas();
}
