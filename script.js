var x = [0, 0, 0, 0]
var tipo = ["🎭", "👓", "⚔️", "📚"]
var parou = false
/*var tecla = ["a", "f", "j", "ç"]*/

function setup() {
  createCanvas(windowWidth, windowHeight)  
}

function draw() {
  background("#DD3D3D")
  
  textSize(height/10)
  text(tipo[0], x[0], height * 1/5)
  text(tipo[1], x[1], height * 2/5)
  text(tipo[2], x[2], height * 3/5)
  text(tipo[3], x[3], height * 4/5)
  
  move()
}

/*function mousePressed() {
  x[0] += 400
  x[1] += 300
  x[2] += 200
  x[3] += 100
  
  if(x[0] > 400 || x[1] > 400 || x[2] > 400 || x[3] > 400) {
    x[0] = 400
    x[1] = 400
    x[2] = 400
    x[3] = 400
  }
}*/

function move() {
  if (key == "1" && x[0] < width-height/7) {
    x[0] += 60
  } else if (key == "2" && x[1] < width-height/7) {
    x[1] += 60
  } else if (key == "3" && x[2] < width-height/7) {
    x[2] += 60
  } else if (key == "4" && x[3] < width-height/7) {
    x[3] += 60
  }
  
  
}

function keyReleased() {
  if(!parou) {
    if(key == "a" && x[0] < width-height/7 || key == "A" && x[0] < width-height/7) {
      x[0] += 20
    }
    
    if(key == "f" && x[1] < width-height/7 || key == "F" && x[1] < width-height/7) {
      x[1] += 20
    }
    
    if(key == "j" && x[2] < width-height/7 || key == "J" && x[2] < width-height/7) {
      x[2] += 20
    }
    
    if(key == "ç" && x[3] < width-height/7 || key == "Ç" && x[3] < width-height/7) {
      x[3] += 20
    }
  }
}