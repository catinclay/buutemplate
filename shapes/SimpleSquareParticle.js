// Simple class example

function SimpleSquareParticle(fp, posX, posY) {
	this.fp = fp;
	this.x = posX;
	this.y = posY;
	this.velX = 0;
	this.velY = 0;
	this.accelX = 0;
	this.accelY = 0;
	this.color = "#FF0000";
	this.radius = 10;
}

//The function below returns a Boolean value representing whether the point with the coordinates supplied "hits" the particle.
SimpleSquareParticle.prototype.hitTest = function(hitX,hitY) {
	return((hitX > this.x - this.radius)&&(hitX < this.x + this.radius)&&(hitY > this.y - this.radius)&&(hitY < this.y + this.radius));
}

//A function for drawing the particle.
SimpleSquareParticle.prototype.drawToContext = function(theContext) {
	theContext.fillStyle = this.color;
	theContext.fillRect((this.x - this.radius) * this.fp, (this.y - this.radius) * this.fp, 2*this.radius*this.fp, 2*this.radius*this.fp);
}

SimpleSquareParticle.prototype.shouldDestroy = function(theContext) {
	return false;
}