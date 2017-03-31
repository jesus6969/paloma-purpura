var juego = new Phaser.Game(300,500,Phaser.AUTO,"b_juego");

juego.state.add("preload",preloader);
juego.state.add("menu",menu);
juego.state.add("menuJ",menuJ);
juego.state.add("comida",comida);

juego.state.start("preload");