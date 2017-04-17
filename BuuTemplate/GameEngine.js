function GameEngine() {}

GameEngine.prototype.init = function(game, fps) {
	this.game = game;
	this.theCanvas = document.getElementById("mainCanvas");
	console.log(this.theCanvas.getBoundingClientRect());
	if(screen.width < 400){
		this.theCanvas.width *=2;
		this.theCanvas.height *=2;
	}
	this.context = this.theCanvas.getContext("2d");
	this.theCanvas.style.display = "block";
	this.addListeners();
	this.fps = fps;
	this.sounds = {};
	this.images = {};
	this.game.init(this.theCanvas.width, this.theCanvas.height);
}

GameEngine.prototype.registerSound = function(sound) {
	this.sounds[sound.name] = new Audio(sound.src);
}

GameEngine.prototype.registerImage = function(image) {
	this.images[image.name] = new Image;
	var thisImage = this.images[image.name];
	thisImage.src = image.src;
	return new Promise(function(resolve, reject){
		thisImage.onload = resolve;
		thisImage.onerror = reject;
	});
}

GameEngine.prototype.start = function() {
	this.timer = setInterval(this.onTimerTick.bind(this), 1000/this.fps);
}



GameEngine.prototype.drawScreen = function() {
	this.context.fillStyle = "#FFFFFF";
	this.context.fillRect(0, 0, this.theCanvas.width, this.theCanvas.height);
}


GameEngine.prototype.onTimerTick = function(){
	this.game.update();
	this.drawScreen();
}


GameEngine.prototype.addListeners = function(){
	this.theCanvas.addEventListener('mousedown', this.mouseDownListener.bind(this), false);
	this.theCanvas.addEventListener('touchstart', this.touchDownListener.bind(this), false);
	window.addEventListener('mousemove', this.mouseMoveListener.bind(this), false);
	window.addEventListener('touchmove', this.touchMoveListener.bind(this), false);
	window.addEventListener('mouseup', this.mouseUpListener.bind(this), false);
	window.addEventListener('touchend', this.touchUpListener.bind(this), false);
}



GameEngine.prototype.mouseDownListener = function(evt){
	var bRect = this.theCanvas.getBoundingClientRect();
	touchX = (evt.clientX - bRect.left)*(this.theCanvas.width/bRect.width);
	touchY = (evt.clientY - bRect.top)*(this.theCanvas.height/bRect.height);
	this.game.inputDownListener(touchX, touchY);
}

GameEngine.prototype.touchDownListener = function(evt){
	evt.preventDefault();	evt.stopPropagation();
	var bRect = this.theCanvas.getBoundingClientRect();
	var touches = evt.changedTouches;
	touchX = (touches[0].pageX - bRect.left)*(this.theCanvas.width/bRect.width);
	touchY = (touches[0].pageY - bRect.top)*(this.theCanvas.height/bRect.height);
	this.game.inputDownListener(touchX, touchY);
}

GameEngine.prototype.mouseMoveListener = function(evt){
	var bRect = this.theCanvas.getBoundingClientRect();
	touchX = (evt.clientX - bRect.left)*(this.theCanvas.width/bRect.width);
	touchY = (evt.clientY - bRect.top)*(this.theCanvas.height/bRect.height);
	this.game.inputMoveListener(touchX, touchY);
}

GameEngine.prototype.touchMoveListener = function(evt){
	evt.preventDefault();	evt.stopPropagation();
	var bRect = this.theCanvas.getBoundingClientRect();
	var touches = evt.changedTouches;
	touchX = (touches[0].pageX - bRect.left)*(this.theCanvas.width/bRect.width);
	touchY = (touches[0].pageY - bRect.top)*(this.theCanvas.height/bRect.height);
	this.game.inputMoveListener(touchX, touchY);
}

GameEngine.prototype.mouseUpListener = function(evt){
	var bRect = this.theCanvas.getBoundingClientRect();
	touchX = (evt.clientX - bRect.left)*(this.theCanvas.width/bRect.width);
	touchY = (evt.clientY - bRect.top)*(this.theCanvas.height/bRect.height);
	this.game.inputUpListener(touchX, touchY);
}

GameEngine.prototype.touchUpListener = function(evt){
	evt.preventDefault();	evt.stopPropagation();
	var bRect = this.theCanvas.getBoundingClientRect();
	var touches = evt.changedTouches;
	touchX = (touches[0].pageX - bRect.left)*(this.theCanvas.width/bRect.width);
	touchY = (touches[0].pageY - bRect.top)*(this.theCanvas.height/bRect.height);
	this.game.inputUpListener(touchX, touchY);
}