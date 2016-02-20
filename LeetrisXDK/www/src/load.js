

Game = {};

//var w = 400;
//var h = 600;
var score = 0;
var width = 30;
var height = 30;
var force_down_max_time = 500;
var siguiente = true;

Game.Load = function(game){

};

Game.Load.prototype = {
	preload : function(){
		
		this.load.image('background', 'assets/pantallaInicial.png');
		this.load.spritesheet('play','assets/play.png',300,80);
		this.load.spritesheet('botonMapa','assets/botonMapa.png',300,80);
		this.load.image('pause','assets/Pause.png');
		this.load.image('reset','assets/refresh.png');
		this.load.image('lose','assets/lose.png');
		//botones de los niveles del mapa
		this.load.image('boton1','assets/boton1.png');
		this.load.image('boton2','assets/boton2.png');
		this.load.image('boton3','assets/boton3.png');
		this.load.image('boton4','assets/boton4.png');
		this.load.image('boton5','assets/boton5.png');
		this.load.image('boton6','assets/boton6.png');
		this.load.image('boton7','assets/boton7.png');
		this.load.image('boton8','assets/boton8.png');
		this.load.image('boton9','assets/boton9.png');
		this.load.image('boton10','assets/boton10.png');
		this.load.image('boton11','assets/boton11.png');
		this.load.image('boton12','assets/boton12.png');
		this.load.image('boton13','assets/boton13.png');
		this.load.image('boton14','assets/boton14.png');
		this.load.image('boton15','assets/boton15.png');
		this.load.image('boton16','assets/boton16.png');
		this.load.image('botona','assets/botona.png');
		this.load.image('botonb','assets/botonb.png');
		this.load.image('botonx','assets/botonx.png');
		this.load.image('fondonivel','assets/fondonivel.png');
		this.load.image('jugar', 'assets/EstoyListo.png')
		this.load.image('win','assets/win.png');
		this.load.image('mapa', 'assets/mapa.png');
		this.load.spritesheet('blocks','assets/blocks.png',30,30);
		this.load.image('bck','assets/Bck.png');
		this.load.audio('song', 'assets/audio/Tetris_theme.ogg');
	},

	create : function(){

       	this.game.add.tileSprite(0, 0, 1200, 4523, 'background');
        this.game.state.start('MainMenu');
    
	}
};