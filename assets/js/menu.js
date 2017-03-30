var n = 0;

var menu = {

    create: function(){
    
        this.world.setBounds(0,0,300,475);    
        
    bg = this.add.tileSprite(0,0,320,500,"bg");         
    
        
boton_irJ = this.add.button(juego.width/2-100,juego.height/2-205,"botonesP",this.irjuegos,this);
    boton_irJ.anchor.setTo(0.5);    
    boton_irJ.scale.setTo(0.4);  
    boton_irJ.frame=1;
        

boton_irR = this.add.button(juego.width/2+120,juego.height/2-200,"botonesP",this.ircomida,this);
    boton_irR.anchor.setTo(0.5);    
    boton_irR.scale.setTo(0.4);  
    boton_irR.frame=0;        
        
        
    paloma = this.add.sprite(juego.width/2,juego.height/2+155,"paloma"); 
        paloma.anchor.setTo(0.5);
        paloma.scale.setTo(0.3);
        
    paloma.animations.add("baile",[0,1,2,3,2,1],15,true);    
    
    this.physics.p2.enable([paloma], false);   
        
        
    toque = juego.input.onDown.add(this.pD,this);
    toque = juego.input.onUp.add(this.pU,this);
              
        
    },
    update: function(){

 
       switch(n) {
        case 1:    
        paloma.animations.play("baile");    
        break;    
        default:
        paloma.frame=0;    
    }
        
        
    },
    
    irjuegos: function(){
      
        this.state.start("menuJ");
        
    },
    ircomida: function(){
        
        this.state.start("comida");
        
    },
    
    
    pD: function(){
     n = 1;
        
    },
    pU: function(){
        
        n=0;
        
    },

}