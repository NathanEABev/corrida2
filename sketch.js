var x = [0, 0, 0, 0]
var y = []
var tipo = ["🃏", "👾", "🐱", "😤"]
var botao = ["a", "f", "j", "ç"]
var quant = tipo.length
let ganhador = [];
let termi = false;

function setup() {
  createCanvas(windowWidth, windowHeight) 
  y = [height*1/5, height*2/5, height*3/5, height*4/5]
}

function draw() {
  comeco()
  perso()
  chegada()
  corra()
  repete()
}

function comeco() {
  if (focused == true) {
    background('#d00')
  } else {
    background('#900')
  }
}

function chegada() {
  fill("white");
  rect(width-height/10, 0, 20, 800);
  
  fill("black");
  for (let quadrado = 0; quadrado < 800;
      quadrado +=20){
    rect(width-height/10, quadrado, 20, 10);
  }
}

function perso() {
  textSize(height/10)
  for (let posição = 0; posição < quant; posição++){
    text(tipo[posição], x[posição], y[posição]);
  }
}

function corra() {
  if (!termi) {
    ganhador = []

    for (let posição = 0; posição < quant; posição++) {
      if(x[posição] > width-height/10) {
        ganhador.push(tipo[posição]);
      }
    }

    if (ganhador.length > 0){
      noLoop();
      termi = true;
    }
  }

  if (ganhador.length > 0) {
    fill("black");
    textSize(36);
    textAlign(CENTER, CENTER);
    let texto = ganhador.join(" e ") + " venceu!"
    text(texto, width/2, height/2-36);
  }
}

function keyReleased(){
  if (!termi){
    for (let posição = 0; posição < quant; posição++){
      if (key == botao[posição]){
        x[posição] += random(10, 30);
      }
    }
  }
}

function repete() {
  if (termi){
    fill("white");
    stroke("black");
    rect(width/2-65, height/2, 150, 50, 15);
    
    fill("red");
    textSize(28);
    textAlign(CENTER, CENTER);
    text("Reiniciar?", width/2+10, height/2+27);
  }
}

function mousePressed(){
  if (termi){
    if(mouseX > width/2-65 && mouseX > width/2 + 85 && mouseY > height/2 && mouseY < height/2 + 50){
      reiniciarjogo();
    }
  }
}

function reiniciarjogo() {
  for (let posição = 0; posição < quant; posição++){
    x[posição] = 0;
    ganhador = [];
    termi = false;
    loop();
  }
}