(function () {
    /* globals Phaser:false, BasicGame: false */
    //  Create your Phaser game and inject it into the game div.
    //  We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
    //  We're using a game size of 480 x 640 here, but you can use whatever you feel makes sense for your game of course.
   var gamevar = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS,'gameContainer');

    //  Add the States your game has.
    //  You don't have to do this in the html, it could be done in your Game state too, but for simplicity I'll keep it here.
   
    gamevar.state.add('Load',Game.Load);
    gamevar.state.add('MainMenu',Game.MainMenu);
    gamevar.state.add('Game',Game.PlayGame);
    gamevar.state.add('Mapa',Game.MapScreen);
    gamevar.state.add('PrimerNivel',Game.PrimerNivel);
    gamevar.state.add('Lose',Game.LoseScreen);
    gamevar.state.add('Win',Game.WinScreen);
    gamevar.state.start('Load');
})();