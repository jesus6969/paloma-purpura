var juego = new Phaser.Game(window.innerWidth, window.innerHeight,Phaser.CANVAS,"b_juego",{ preload: preload, create: create, update: update, render: render });

juego.state.add("preload",preloader);
juego.state.add("menu",menu);
juego.state.add("menuJ",menuJ);
juego.state.add("comida",comida);

juego.state.start("preload");