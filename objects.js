function paddle1() {
	this.x = 5;
	this.y = 100;
	this.w = 12;
	this.h = 64;

	this.ydir = 0;

	this.show = function () {
		fill(255);
		rect(this.x, this.y, this.w, this.h);
	}

	this.setDir = function (dir) {
		this.ydir = dir;
	}

	this.move = function (dir) {
		this.y += this.ydir * 5;
	}
}

function paddle2() {
	this.x = 380;
	this.y = 300;
	this.w = 12;
	this.h = 64;

	this.ydir = 0;

	this.show = function () {
		fill(255);
		rect(this.x, this.y, this.w, this.h);
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
	this.xspeed = 5;
	this.yspeed = 5;

	this.show = function () {
		fill(255);
		ellipse(this.x, this.y, this.r * 2);
	}

	this.move = function () {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}

	this.edges = function () {
		if (this.y > height || this.y < 0) {
			this.yspeed = this.yspeed * -1;
		}
		if (this.x > height || this.x < 0) {
			this.xspeed = this.xspeed * -1;
		}
	}
	this.hit = function (other) {
		if (this.x + this.r > other.x && this.y + this.r > other.y && this.x - this.r < other.x + other.w && this.y - this.r < other.y + other.h) {
			return true;
		} else {
			return false
		}
	}
}
