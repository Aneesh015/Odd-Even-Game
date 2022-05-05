var Game={};
Game.boot=function(Game){

};
var defaultLanguage = 'en';


Game.boot.prototype={
	init:function(){

		this.input.maxPointers=1;
		this.input.mouse.enabled = false;

		this.stage.disableVisibilityChange=true;

	},

	preload:function(){
		 
        
	},

	create:function(){

		
		
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.updateLayout(true);
        this.scale.forceOrientation(false, true);
		
		this.game.add.text(0, 0, "hack", {font:"1px myfont", fill:"#FFFFFF"});
		this.game.add.text(0, 0, "jack", {font:"1px Akzidenz-Grotesk BQ", fill:"#000000"});

		//this.sound.setDecodedCallback([  ], function(){
		
		this.state.start('preloader');
			
			//}, this);

	}
}