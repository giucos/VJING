let angle1 = 0;
let speed = 0.0001;
let camera;
let winkel = 0;
let farbR;
let farbG;
let farbB;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera = createCamera();
}

function draw() {
  background(0);
  camera.lookAt(0, 0, 0);
  camera.setPosition(cos(frameCount / random(10, 30)) * 800, 0, sin(frameCount / random(10, 30)) * 100);
  translate(-width / 2 + 30, -height / 2 + 30, 500);
  for (let x = 50; x <= windowWidth; x = x + 100) {
    farbR = tan(winkel) * 125 + 125;
    farbG = cos(winkel) * 125 + 125;
    farbB = tan(winkel) * 125 + 125;
    winkel++;
    for (let y = 50; y <= windowHeight; y = y + 100) {
      for (let z = 50; z >= -1000; z = z - 100) {
        push();
        translate(x, y, z);
        rotateZ(angle1 * speed);
        rotateX(angle1 * speed);
        rotateY(angle1 * speed);
        angle1 += 0.1;
        fill(farbR, farbG, farbB);
        noStroke();
        strokeWeight(3);
        // stroke();
        sphere();
        pop();
      }

    }
  }
}