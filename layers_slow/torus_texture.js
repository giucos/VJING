let angle1 = 0;
let speed = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('layers_slow/7SBh.gif');
  noStroke();
}

function draw() {
  background(0);
  push();
  rotateZ(angle1 * speed);
  rotateX(angle1 * speed);
  rotateY(angle1 * speed);
  angle1 += 0.1;
  texture(img);
  torus(500, 500);
  pop();
}
