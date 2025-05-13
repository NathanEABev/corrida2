var x = [0, 0, 0, 0]
var y = []
var tipo = ["🃏", "👾", "🐱", "😤"]
var botao = ["a", "f", "j", "ç"] // teclas usadas no jogo
var quant = tipo.length
let ganhador = [];
let termi = false;
let botaoHTML; // variável global para o botão real

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("jogo");
  y = [height*1/5, height*2/5, height*3/5, height*4/5];

  botaoHTML = select("#recomeca"); // usa o nome diferente
  botaoHTML.position(canvas.elt.offsetLeft + width/2 - 115, canvas.elt.offsetTop + height/2);
  botaoHTML.hide();
}

function draw() {
  comeco();
  perso();
  chegada();
  corra();
  repete(); // mostra o botão se necessário
}

function comeco() {
  if (focused == true) {
    background('#d00');
  } else {
    background('#900');
  }
}

function chegada() {
  fill("white");
  rect(width - height/10, 0, 20, height);
  
  fill("black");
  for (let quadrado = 0; quadrado < height; quadrado += 20){
    rect(width - height/10, quadrado, 20, 10);
  }
}

function perso() {
  textSize(height/10);
  for (let posição = 0; posição < quant; posição++){
    text(tipo[posição], x[posição], y[posição]);
  }
}

function corra() {
  if (!termi) {
    ganhador = [];

    for (let posição = 0; posição < quant; posição++) {
      if (x[posição] > width - height/10) {
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
    let texto = ganhador.join(" e ") + " venceu!";
    text(texto, width/2, height/2 - 36);
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
    botaoHTML.show();
  }
}

// ATENÇÃO: sem parênteses aqui!
botaoHTML.addEventListener("click", recomeca);

function recomeca() {
  for (let posição = 0; posição < quant; posição++){
    x[posição] = 0;
  }
  ganhador = [];
  termi = false;
  botaoHTML.hide();
  loop();
}