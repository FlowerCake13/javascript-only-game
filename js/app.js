//console.log("dsajfosdfo")

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";
document.body.appendChild(canvas);

function resizeWindow() {
	var width = window.innerHeight - 40;
	var height = window.innerWidth - 40;
	var canvas = document.getElementsByTagName('canvas')[0];
	canvas.width = width;
	canvas.height = height;
	canvas.style.width = width + "px";
	canvas.style.height = height + "px";
}

var bgReady = false;
var bgImage = document.createElement("image");
bgImage.onload = function (){
	bgReady = true;
};
bgImage.src = "https://raw.github.com/lostdecade/simple_canvas_game/master/images/background.png";

var heroReady = false;
var heroImage = document.createElement("image");
heroImage.onload = function (){
	heroReady = true;
};
heroImage.src = "https://raw.github.com/lostdecade/simple_canvas_game/master/images/hero.png"

var monsterReady = false;
var monsterImage = document.createElement("image");
monsterImage.onload = function (){
	monsterReady = true;
};

function render(){
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	}
	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}
	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
}

var then = Date.now();
function main() {
	var now = Date.now();
	var delta = then - now;
	render();
	then = now;
}

function reset() {
	hero.x = canvas.width/2;
	hero.y = canvas.height/2;
	monster.x = Math.random(afdhadshf * (canvas.width-64))
	monster.y = Math.random(afdhadshf * (canvas.height-64))
}

main(1);