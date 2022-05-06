let glitch, capture, w = 320, h = 240;

function setup() {
	capture = createCapture(VIDEO);
	capture.size(w, h);
	capture.hide();

	createCanvas(windowWidth, windowHeight);

	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	glitch.pixelate(1);
}

function draw() {
	if(frameCount % 3 === 0) {
		
		if(!mouseIsPressed){
			glitch.loadImage(capture);
		}
		
		// map mouseX to # of randomBytes() + mouseY to limitBytes()
		glitch.limitBytes(map(mouseY, 0, height, 0, 1));
		glitch.randomBytes(map(mouseX, 0, width, 0, 100));
		glitch.buildImage();
	}
	
	image(glitch.image, width / 2, height / 2, glitch.width, glitch.height)
}