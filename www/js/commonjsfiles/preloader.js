Game.preloader=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader.prototype={
	preload:function(){
		
		this.load.atlas('backbtn','assets/commonAssets/backbtn.png' ,null,NS_INT_7_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,NS_INT_7_G6_JSON.speakerJson);
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png',null,NS_INT_7_G6_JSON.starAnimJson);
        this.load.atlas('replay','assets/commonAssets/reply.png' ,null,NS_INT_7_G6_JSON.replyJson);
        this.load.atlas('btn','assets/commonAssets/btn.png',null,NS_INT_7_G6_JSON.btnJson);
        
        this.load.image('tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('background','assets/commonAssets/bg.png');
        this.load.image('navBar','assets/commonAssets/navBar.png');
        this.load.image('timebg','assets/commonAssets/timebg.png');
        this.load.image('topicOutline','assets/commonAssets/topicOutline.png');

        this.load.atlas('Tick', 'assets/gradeAssets/NS-INT-7-G6/tick.png', null,NS_INT_7_G6_JSON.tickJson);
            
        
        this.load.image('bg', 'assets/gradeAssets/NS-INT-7-G6/Bg.png');
         
        this.load.atlas('ScreenTextBox','assets/gradeAssets/NS-INT-7-G6/ScreenTextBox.png',null,NS_INT_7_G6_JSON.ScreenTextBox);
        
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, NS_INT_7_G6_JSON.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, NS_INT_7_G6_JSON.nextbtnJson);


        this.load.image('Appletray','assets/gradeAssets/NS-INT-7-G6/Apple Blocks.png');
        this.load.image('Eggtray','assets/gradeAssets/NS-INT-7-G6/Egg Blocks.png');

        this.load.atlas('Egg','assets/gradeAssets/NS-INT-7-G6/egg.png',null,NS_INT_7_G6_JSON.eggJson);
        this.load.atlas('Apple','assets/gradeAssets/NS-INT-7-G6/apple.png',null,NS_INT_7_G6_JSON.appleJson);
        this.load.image('Basket','assets/gradeAssets/NS-INT-7-G6/basket.png');
        this.load.image('BasketF','assets/gradeAssets/NS-INT-7-G6/Front part.png');
        this.load.image('BasketB','assets/gradeAssets/NS-INT-7-G6/Back part.png');
        this.load.image('NumberBox','assets/gradeAssets/NS-INT-7-G6/Number Box.png');
        this.load.atlas('eggBasket', 'assets/gradeAssets/NS-INT-7-G6/eggBasket.png',null, NS_INT_7_G6_JSON.eggBasketJson);
        this.load.atlas('appleBasket', 'assets/gradeAssets/NS-INT-7-G6/appleBasket.png',null, NS_INT_7_G6_JSON.appleBasketJson);
        // this.load.atlas('tickButton', 'assets/gradeAssets/NS-INT-7-G6/tick.png',null, NS_INT_7_G6_JSON.appleBasketJson);
        this.load.atlas('Tick', 'assets/gradeAssets/NS-INT-7-G6/tick.png', null,NS_INT_7_G6_JSON.tickJson);
       
        this.load.atlas('ThumbsUp','assets/gradeAssets/NS-INT-7-G6/thumbs_up.png',null, NS_INT_7_G6_JSON.thumbsUp);
        this.load.atlas('ThumbsDown','assets/gradeAssets/NS-INT-7-G6/thumbs_down.png',null, NS_INT_7_G6_JSON.thumbsDown);
	},

	create:function(){
		
		this.state.start('NS_INT_7_G6level1');
        
    },
}