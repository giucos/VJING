function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
}

function draw() {
  background(0);
  for (let y = 50; y <= windowHeight; y = y + 60) {
    strokeWeight(random(2, 15));
    line(10, y, windowWidth - 10, y);
  }
  for (let x = 50; x <= windowWidth - 10; x = x + windowWidth * 0.05) {
    strokeWeight(random(2, 15));
    line(x + random(0, 20), 10, x + random(0, 20), windowHeight - 10);
  }

}