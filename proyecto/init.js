/* Made by Nambiar - Game Dolphin 

Feel free to use and learn from */



var gamevar = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS,'gameContainer');

gamevar.state.add('Load',Game.Load);

gamevar.state.add('MainMenu',Game.MainMenu);

gamevar.state.add('Game',Game.PlayGame);

gamevar.state.add('Mapa',Game.MapScreen);

gamevar.state.add('Lose',Game.LoseScreen);

gamevar.state.add('Win',Game.WinScreen);

gamevar.state.start('Load');