function Game(){}

Game.prototype.init = function(fp, canvasWidth, canvasHeight, imageManager, soundManager){
	this.fp = fp;
	this.canvasWidth = canvasWidth;
	this.canvasHeight = canvasHeight;
	this.imageManager = imageManager;
	this.soundManager = soundManager;

	this.initGame();
}

Game.prototype.initGame = function() {
	this.drawables = [];
	this.particles = [];
	this.drawables.push(this.particles);
}

Game.prototype.update = function() {
}

Game.prototype.getDrawables = function() {
	return this.drawables;
}

Game.prototype.inputDownListener = function(touchX, touchY) {
	if(Math.random()>0.5){
		this.particles.push(new SimpleSquareParticle(this.fp, touchX, touchY));
	}else{
		this.particles.push(new SimpleImageParticle(this.fp, touchX, touchY, imageManager.get("flightImage")));
	}
	this.soundManager.play("failedSound");
}

Game.prototype.inputMoveListener = function(touchX, touchY) {
}

Game.prototype.inputUpListener = function(touchX, touchY) {
}