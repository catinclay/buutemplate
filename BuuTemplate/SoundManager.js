function SoundManager(){
	this.sounds = {};
}

SoundManager.prototype.registerSound = function(sound) {
	this.sounds[sound.name] = new Audio(sound.src);
}

SoundManager.prototype.play = function(sound) {
	this.sounds[sound].play();
}