let angle = 0;
let speed = 0.001;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(10);
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
        angle += 0.1;
        fill(255, 100, 150,random(0, 255));
        sphere(40);
        pop();
      }
    }
  }
}
