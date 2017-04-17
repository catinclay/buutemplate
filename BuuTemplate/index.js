var game = new Game();
var gameEngine = new GameEngine();
var imageManager = new ImageManager();
var soundManager = new SoundManager();
gameEngine.init(game, imageManager, soundManager, 30);

soundManager.registerSound({name:'failedSound', src:'sounds/failedSound.mp3'});

var loadPromises = [
	imageManager.registerImage({name:'flightImage', src:'image/flightIcon.png'})
];

Promise.all(loadPromises).then(gameEngine.start());

