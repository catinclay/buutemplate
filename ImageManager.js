function ImageManager() {
	this.prefix = "";
	this.images = {};
}

ImageManager.prototype.isForMobile = function() {
	this.prefix = "2x-";
}

ImageManager.prototype.get = function(imageName) {
	return this.images[imageName];
}

ImageManager.prototype.registerImage = function(image) {
	this.images[image.name] = new Image;
	var thisImage = this.images[image.name];
	thisImage.src = image.path + this.prefix + image.src;
	return new Promise(function(resolve, reject){
		thisImage.onload = resolve;
		thisImage.onerror = reject;
	});
}
