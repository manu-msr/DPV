
Game.MainMenu = function(game){



};

Game.MainMenu.prototype = {

	create : function(){

		
        this.game.add.tileSprite(0, 0, 1200, 800, 'background');	

		this.game.world.bounds.x = 0;

		this.game.world.bounds.y = 0;

		this.game.world.bounds.width = 600;

		this.game.world.bounds.height = 800;

		this.playbutton = this.add.button(600, 250,'play',this.playclicked,this,1,0,2);

		this.playbutton.anchor.setTo(0.5,0.5);

	this.tweenplay = this.game.add.tween(this.playbutton).to({y:300},1300,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

	},


//Botón de play en el menu principal
	playclicked : function() {

		score = 0;

		this.game.state.start('Mapa');
		//music = this.game.add.audio('song');
        //music.play('',0,1,true,false);

	},

};





Game.LoseScreen = function(game){



};



Game.LoseScreen.prototype = {

	create : function(){


		this.lose = this.game.add.sprite(0, 0,'lose');
		this.playbutton = this.add.button(600, 600,'botonMapa',this.playclicked,this,1,0,2);

		this.playbutton.anchor.setTo(0.5,0.5);

		this.tweenplay = this.game.add.tween(this.playbutton).to({y:650},1300,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);
		

		music.stop();

		

	},
//botón de play en la vista cuando un jugador pierde
	playclicked : function() {

		score = 0;

		this.game.state.start('Mapa');
		music = this.game.add.audio('song');
        music.restart('',0,0.5,true,false);
	},



};


Game.MapScreen = function(game){



};



Game.MapScreen.prototype = {

	create : function(){
		
		var mapa = this.game.add.sprite(0, 0 , 'mapa');


		this.game.world.setBounds(0, 0, 1200, 4523);

		cursors = this.game.input.keyboard.createCursorKeys();

		
		//boton 1
		this.playbutton = this.add.button(131, 79, 'boton1',this.playclicked,this,1,0,2);
		//boton 2
		this.playbutton = this.add.button(533, 280, 'boton2',this.playclicked,this,1,0,2);
		//boton 3
		this.playbutton = this.add.button(114, 545, 'boton3',this.playclicked,this,1,0,2);
		//boton 4
		this.playbutton = this.add.button(263, 973, 'boton4',this.playclicked,this,1,0,2);
		//boton 5
		this.playbutton = this.add.button(923, 1184, 'boton5',this.playclicked,this,1,0,2);
		//boton 6
		this.playbutton = this.add.button(687, 1516, 'boton6',this.playclicked,this,1,0,2);
		//boton 7
		this.playbutton = this.add.button(988, 1830, 'boton7',this.playclicked,this,1,0,2);
		//boton 8
		this.playbutton = this.add.button(591, 2008, 'boton8',this.playclicked,this,1,0,2);
		//boton 9
		this.playbutton = this.add.button(1900, 2370, 'boton9',this.playclicked,this,1,0,2);
		//boton 10
		this.playbutton = this.add.button(357, 2717, 'boton10',this.playclicked,this,1,0,2);
		//boton 11
		this.playbutton = this.add.button(132, 3114, 'boton11',this.playclicked,this,1,0,2);
		//boton 12
		this.playbutton = this.add.button(931, 3173, 'boton12',this.playclicked,this,1,0,2);
		//boton 13
		this.playbutton = this.add.button(986, 3874, 'boton13',this.playclicked,this,1,0,2);
		//boton 14
		this.playbutton = this.add.button(330, 3505, 'boton14',this.playclicked,this,1,0,2);
		//boton 15
		this.playbutton = this.add.button(142, 3842, 'boton15',this.playclicked,this,1,0,2);
		//boton 16
		this.playbutton = this.add.button(376, 4255, 'boton16',this.playclicked,this,1,0,2);

		

	},

	playclicked : function() {
		
		
		score = 0;
		this.game.state.start('PrimerNivel');
	
        
	},



	update : function(){ 

	 if (cursors.up.isDown)
    {
        //  If the shift key is also pressed then the world is rotated
   
            this.game.camera.y -= 20;
        }
    
    else if (cursors.down.isDown)
    {
        
            this.game.camera.y += 20;
        }
   

},
render : function() {

   // this.game.debug.cameraInfo(this.game.camera, 32, 500);

}

};

Game.PrimerNivel = function(game){



};



Game.PrimerNivel.prototype = {

	create : function(){

		var fondo = this.game.add.tileSprite(0, 0, 1200, 800, 'fondonivel');

		this.playbutton = this.add.button(600, 600,'jugar',this.playclicked,this,1,0,2);
		this.playbutton.anchor.setTo(0.5,0.5);
		this.tweenplay = this.game.add.tween(this.playbutton).to({y:670},1000,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

		
		var style = { font: "32px Arial", fill: "white", wordWrap: true,  wordWrapWidth: fondo.width, align: "center" };

 		text = this.game.add.text(0, 0, "\nFrankestein - Mary Shelley \n\n Cuando Frankenstein cumplió 17 años debía partir hacia Ingolstadt para continuar con sus estudios cuando Elizabeth contrajo la fiebre escarlata (escarlatina), mientras se recuperaba Caroline, que había estado cuidando de ella, cayó enferma. En su lecho de muerte Caroline le dijo a Frankenstein y a Elizabeth que deseaba que ellos dos se casaran. Después de un tiempo de lamentar la muerte de su madre Frankenstein partió hacia Ingoltadt para reanudar sus estudios en donde tenía el temor de sentirse solo o no tener a nadie, este sentimiento se desvaneció después de que Frankenstein conociera al M. Waldman quien lo animó en continuar con sus estudios sobre la chispa de la vida.", style);

	},

	playclicked : function() {

		score = 0;

		this.game.state.start('Game');
		music = this.game.add.audio('song');
        music.play('',0,0.5,false,false);
	},



};




Game.WinScreen = function(game){



};



Game.WinScreen.prototype = {

	create : function(){

		this.game.world.bounds.x = 0;

		this.game.world.bounds.y = 0;

		this.game.world.bounds.width = 600;

		this.game.world.bounds.height = 800;

		this.winimage = this.game.add.sprite(0,0,'win');

		this.playbutton = this.add.button(this.game.world.centerX, 500, 'play',this.playclicked,this,1,0,2);

		this.playbutton.anchor.setTo(0.5,0.5);

		this.tweenplay = this.game.add.tween(this.playbutton).to({y:550},1000,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

		

	},
//botón de play en la vista donde el jugador ganó
	playclicked : function() {

		score = 0;
		this.game.state.start('Game');
		music = this.game.add.audio('song');
		 music.restart('',0,0.5,true,false);
	},

};