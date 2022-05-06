function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
}
function draw() {
	background(0);
	for (let x = 50; x <= windowWidth + 200; x += 100) {
		for (let y = 50; y <= windowHeight + 200; y += 100) {
			if (frameCount % 25 == 0) {
				fill(random(100,255));
				push();
				//rotate(radians(frameCount));
				rect(x, y, 300, 30);
				pop();
			}
		}
	}
}
