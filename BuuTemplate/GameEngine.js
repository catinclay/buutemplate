function GameEngine(game) {
	this.game = game;
	this.theCanvas = document.getElementById("mainCanvas")
	;
	console.log(this.theCanvas.getBoundingClientRect());
	if(screen.width < 400){
		this.theCanvas.width *=2;
		this.theCanvas.height *=2;
	}
	this.context = this.theCanvas.getContext("2d");
	this.failedSound = new Audio('sounds/faildSound.mp3');
	this.comboSounds = [new Audio('sounds/combo1.mp3'),
					new Audio('sounds/combo2.mp3'),
					new Audio('sounds/combo3.mp3'),
					new Audio('sounds/combo4.mp3'),
					new Audio('sounds/combo5.mp3'),
					new Audio('sounds/combo6.mp3'),
					new Audio('sounds/combo7.mp3'),
					new Audio('sounds/combo8.mp3')];
	this.failedSound.volume = .2;
	for(se in this.comboSounds){
		se.volume = 1;
	}
	this.theCanvas.style.display = "block";
	this.addListeners();
	var loadPromises = [];
	Promise.all(loadPromises).then(this.start());
}


GameEngine.prototype.start = function() {
	this.timer = setInterval(this.onTimerTick.bind(this), 1000/30);
}

GameEngine.prototype.loadImage = function(image, src) {
	image.src = src;
	return new Promise(function(resolve, reject){
		image.onload = resolve;
		image.onerror = reject;
	});
}

GameEngine.prototype.drawScreen = function() {
	this.context.fillStyle = "#FFFFFF";
	this.context.fillRect(0, 0, this.theCanvas.width, this.theCanvas.height);
}


GameEngine.prototype.onTimerTick = function(){
	this.drawScreen();
	this.game.update();
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