//console.log("dsajfosdfo")

function resizeWindow() {
	var width = window.innerWidth-40;
	var height = window.innerHeight-40;
	var canvas = document.getElementsByTagName('canvas')[0];
	canvas.width = width;
	canvas.height = height;
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';
}
 var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.width =canvas.width + 'px';
canvas.style.height =canvas.height + 'px'; 
document.body.appendChild(canvas);


var bgReady = false;
var bgImage = document.createElement('img');
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "sunset.jpg";

var heroReady = false;
var heroImage = document.createElement('img');
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "cake.png";

var monsterReady = false;
var monsterImage = document.createElement('img');
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "unicorn.png";

	
var hero = {
	speed: 50
	};
var monster = {};
var monstersCaught = 0;
var keysDown = {};
addEventListener("keydown",function (e) {
	console.log(e.key)
	keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e){
	delete keysDown[e.keyCode];
}, false);

function reset(){
	hero.x=canvas.width/2;
	hero.y=canvas.height/2;
	monster.x= 32 +(Math.random() * canvas.width-64); 
	monster.y= 32 +(Math.random() * canvas.height-64);
}
function update(modifier){
	if (38 in keysDown) {
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		hero.y += hero.speed * modifier;
	}

	if (37 in keysDown) {
		hero.x -= hero.speed * modifier;
	}

	if (39 in keysDown) {
		hero.x += hero.speed * modifier;
	}	
 	if (
 		hero.x<=(monster.x + 32)
 		&& monster.x <= (hero.x + 32)
 		&& hero.y <=(monster.y + 32)
 		&& monster.y <= (hero.y + 32)
 		){
 		++monstersCaught;
 			reset();
 	}
 }
function render(){
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	}

	if (heroReady){
		ctx.drawImage(heroImage, hero.x, hero.y);
}

	if (monsterReady){
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
}
 

function main(){
	var now = Date.now()
	var delta = now - then;
	update(delta/100);
	render();
	then=now;
}
reset();
var then = Date.now();
setInterval(main,1);
