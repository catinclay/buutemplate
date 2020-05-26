var game = new Game();
var gameEngine = new GameEngine();
var imageManager = new ImageManager();
var soundManager = new SoundManager();
gameEngine.init(game, imageManager, soundManager, 30);

soundManager.registerSound({name:'failedSound', src:'sounds/failedSound.mp3'}, /*vol=*/1, /*dup=*/1);

var loadPromises = [
	imageManager.registerImage({name:'flightImage', path: 'image/', src:'flightIcon.png'}),
];

Promise.all(loadPromises).then(gameEngine.start());

