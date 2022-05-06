let angle = 0;
let speed = 0.001;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}
function draw() {
  background(0);
  
  for (let x = 50; x <= windowWidth + 200; x += 100) {
    for (let y = 50; y <= windowHeight + 200; y += 100) {
      push();
      noFill();
      stroke(255);
      rotate(angle * speed);
      rect(x, y, 50, 50);
      angle += 1;
      pop();
    }
  }
}
