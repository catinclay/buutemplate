var game = new Game();
var gameEngine = new GameEngine();
gameEngine.init(game, 30);

gameEngine.registerSound({name:'failedSound', src:'sounds/failedSound.mp3'});

var loadPromises = [
	gameEngine.registerImage({name:'flightImage', src:'image/flightIcon.png'})
];

Promise.all(loadPromises).then(gameEngine.start());

