let angle1 = 0;
let speed = 0.1;  // constant slow 0.1

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('layers_slow/7SBh.gif');
  noStroke();
}

function draw() {
  background(0);
  push();
  rotateX(angle1 * speed);
  rotateY(angle1 * speed);
  rotateZ(angle1 * speed);
  //speed += 0.0001; // disable for consistency
  angle1 += 0.1;
  texture(img);
  box(1500, 1500);
  pop();
}
