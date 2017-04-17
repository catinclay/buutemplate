var game = new Game();
var gameEngine = new GameEngine();
var imageManager = new ImageManager();
gameEngine.init(game, imageManager, 30);
gameEngine.registerSound({name:'failedSound', src:'sounds/failedSound.mp3'});

var loadPromises = [
	imageManager.registerImage({name:'flightImage', src:'image/flightIcon.png'})
];

Promise.all(loadPromises).then(gameEngine.start());

