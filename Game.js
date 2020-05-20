function Game(){}

Game.prototype.init = function(canvasWidth, canvasHeight, imageManager, soundManager){
	this.canvasWidth = canvasWidth;
	this.canvasHeight = canvasHeight;
	this.drawables = [];
	this.particles = [];
	this.drawables.push(this.particles);
	this.imageManager = imageManager;
	this.soundManager = soundManager;
}

Game.prototype.update = function() {
}

Game.prototype.getDrawables = function() {
	return this.drawables;
}

Game.prototype.inputDownListener = function(touchX, touchY) {
	if(Math.random()>0.5){
		this.particles.push(new SimpleSquareParticle(touchX, touchY));
	}else{
		this.particles.push(new SimpleImageParticle(touchX, touchY, imageManager.get("flightImage")));
	}
	this.soundManager.play("failedSound");
}

Game.prototype.inputMoveListener = function(touchX, touchY) {
}

Game.prototype.inputUpListener = function(touchX, touchY) {
}