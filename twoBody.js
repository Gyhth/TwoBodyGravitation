var planetOne = new planetClass(100, 30);
var planetTwo = new planetClass(5, 20);
var gravitySimulation = new gravityClass(planetOne, planetTwo);
init("body", 500, 500);

function gravityClass(planetOne, planetTwo) {
	this.planetOne = planetOne;
	this.planetTwo = planetTwo;
};

function planetClass(mass, size){
	this.mass = mass,
	this.size = size,
	this.x = 0
};

planetClass.prototype = {
	size: 0,
	mass: 0
};

function init(parentObject, width, height) {
		this.width = width;
		this.height = height;
		$(parentObject).append("<canvas id=\"gravity\" width=\""+width+"\" height=\""+height+"\"></canvas>");
		this.canvas = document.getElementById("gravity");
		var context = this.canvas.getContext("2d");
		context.beginPath();
		context.fillStyle = "#FF0000";
		planetOne.x = planetOne.size;
		context.arc(planetOne.x, canvas.height/2, planetOne.size, 0, 2 * Math.PI, false);
		context.fill();
		context.beginPath();
		context.fillStyle = "#0000FF";
		planetTwo.x = canvas.width-planetTwo.size;
		context.arc(planetTwo.x, canvas.height/2, planetTwo.size, 0, 2 * Math.PI, false);
		context.fill();
		setInterval(this.calculate, 1);
}

function calculate() {
		var canvas = document.getElementById("gravity");
		context = canvas.getContext("2d");
		context.clearRect(0, 0, canvas.width, canvas.height);
		var distance = planetOne.x - planetTwo.x;
		var force = 9.8*(planetTwo.mass/(planetOne.mass+planetTwo.mass))/distance;
		planetOne.x -= force;
		if (planetOne.x < 0) {
			planetOne.x = 0;
		}
		if (planetOne.x > canvas.width) {
			planetOne.x = canvas.width - planetOne.x;
		}
		if (planetOne.x == 0) {
			planetOne.x = planetOne.size;
		}
		console.log(planetOne.x);
		context.beginPath();
		context.fillStyle = "#FF0000";
		context.arc(planetOne.x, canvas.height/2, planetOne.size, 0, 2 * Math.PI, false);
		context.fill();
		context.beginPath();
		context.fillStyle = "#0000FF";
		force = 9.8*(planetOne.mass/(planetOne.mass+planetTwo.mass))/distance;
		planetTwo.x += force;
		if (planetTwo.x < 0) {
			planetTwo.x = 0;
		}
		if (planetTwo.x > canvas.width) {
			planetTwo.x = canvas.width - planetTwo.x;
		}
		if (planetTwo.x == 0) {
			planetTwo.x = planetTwo.size;
		}
		context.arc(planetTwo.x, canvas.height/2, planetTwo.size, 0, 2 * Math.PI, false);
		context.fill();
}
