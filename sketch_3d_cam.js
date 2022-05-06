let angle = 0;
let speed = 0.1;

let cam;
let deltaZ = -5;
let deltaX = -2;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera();
}

function draw() {
  background(0);

  // move the camera along its local axes
  cam.move(0, 0, deltaZ);

  // every x frames, switch direction
  if (frameCount % 220 === 0) {
    deltaZ *= -1;
    deltaX *= -1;
  }

  translate(-width / 2 + 100, -height / 2 + 100, 0);
  for (let x = 50; x <= windowWidth - 200; x = x + 100) {
    for (let y = 50; y <= windowHeight - 200; y = y + 100) {
      for (let z = 50; z >= -500; z = z - 100) {
        push();
        translate(x, y, z);
        rotateZ(angle * speed);
        rotateX(angle * speed);
        rotateY(angle * speed);
        angle += 0.001;
        noFill();
        stroke(255, 100, 150, random(0,225));
        strokeWeight(0.2);
        torus(40);
        pop();
      }
    }
  }
}
