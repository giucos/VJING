let angle1 = 0;
let speed = 0.001;
let camera;
let winkel = 0;
let farb;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera = createCamera();
}

function draw() {
  background(0);
  camera.lookAt(0, 0, 0);
  camera.setPosition(cos(frameCount / 30) * 200, sin(frameCount / 30) * 200, sin(frameCount / 30) * 200);
  translate(-width / 2 + 30, -height / 2 + 30, 500);
  for (let x = 50; x <= windowWidth; x = x + 100) {
    for (let y = 50; y <= windowHeight; y = y + 200) {
      for (let z = 50; z >= -1000; z = z - 100) {
        farb = sin(winkel) * 125 + 125;
        winkel++;
        push();
        translate(x, y, z);
        rotateZ(angle1 * speed);
        rotateX(angle1 * speed);
        rotateY(angle1 * speed);
        angle1 += 0.1;
        fill(farb, farb, farb);
        noStroke();
        sphere();
        pop();
      }

    }
  }
}