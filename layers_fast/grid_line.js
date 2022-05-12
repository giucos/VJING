function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let b = random(0, 20);
  for (let y = 50; y <= windowHeight; y = y + 60) {
    strokeWeight(random(2, 15));
    //stroke(random(0,255),random(0,255),random(0,255));
    line(10, y, windowWidth - 10, y);
  }
  for (let x = 50; x <= windowWidth - 10; x = x + windowWidth * 0.05) {
    strokeWeight(random(2, 15));
    //stroke(random(0,255),random(0,255),random(0,255));
    line(x + b, 10, x + b, windowHeight - 10);
  }

}