let angle = 0;
let size = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  background(0);
}

function draw() {
  strokeWeight(1);
  stroke(random(10, 255));
  noFill();
  translate(750, 380);
  rotate(angle);
  square(0, 0, size);

  angle += 1;
  size -= 2;
}
