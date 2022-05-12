let angle1 = 0;
let speed = 0.000001;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  translate(-width / 2 + 100, -height / 2 + 100, 0);
  for (let x = 50; x <= windowWidth - 200; x = x + 100) {
    for (let y = 50; y <= windowHeight - 200; y = y + 100) {
      for (let z = 50; z >= -1000; z = z - 100) {
        push();
        translate(x, y, z);
        rotateZ(angle1 * speed * x);
        rotateX(angle1 * speed * y);
        rotateY(angle1 * speed * z);
        angle1 += 0.1;
        fill(255);
        box();
        pop();
      }
    }
  }
}
