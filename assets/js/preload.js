var paloma;
var bg;
var objetos;
var toque;

var preloader = {
    preload: function(){
        
        this.load.spritesheet("paloma", "rcs/paloma.png",380,454,4);
        this.load.spritesheet("palomabotones","rcs/palomabotones.png",50,50,5);
        this.load.spritesheet("bg","rcs/bg.png",300,500,3);
        this.load.spritesheet("botonesP","rcs/botonesA.png",220,250,2);
        this.load.spritesheet("R_D","rcs/botones.png",50,50,4);
        this.load.image("ventanaP","rcs/ventanasP.png");
        this.load.image("ventanaG","rcs/ventanasG.png");
        
        
    },
    create: function(){
    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.friction = 5;    
    this.physics.p2.gravity.y=+1200;            
    this.world.setBounds(0,0,300,475);    
    juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    juego.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    
        
        
        this.state.start("menu");    
        
        
    },
}