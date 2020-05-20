// Simple class example

function SimpleImageParticle(posX, posY, image) {
		this.x = posX;
		this.y = posY;
		this.velX = 0;
		this.velY = 0;
		this.accelX = 0;
		this.accelY = 0;
		this.color = "#FF0000";
		this.radius = 10;
		this.image = image;
}

//The function below returns a Boolean value representing whether the point with the coordinates supplied "hits" the particle.
SimpleImageParticle.prototype.hitTest = function(hitX,hitY) {
	return((hitX > this.x - this.radius)&&(hitX < this.x + this.radius)&&(hitY > this.y - this.radius)&&(hitY < this.y + this.radius));
}

//A function for drawing the particle.
SimpleImageParticle.prototype.drawToContext = function(theContext) {
	theContext.save();
	theContext.translate(this.x,this.y);
  	theContext.drawImage(this.image
						, -this.image.width/2
						, -this.image.height/2);
  	theContext.restore();
}

SimpleImageParticle.prototype.shouldDestroy = function(theContext) {
	return false;
}