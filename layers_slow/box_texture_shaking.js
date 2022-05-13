let angle1 = 0;
let speed = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('layers_slow/vX.gif');
  noStroke();
}

function draw() {
  background(0);

  let camX = random(-5, 5);
  let camY = random(-5, 5);
  let camZ = random(-5, 5);

  camera(camX, camY, camZ + (height / 2) / tan(PI / 6), camY, camZ, camX, 0, 1, 0);

  push();
  rotateZ(angle1 * speed);
  rotateX(angle1 * speed);
  rotateY(angle1 * speed);
  angle1 += 0.1;
  texture(img);
  box(300);
  pop();
}
