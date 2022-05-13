let angle1 = 0;
let speed = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('layers_slow/7SBh.gif');
  noStroke();
}

function draw() {
  background(0);
  push();
  rotateY(angle1 * speed);
  angle1 += 0.1;
  texture(img);
  plane(1500,1000);
  pop();
}
