var theCanvas = document.getElementById("mainCanvas");
if(screen.width < 400){
	theCanvas.width *=2;
	theCanvas.height *=2;
}
var theCanvasHeight = theCanvas.height; 
var theCanvasWidth = theCanvas.width;
var gameOverLabel = document.getElementById("gameOverLabel");
var restartButton = document.getElementById("restartButton");
var scoreLabel = document.getElementById("scoreLabel");
var context = theCanvas.getContext("2d");
var failedSound = new Audio('sounds/faildSound.mp3');
var comboSounds = [new Audio('sounds/combo1.mp3'),
					new Audio('sounds/combo2.mp3'),
					new Audio('sounds/combo3.mp3'),
					new Audio('sounds/combo4.mp3'),
					new Audio('sounds/combo5.mp3'),
					new Audio('sounds/combo6.mp3'),
					new Audio('sounds/combo7.mp3'),
					new Audio('sounds/combo8.mp3')];
failedSound.volume = .2;
for(se in comboSounds){
	se.volume = 1;
}



function init(){
	theCanvas.style.display = "block";
	restartButton.style.display = "none";
	gameOverLabel.style.display = "none";
	scoreLabel.style.display = "none";
	addListeners();
	timer = setInterval(onTimerTick, 1000/30);
}

function gameOver(){
	theCanvas.style.display = "none";
	gameOverLabel.style.display = "block";
	restartButton.style.display = "block";
	scoreLabel.innerHTML = index;
	scoreLabel.style.display = "block";
	clearInterval(timer);
}


function inputDownListener(touchX, touchY){
}

function inputMoveListener(touchX, touchY){
}

function inputUpListener(touchX, touchY){
}

function drawScreen() {
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,theCanvasWidth,theCanvasHeight);
}

function drawControlBar(){

}

function onTimerTick(){
	drawScreen();
	drawControlBar();
}


function addListeners(){
	theCanvas.addEventListener('mousedown', mouseDownListener, false);
	theCanvas.addEventListener('touchstart', touchDownListener, false);
	window.addEventListener('mousemove', mouseMoveListener, false);
	window.addEventListener('touchmove', touchMoveListener, false);
	window.addEventListener('mouseup', mouseUpListener, false);
	window.addEventListener('touchend', touchUpListener, false);
}



function mouseDownListener(evt){
	var bRect = theCanvas.getBoundingClientRect();
	touchX = (evt.clientX - bRect.left)*(theCanvas.width/bRect.width);
	touchY = (evt.clientY - bRect.top)*(theCanvas.height/bRect.height);
	inputDownListener(touchX, touchY);
}

function touchDownListener(evt){
	evt.preventDefault();	evt.stopPropagation();
	var bRect = theCanvas.getBoundingClientRect();
	var touches = evt.changedTouches;
	touchX = (touches[0].pageX - bRect.left)*(theCanvas.width/bRect.width);
	touchY = (touches[0].pageY - bRect.top)*(theCanvas.height/bRect.height);
	inputDownListener(touchX, touchY);
}

function mouseMoveListener(evt){
	var bRect = theCanvas.getBoundingClientRect();
	touchX = (evt.clientX - bRect.left)*(theCanvas.width/bRect.width);
	touchY = (evt.clientY - bRect.top)*(theCanvas.height/bRect.height);
	inputMoveListener(touchX, touchY);
}

function touchMoveListener(evt){
	evt.preventDefault();	evt.stopPropagation();
	var bRect = theCanvas.getBoundingClientRect();
	var touches = evt.changedTouches;
	touchX = (touches[0].pageX - bRect.left)*(theCanvas.width/bRect.width);
	touchY = (touches[0].pageY - bRect.top)*(theCanvas.height/bRect.height);
	inputMoveListener(touchX, touchY);
}

function mouseUpListener(evt){
	var bRect = theCanvas.getBoundingClientRect();
	touchX = (evt.clientX - bRect.left)*(theCanvas.width/bRect.width);
	touchY = (evt.clientY - bRect.top)*(theCanvas.height/bRect.height);
	inputUpListener(touchX, touchY);
}

function touchUpListener(evt){
	evt.preventDefault();	evt.stopPropagation();
	var bRect = theCanvas.getBoundingClientRect();
	var touches = evt.changedTouches;
	touchX = (touches[0].pageX - bRect.left)*(theCanvas.width/bRect.width);
	touchY = (touches[0].pageY - bRect.top)*(theCanvas.height/bRect.height);
	inputUpListener(touchX, touchY);
}





init();