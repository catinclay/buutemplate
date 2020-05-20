function SoundManager(){
	this.sounds = {};
	this.soundsIndex = {};
}

SoundManager.prototype.registerSound = function(sound) {
	if (this.sounds[sound.name] == undefined) {
		this.sounds[sound.name] = [];
		for (var i = 0; i < 10; ++i) {
			this.sounds[sound.name].push(new Audio(sound.src));
		}
	}
	this.soundsIndex[sound.name] = 0;
}

SoundManager.prototype.play = function(sound) {
	var index = this.soundsIndex[sound];
	this.soundsIndex[sound]++;
	if (this.soundsIndex[sound] == 10) this.soundsIndex[sound] = 0;
	this.sounds[sound][index].play();
}