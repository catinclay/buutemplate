function ImageManager() {
	this.images = {};
}

ImageManager.prototype.get = function(imageName) {
	return this.images[imageName];
}

ImageManager.prototype.registerImage = function(image) {
	this.images[image.name] = new Image;
	var thisImage = this.images[image.name];
	thisImage.src = image.src;
	return new Promise(function(resolve, reject){
		thisImage.onload = resolve;
		thisImage.onerror = reject;
	});
}
