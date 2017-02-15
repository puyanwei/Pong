var p1;
var p2;

function setup() {
	createCanvas(400, 400);
	p1 = new paddle1();
	p2 = new paddle2();
	b = new ball();
}

function draw() {
	background(51);
	p1.show();
	p1.move();
	p2.show();
	p2.move();
	b.show();
	b.move();
	b.edges();
	if (b.hit(p1)) {
		b.xspeed *= -1;
		b.yspeed *= 1;
	}
	if (b.hit(p2)) {
		b.xspeed *= -1;
		b.yspeed *= 1;
	}
}

// }

function keyPressed() {
	if (keyCode === 87) {
		p1.setDir(-1);
	} else if (keyCode === 83) {
		p1.setDir(1);
	}
	if (keyCode === UP_ARROW) {
		p2.setDir(-1);
	} else if (keyCode === DOWN_ARROW) {
		p2.setDir(1);
	}
}

function keyReleased() {
	p1.setDir(0);
	p2.setDir(0);

}
