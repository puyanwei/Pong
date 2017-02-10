var p1;
var xspeed = 1;
var yspeed = 1;

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
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		p1.setDir(-1);
	} else if (keyCode === DOWN_ARROW) {
		p1.setDir(1);
	}
}

function keyReleased() {
	p1.setDir(0);
}
