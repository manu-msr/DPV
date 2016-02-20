/* globals Phaser:false */
// create BasicGame Class
Game = {

};

var score = 0;
var width = 30;
var height = 30;
var force_down_max_time = 500;
var siguiente = true;
var oldsquares = new Array();

var timer;

var squaresinrow = new Array();

var change_rot_time = 0;

var force_down = 0;

var slide_time = 0;

var music;

var KEYLEFT;

var KEYRIGHT;

var KEYUP;

var KEYDOWN;

var aux = force_down_max_time;

var left=false;
var right=false;
var up = false;
var down = false;

Game.Load = function(game){

};

Game.Load.prototype = {
    preload : function(){
        
        this.load.image('background', 'asset/pantallaInicial.png');
        this.load.spritesheet('play','asset/play.png',300,80);
        this.load.spritesheet('botonMapa','asset/botonMapa.png',300,80);
        this.load.spritesheet('botoncontrol','asset/button-vertical.png',64,64);
        this.load.image('pause','asset/Pause.png');
        this.load.image('reset','asset/refresh.png');
        this.load.image('lose','asset/lose.png');
        //botones de los niveles del mapa
        this.load.image('boton1','asset/boton1.png');
        this.load.image('boton2','asset/boton2.png');
        this.load.image('boton3','asset/boton3.png');
        this.load.image('boton4','asset/boton4.png');
        this.load.image('boton5','asset/boton5.png');
        this.load.image('boton6','asset/boton6.png');
        this.load.image('boton7','asset/boton7.png');
        this.load.image('boton8','asset/boton8.png');
        this.load.image('boton9','asset/boton9.png');
        this.load.image('boton10','asset/boton10.png');
        this.load.image('boton11','asset/boton11.png');
        this.load.image('boton12','asset/boton12.png');
        this.load.image('boton13','asset/boton13.png');
        this.load.image('boton14','asset/boton14.png');
        this.load.image('boton15','asset/boton15.png');
        this.load.image('boton16','asset/boton16.png');
        this.load.image('botona','asset/botona.png');
        this.load.image('botonb','asset/botonb.png');
        this.load.image('botonx','asset/botonx.png');
        this.load.image('fondonivel','asset/fondonivel.png');
        this.load.image('fondoprimernivel','asset/fondoprimernivel.jpg');
        this.load.image('jugar', 'asset/EstoyListo.png')
        this.load.image('win','asset/win.png');
        this.load.image('mapa', 'asset/mapa.png');
        this.load.spritesheet('blocks','asset/blocks.png',30,30);
        this.load.image('bck','asset/Bck.png');
        this.load.image('bckPause','asset/pauseBck.png');
        this.load.audio('song', 'asset/audio/Tetris_theme.ogg');
    },

    create : function(){

        this.game.add.tileSprite(0, 0, 1200, 4523, 'background');
        this.game.state.start('MainMenu');
    }
};



Game.MainMenu = function(game){



};

Game.MainMenu.prototype = {

    create : function(){

        
        this.game.add.tileSprite(0, 0, 1200, 800, 'background');    

        this.game.world.bounds.x =21;

        this.game.world.bounds.y = 0;

        this.game.world.bounds.width = 280;

        this.game.world.bounds.height = 590;

        this.playbutton = this.add.button(500, 400,'play',this.playclicked,this,1,0,2);

        this.playbutton.anchor.setTo(0.5,0.5);

        this.tweenplay = this.game.add.tween(this.playbutton).to({y:450},1300,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

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
        music.stop();
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

        buttondown = this.game.add.button( window.innerWidth - 174,window.innerHeight - 60, 'botoncontrol', null, this, 0, 1, 0, 1);
        buttondown.fixedToCamera = true;
        buttondown.events.onInputOver.add(function(){down=true;});
        buttondown.events.onInputOut.add(function(){down=false;});
        buttondown.events.onInputDown.add(function(){down=true;});
        buttondown.events.onInputUp.add(function(){down=false;});

        buttonup = this.game.add.button( window.innerWidth - 174,window.innerHeight - 130, 'botoncontrol', null, this, 0, 1, 0, 1);
        buttonup.fixedToCamera = true;
        buttonup.events.onInputOver.add(function(){up=true;});
        buttonup.events.onInputOut.add(function(){up=false;});
        buttonup.events.onInputDown.add(function(){up=true;});
        buttonup.events.onInputUp.add(function(){up=false;});
        
        

    },

    playclicked : function() {
        
        
        score = 0;
        this.game.state.start('PrimerNivel');
    
        
    },



    update : function(){ 

     if (cursors.up.isDown || up)
    {
   
            this.game.camera.y -= 20;
        }
    
    else if (cursors.down.isDown || down)
    {
        
            this.game.camera.y += 20;
        }
   

}

};

Game.PrimerNivel = function(game){



};



Game.PrimerNivel.prototype = {

    create : function(){

        var fondo = this.game.add.tileSprite(0, 0, 1200, 800, 'fondoprimernivel');

        this.playbutton = this.add.button(500, 450,'jugar',this.playclicked,this,1,0,2);
        this.playbutton.anchor.setTo(0.5,0.5);
        this.tweenplay = this.game.add.tween(this.playbutton).to({y:500},1000,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

        
        var style = { font: "26px Sans-Serif", fill: "white", wordWrap: true,  wordWrapWidth: window.innerWidth, align: "center" };

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

        this.game.world.bounds.width = 250;

        this.game.world.bounds.height = 590;

        this.winimage = this.game.add.sprite(0,0,'win');

        this.playbutton = this.add.button(this.game.world.centerX, 500, 'play',this.playclicked,this,1,0,2);

        this.playbutton.anchor.setTo(0.5,0.5);

        this.tweenplay = this.game.add.tween(this.playbutton).to({y:550},1000,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

        

    },
//botón de play en la vista donde el jugador ganó
    playclicked : function() {

       score = 0;

        this.game.state.start('Mapa');
        music.stop();

    },

};

// create Game function in BasicGame
Game.PlayGame = function(game){

    this.currentlevel;

};




// set Game function prototype
Game.PlayGame.prototype = {

    init: function () {

var score = 0;
var width = 30;
var height = 30;
var force_down_max_time = 500;
var siguiente = true;       
        
var oldsquares = new Array();

var squaresinrow = new Array();

var change_rot_time = 0;

var force_down = 0;

var slide_time = 0;

var music;

var KEYLEFT;

var KEYRIGHT;

var KEYUP;

var KEYDOWN;

var aux = force_down_max_time;
        
        //screen.lockOrientation('landscape');
        // set up input max pointers
        this.input.maxPointers = 1;
        // set up stage disable visibility change
        this.stage.disableVisibilityChange = true;
        // Set up the scaling method used by the ScaleManager
        // Valid values for scaleMode are:
        // * EXACT_FIT
        // * NO_SCALE
        // * SHOW_ALL
        // * RESIZE
        // See http://docs.phaser.io/Phaser.ScaleManager.html for full document
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.setShowAll();
        window.addEventListener('resize', function () {  this.game.scale.refresh();});
        this.game.scale.refresh();
        // If you wish to align your game in the middle of the page then you can
        // set this value to true. It will place a re-calculated margin-left
        // pixel value onto the canvas element which is updated on orientation /
        // resizing events. It doesn't care about any other DOM element that may
        // be on the page, it literally just sets the margin.
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // Force the orientation in landscape or portrait.
        // * Set first to true to force landscape. 
        // * Set second to true to force portrait.
        //  Este lo dejare asi por el momento para que este en landscape pero
        //  posteriormente sera modificado para tener los dos modos
        this.scale.forceOrientation(true, false);
        // Sets the callback that will be called when the window resize event
        // occurs, or if set the parent container changes dimensions. Use this 
        // to handle responsive game layout options. Note that the callback will
        // only be called if the ScaleManager.scaleMode is set to RESIZE.
        this.scale.setResizeCallback(this.gameResized, this);
        // Set screen size automatically based on the scaleMode. This is only
        // needed if ScaleMode is not set to RESIZE.
        this.scale.updateLayout(true);
        // Re-calculate scale mode and update screen size. This only applies if
        // ScaleMode is not set to RESIZE.
       

      

    },

    preload: function () {

        // Here we load the asset required for our preloader (in this case a 
        // background and a loading bar)
      
    },

    create: function () {
    
        this.bck = this.game.add.sprite(0,0,'bck');

        this.game.world.bounds.x = 21;

        this.game.world.bounds.y = 0;

        this.game.world.bounds.width = 280;

        this.game.world.bounds.height = 560;

        /* Implementacion de el tiempo del juego, no funciona aun del todo bien
        *   asi que mejor queda comentada
        timer = this.game.time.create(true);
    */

        this.focusblock = new Block(this.game,this.game.world.centerX,-40,this.chooseblock(),this.choosecolor(),1);

        this.nextblocktype = this.chooseblock();

        this.nextblockcolor = this.choosecolor();

        this.nextblock = new Block(this.game, 412, 185,this.nextblocktype,this.nextblockcolor,0.7);
               
        KEYRIGHT = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

        KEYLEFT = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

        KEYUP = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);

        KEYDOWN = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

        this.scoretextmain = this.add.text(400,60," "+score+" ",{ font: "20px Arial", fill: "#fff", align: "center" });
       
        //Pone el tiempo en pantalla
        //this.timemain = this.add.text(500, 60, " "+timer+" ",{ font: "20px Arial", fill: "#fff", align: "center" });
        /*
         Creacion de las teclas izquierda, derecha, arriba, abajo
         para el touchscreen
         basado en el ejemplo: http://phaser.io/examples/v2/input/virtual-gamecontroller
         */
        buttonleft = this.game.add.button( window.innerWidth - 250,window.innerHeight - 60, 'botoncontrol', null, this, 0, 1, 0, 1);
        buttonleft.fixedToCamera = true;
        buttonleft.events.onInputOver.add(function(){left=true;});
        buttonleft.events.onInputOut.add(function(){left=false;});
        buttonleft.events.onInputDown.add(function(){left=true;});
        buttonleft.events.onInputUp.add(function(){left=false;});

        buttonright = this.game.add.button( window.innerWidth - 102,window.innerHeight - 60, 'botoncontrol', null, this, 0, 1, 0, 1);
        buttonright.fixedToCamera = true;
        buttonright.events.onInputOver.add(function(){right=true;});
        buttonright.events.onInputOut.add(function(){right=false;});
        buttonright.events.onInputDown.add(function(){right=true;});
        buttonright.events.onInputUp.add(function(){right=false;});

        buttondown = this.game.add.button( window.innerWidth - 174,window.innerHeight - 60, 'botoncontrol', null, this, 0, 1, 0, 1);
        buttondown.fixedToCamera = true;
        buttondown.events.onInputOver.add(function(){down=true;});
        buttondown.events.onInputOut.add(function(){down=false;});
        buttondown.events.onInputDown.add(function(){down=true;});
        buttondown.events.onInputUp.add(function(){down=false;});

        buttonup = this.game.add.button( window.innerWidth - 174,window.innerHeight - 130, 'botoncontrol', null, this, 0, 1, 0, 1);
        buttonup.fixedToCamera = true;
        buttonup.events.onInputOver.add(function(){up=true;});
        buttonup.events.onInputOut.add(function(){up=false;});
        buttonup.events.onInputDown.add(function(){up=true;});
        buttonup.events.onInputUp.add(function(){up=false;});
        /* Removemos el boton de reinicio de manera temporal
           en lo que se decide si dejarlo o no
           this.resetbutton = this.add.sprite(530,110,'reset');
           this.resetbutton.inputEnabled = true;
           this.resetbutton.events.onInputDown.add(this.resetbuttondown,this.resetbutton);
           */
        this.pausebutton = this.add.sprite(530,170,'pause');

        this.pauseBck = this.game.add.sprite(0,0);

        this.pausebutton.inputEnabled = true;

        this.pausebutton.events.onInputUp.add(function () {this.game.paused = true; this.pauseBck = this.game.add.sprite(0,0,'bckPause');},this);
        
        this.game.input.onDown.add(function () {if(this.game.paused)this.game.paused = false; this.pauseBck.destroy(); },this);

        //timer.loop(90000, this.timerzero, this);

        //timer.start();

        oldsquares.length = 0;

        squaresinrow.length = 0;

        score = 0;

        //time = 25;

        

    },

    botonCorrecto : function() {
        console.log(score);
        squaresinrow[19] = 9;
        score+=100;
        //time+=15;
        siguiente = true;
        text.destroy();
        texta.destroy();
        textb.destroy();
        textc.destroy();
    },

    botonIncorrecto : function() {
        console.log(score);
        //time-= 5;
        score-=100;
        aux = aux - 100;
        force_down_max_time -= 100;
    },
/*
    timerzero : function(){
        this.game.state.start('Lose');
        timer.stop();
        music.stop();
    },*/

/*

    resetbuttondown : function(){

        //this.game.state.start('Mapa');
        
        *Estaba probando algo con la musica y no me quería tomar 
        *la molestia de juntar 1900 puntos en el tetris.
        *No borrar para posibles futuras pruebas :)
        score += 100;
        
       // music.stop();

    },*/

    chooseblock : function(){

        var x = Math.floor(Math.random()*7);

        switch(x){

            case 0 : return 'o';

            case 1 : return 't';

            case 2 : return 'l';

            case 3 : return 'j';

            case 4 : return 'i';

            case 5 : return 's';

            case 6 : return 'z';

        }

    },



    choosecolor : function(){

        return Math.floor(Math.random()*5);

    },



    checkcompletedlines : function(){
        for(var i=0;i<20;i++){
                squaresinrow[i]=0;

        }

        var top = this.game.world.bounds.height - 19*height - height/2;

        var num_rows,rows;



        for(var i=0;i<oldsquares.length;i++){

            row = (oldsquares[i].y - top)/height;

            squaresinrow[row]++;

        }



        for(var i=0;i<20;i++){

            if(squaresinrow[i]==9){

                console.log(score);

                score+=100;

                for(var j=0;j<oldsquares.length;j++){

                    if((oldsquares[j].y - top)/height==i){

                        oldsquares[j].destroy();

                        oldsquares.splice(j,1);

                        j--;

                    }

                }

            }

        }



        for(var i=0;i<oldsquares.length;i++){

            for(var j=0;j<20;j++){

                if(squaresinrow[j]==9){

                    row = (oldsquares[i].y - top)/height;

                    if(row<j){

                        oldsquares[i].y += height;

                    }

                }

            }

        }

    },
      // adjust: function() {
      //    var divgame = document.getElementById("gameContainerinner"); 
      //     divgame.style.width = window.innerWidth + "px"; 
      //     divgame.style.height = window.innerHeight + "px";
      // },
      








    gameResized: function (width, height) {

        // This could be handy if you need to do any extra processing if the 
        // game resizes. A resize could happen if for example swapping 
        // orientation on a device or resizing the browser window. Note that 
        // this callback is only really useful if you use a ScaleMode of RESIZE 
        // and place it inside your main game state.
        // Aqui se haran las modificaciones para cuando se cambie de landcape a 
        // a portrait y viceversa
        


    },

    update : function(){
        var style = { font: "25px Arial", fill: "white", wordWrap: true, align: "justify", wordWrapWidth: 400 };
        var y = Math.floor(Math.random()*4);
        if (siguiente) {
        switch(y){
            case 0 : 
                var pregunta = '¿Qué lamentaba Frankenstein para partir \n de Ingoltadt a estudiar?';
                var respuestaApregunta1= "Contraer la fiebre Escarlata";
                var respuestaBpregunta1= "La muerte de su madre";
                var respuestaCpregunta1= "La muerte de M. Waldman";
                text = this.game.add.text(670, 50, pregunta , style);
                texta = this.game.add.text(700, 150, respuestaApregunta1 , style);
                textb = this.game.add.text(700, 250, respuestaBpregunta1 , style);
                textc = this.game.add.text(700, 350, respuestaCpregunta1 , style);
                this.botona= this.add.button(665, 150,'botona',this.botonIncorrecto,this,1,0,2);
                this.botonb= this.add.button(665, 250,'botonb',this.botonCorrecto,this,1,0,2);
                this.botonx= this.add.button(665, 350,'botonx',this.botonIncorrecto,this,1,0,2);
                siguiente = false;
                break;
            case 1:
                var pregunta = '¿Qué enfermedad contrajo Elizabeth?';
                var respuestaApregunta2= "Viruela";     
                var respuestaBpregunta2 = "Influenza";      
                var respuestaCpregunta2 = "Fiebre Escarlata";
                text = this.game.add.text(670, 50, pregunta , style);
                texta = this.game.add.text(700, 150, respuestaApregunta2 , style);
                textb = this.game.add.text(700, 250, respuestaBpregunta2 , style);
                textc = this.game.add.text(700, 350, respuestaCpregunta2 , style);
                this.botona= this.add.button(665, 150,'botona',this.botonIncorrecto,this,1,0,2);
                this.botonb= this.add.button(665, 250,'botonb',this.botonIncorrecto,this,1,0,2);
                this.botonx= this.add.button(665, 350,'botonx',this.botonCorrecto,this,1,0,2);
                siguiente = false;
                break;
            case 2:
                var pregunta = '¿Cual era el deseo de Caroline en su \n lecho de muerte?';
                var respuestaApregunta3 = "Que se casara Frankenstein con Elizabeth";
                var respuestaBpregunta3 = "Que volviera a Ingoltadt";
                var respuestaCpregunta3 = "Continuar sus estudios sobre \n la chispa de la vida";
                text = this.game.add.text(670, 50, pregunta , style);
                texta = this.game.add.text(700, 150, respuestaApregunta3 , style);
                textb = this.game.add.text(700, 250, respuestaBpregunta3 , style);
                textc = this.game.add.text(700, 350, respuestaCpregunta3 , style);
                this.botona= this.add.button(665, 150,'botona',this.botonCorrecto,this,1,0,2);
                this.botonb= this.add.button(665, 250,'botonb',this.botonIncorrecto,this,1,0,2);
                this.botonx= this.add.button(665, 350,'botonx',this.botonIncorrecto,this,1,0,2);
                siguiente = false;
                break;
            case 3:
                var pregunta = '¿Quien cuidaba de Caroline cuando cayó enferma?';
                var respuestaApregunta4 = "Frankenstein";           
                var respuestaBpregunta4 = "Elizabeth";          
                var respuestaCpregunta4 = "M. Waldman";
                text = this.game.add.text(670, 50, pregunta , style);
                texta = this.game.add.text(700, 150, respuestaApregunta4 , style);
                textb = this.game.add.text(700, 250, respuestaBpregunta4 , style);
                textc = this.game.add.text(700, 350, respuestaCpregunta4 , style);
                this.botona= this.add.button(665, 150,'botona',this.botonIncorrecto,this,1,0,2);
                this.botonb= this.add.button(665, 250,'botonb',this.botonCorrecto,this,1,0,2);
                this.botonx= this.add.button(665, 350,'botonx',this.botonIncorrecto,this,1,0,2);
                siguiente = false;
                break;
        }
    }



        if(this.game.time.now>force_down)

        {

            if(this.focusblock.wallcollide(oldsquares,'down')!=true)    this.focusblock.move('down');

            else{

                for(var i=0;i<4;i++){

                    oldsquares.push(this.focusblock.squares[i]);

                }

                this.focusblock = new Block(this.game,this.game.world.centerX,-40,this.nextblocktype,this.nextblockcolor,1);

                this.nextblocktype = this.chooseblock();

                this.nextblockcolor = this.choosecolor();

                for(var i=0;i<4;i++){

                    this.nextblock.squares[i].destroy();
                }

                this.nextblock = new Block(this.game, 412, 185,this.nextblocktype,this.nextblockcolor,0.7);

                if(this.focusblock.wallcollide(oldsquares,'down')==true) { this.game.state.start('Lose');}

            }

            this.checkcompletedlines();

            this.scoretextmain.setText(score);

           // this.timemain.setText(26 - timer.totalElapsedSeconds());

            if(score>1900){ this.game.state.start('Win');

            }

            // if (time == 0) {this.game.state.start('Lose');}

            force_down = this.game.time.now + force_down_max_time;

        }

        if(KEYRIGHT.isDown || right){

            if(this.game.time.now>change_rot_time){

            if(this.focusblock.wallcollide(oldsquares,'right')!=true)   this.focusblock.move('right');

            change_rot_time = this.game.time.now + 100;

            }

        }

        if(KEYLEFT.isDown || left){

            if(this.game.time.now>change_rot_time){

            if(this.focusblock.wallcollide(oldsquares,'left')!=true)    this.focusblock.move('left');

            change_rot_time = this.game.time.now + 100;

            }

        }

        if(KEYUP.isDown|| up){

            if(this.game.time.now>change_rot_time){

                if(this.focusblock.rotatecollide(oldsquares)!=true)     this.focusblock.rotate(); 

                change_rot_time = this.game.time.now + 100;

            }

        }

        if(KEYDOWN.isDown || down){
            force_down_max_time = 50;
        } else {
            force_down_max_time = aux;
        }
    }

};



