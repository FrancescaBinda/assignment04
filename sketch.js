var dimensioneScala;
var colore1;
var colore2;
var colore3;
var colore4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {

//Cambio colore a seconda dell'ora
  if (hour()> 18 && hour()<7){
    colore1 = "#EFD3D3";
    colore2 = "#CE7C7C";
    colore3 = "#AB4A47";
    colore4 = '#81271D';
  } else {
    colore1 = "#E7EDF8";
    colore2 = '#74859E';
    colore3 = '#415068';
    colore4 = '#1E273A';
  }

  background(colore1);
//Ridimensiona secondo dimensione minore finestra
  if (windowHeight < windowWidth)
    dimensioneScala = windowHeight;
  else
    dimensioneScala = windowWidth;
    
  push();
  translate(width / 2, height / 2);
  rotate(-90);
  
  
  noFill();
  //seconds
  var s = second();
  clockHand(s, 60, dimensioneScala / 2.15, colore2);

  //minutes
  var m = minute();
  clockHand(m, 60, dimensioneScala / 2.5, colore3);

  //hours
  var h = hour() % 12;
  clockHand(h, 12, dimensioneScala / 3, colore4);
  pop();


  push();
  translate(width / 2, height / 2);
  
  textFont('Georgia')
  noStroke()
  
  // Numeri minuti
  fill(colore3)
  for (var a = 0; a < 60; a++) {
    v = p5.Vector.fromAngle((a) / 60.0 * TAU - HALF_PI);
    v.mult(dimensioneScala * 0.45);

    if (a == m) {
      textSize(dimensioneScala / 25);
    } else {
      textSize(dimensioneScala / 70);
    }
    text(a, v.x, v.y);
  }
  
  // Numeri ore
  fill(colore4);
  
  for (var a = 1; a <= 12; a++) {
    v = p5.Vector.fromAngle((a) / 12.0 * TAU - HALF_PI);
    v.mult(0.35 * dimensioneScala);

    if (a == hour() % 12) {
      textSize(dimensioneScala / 10);
    } else {
      textSize(dimensioneScala / 40);
    }
    text(a, v.x, v.y);
  }

  pop();
}

function clockHand(timeValue, range, radius, col) {
  stroke(col);
  strokeWeight(dimensioneScala / 70);
  noFill();
  var end = map(timeValue, 0, range, 0, 360);
  arc(0, 0, radius, radius, 0, end);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}