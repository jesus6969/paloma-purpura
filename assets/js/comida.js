var comida = {
    
    create: function(){
        
    bg = this.add.tileSprite(0,0,320,500,"bg");
    bg.frame=1;
        
    ventanaP = this.add.sprite(juego.width/2,juego.height/2-200,"ventanaP");  
    ventanaP.anchor.setTo(0.5);    
    ventanaP.scale.setTo(0.5);    
        
botonB = this.add.button(juego.width/2-120,juego.height/2+140,"R_D",this.back,this,1,0);
    botonB.anchor.setTo(0.5)  
    
    },
    update: function(){
        
        
        
    },
    back: function(){
        
        this.state.start("menu");
        
    }
    
    
    
}