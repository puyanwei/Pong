var p1;
var xspeed = 6;
var yspeed = 6;

function setup() {
	createCanvas(400, 400);
	p1 = new player1();
	b = new ball();
}

function draw() {
	background(51);
	p1.show();
	p1.move();
	b.show();
	b.move();
	b.edges();
	if (b.intersects(p1)) {
		xspeed = xspeed * -1;
		yspeed = yspeed * -1;
	}
}

function keyPressed() {
	if (keyCode === 87) {
		p1.setDir(-1);
	} else if (keyCode === 83) {
		p1.setDir(1);
	}
}

function keyReleased() {
	p1.setDir(0);
}
