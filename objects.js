function player1() {
	this.x = 20;
	this.y = height / 2;
	this.ydir = 0;

	this.show = function () {
		fill(255);
		rectMode(CENTER);
		rect(this.x, this.y, width / 24, height / 6);
	}

	this.setDir = function (dir) {
		this.ydir = dir;
	}

	this.move = function (dir) {
		this.y += this.ydir * 5;
	}
}

function ball() {
	this.x = 5; //Start location of ball
	this.y = 1;
	this.show = function () {
		fill(255);
		ellipse(this.x, this.y, 25, 25);
	}

	this.move = function () {
		this.x = this.x + xspeed;
		this.y = this.y + yspeed;
	}

	this.edges = function () {
		if (this.y > height || this.y < 0) {
			yspeed = yspeed * -1;
		}
	}
}
