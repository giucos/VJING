let angle1 = 0;
let speed = 0.0001;
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
  for (let x = random(10, 100); x <= random(200, 2000); x = x + 100) {
    for (let y = random(10, 100); y <= random(200, 2000); y = y + 200) {
      for (let z = random(10, 100); z >= -random(200, 1500); z = z - 100) {
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
        // strokeWeight(random(0.1,10))
        // stroke(farb);
        sphere();
        pop();
      }

    }
  }
}