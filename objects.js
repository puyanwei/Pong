function player1() {
	this.x = 20;
	this.y = height / 2;
	this.ydir = 0;
	this.r = 12;

	this.show = function () {
		fill(255);
		rectMode(CENTER);
		rect(this.x, this.y, this.r, this.r * 4);
	}

	this.setDir = function (dir) {
		this.ydir = dir;
	}

	this.move = function (dir) {
		this.y += this.ydir * 5;
	}
}

function ball() {
	this.x = 100; //Start location of ball
	this.y = 25;
	this.r = 5;
	this.show = function () {
		fill(255);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}

	this.move = function () {
		this.x = this.x + xspeed;
		this.y = this.y + yspeed;
	}

	this.edges = function () {
		if (this.y > height || this.y < 0) {
			yspeed = yspeed * -1;
		}
		if (this.x > height || this.x < 0) {
			xspeed = xspeed * -1;
		}
	}

	this.intersects = function (other) {
		var d = dist(this.x, this.y, other.x, other.y);
		if (d < this.r + other.r) {
			return true;
		} else {
			return false;
		}
	}
}
