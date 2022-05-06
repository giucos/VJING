let angle = 0;
let speed = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
}
function draw() {
  background(0);

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
        stroke(255);
        strokeWeight(random(0.1, 0.5));
        sphere(40);
        pop();
      }
    }
  }
}
