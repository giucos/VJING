let angle1 = 0;
let speed = 0.0001;
let camera;
let winkel = 0;
let farbR;
let farbG;
let farbB;
let deltaX = 1;
let deltaY = 0;
let deltaZ = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera = createCamera();
}

function draw() {
  background(0);
  camera.lookAt(0, 0, 0);
  camera.setPosition(deltaX, deltaY, deltaZ);
  if (frameCount % 25 === 0) {
    deltaX *= -1;
    deltaZ *= -1;
  }
  deltaZ++;
  deltaX++;
  translate(-width / 2 + 30, -height / 2 + 30, 500);
  for (let x = 50; x <= windowWidth; x = x + 100) {
    farbR = tan(winkel) * 125 + 125;
    farbG = tan(winkel) * 125 + 125;
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
        fill(farbR, farbG, farbB,);
        strokeWeight(6);
        // stroke(farbR, farbG, farbB);
        stroke(0);
        noStroke();
        torus(10, 100);
        pop();
        push();
        translate(x + 100, y + 50, z + 70);
        rotateZ(angle1 * speed);
        rotateX(angle1 * speed);
        rotateY(angle1 * speed);
        angle1 += 0.1;
        fill(farbR, farbG, farbB,);
        noStroke();
        box(5, 60, 30);
        pop();
        // console.log(frameCount);
      }

    }
  }
}

      //fill(random(0,255),random(0,255),random(0,255));
      // sin(winkel)*125+125