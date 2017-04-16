function Game(){

}

Game.prototype.update = function (){

}

Game.prototype.inputDownListener = function (touchX, touchY){
	console.log("X:"+touchX+",Y:"+touchY);
}

Game.prototype.inputMoveListener = function(touchX, touchY){
	console.log("X:"+touchX+",Y:"+touchY);
}

Game.prototype.inputUpListener = function(touchX, touchY){
	console.log("X:"+touchX+",Y:"+touchY);
}