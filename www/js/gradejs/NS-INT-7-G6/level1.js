Game.NS_INT_7_G6level1 = function () { };


Game.NS_INT_7_G6level1.prototype =
{

    init: function (game) {
        _this = this;
        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", "sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.oddquestionSound = document.createElement('audio');
        _this.oddquestionSoundsrc = document.createElement('source');
        _this.oddquestionSoundsrc.setAttribute("src", "questionSounds\NS-INT-10-G6\English\odd.mp3");
        _this.oddquestionSound.appendChild(_this.clickSoundsrc);

        _this.evenquestionSound = document.createElement('audio');
        _this.evenquestionSoundsrc = document.createElement('source');
        _this.evenquestionSoundsrc.setAttribute("src", "questionSounds\NS-INT-10-G6\English\even.mp3");
        _this.evenquestionSound.appendChild(_this.clickSoundsrc);

        _this.arrangeinpairs = document.createElement('audio');
        _this.arrangeinpairssrc = document.createElement('source');
        _this.arrangeinpairs.setAttribute("src", "questionSounds\NS-INT-10-G6\English\paris.mp3");
        _this.arrangeinpairs.appendChild(_this.arrangeinpairssrc);

        _this.oddquestionSound = document.createElement('audio');
        _this.oddquestionSoundsrc = document.createElement('source');
        _this.oddquestionSoundsrc.setAttribute("src", "questionSounds/NS-INT-10-G6/English/odd.mp3");
        _this.oddquestionSound.appendChild(_this.oddquestionSoundsrc);

        _this.evenquestionSound = document.createElement('audio');
        _this.evenquestionSoundsrc = document.createElement('source');
        _this.evenquestionSoundsrc.setAttribute("src", "questionSounds/NS-INT-10-G6/English/even.mp3");
        _this.evenquestionSound.appendChild(_this.evenquestionSoundsrc);

        _this.hatchSound = document.createElement('audio');
        _this.hatchSoundsrc = document.createElement('source');
        _this.hatchSoundsrc.setAttribute("src", "sounds/Hatch.mp3");
        _this.hatchSound.appendChild(_this.hatchSoundsrc);

    },


    create: function (game) {
        console.log("Beginning of Create*")
        _this.AnsTimerCount = 0;
        _this.count1 = 0;

        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        _this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        _this.first_evaluation = 0;
        _this.numpad_present = 0;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.visible = false;
        _this.speakerbtn.events.onInputDown.add(function () {
            // console.log("ENterd speaker");
            // _this.rightbtn_is_Clicked == false;
            // telInitializer.tele_interactEvent("TOUCH", "speaker");
            // if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
            //     _this.speakerbtn.inputEnabled = false;
            //     console.log("Speaker button clicked");
            //     _this.speakerbtn.input.useHandCursor = false;
            //     if (_this.array_numbertype[0] == 0 || _this.array_numbertype[0] == 2)
            //     _this.oddquestionSound.play();
            //     else
            //     _this.evenquestionSound.play();

            //     _this.speakerbtnClicked = false;
            //     // _this.time.events.add(4000, function () {

            //     //     // _this.EnableVoice();

            //     // });
            // }


            if (_this.array_numbertype[0] == 0 || _this.array_numbertype[0] == 2)
                _this.oddquestionSound.play();
            else
                _this.evenquestionSound.play();


        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);

        _this.objGroup;
        //            _this.numGroup;
        //            _this.objGroup1;
        //            _this.repeat1=1;

        //            _this.selectedAns1 = "";
        //            _this.selectedAns2 = "";
        //            _this.selectedAns3 = "";

        //            _this.appleTray=_this.add.image(35,180,"Appletray");
        //            _this.appleTray.visible=false;
        //            _this.eggTray=_this.add.image(35,180,"Eggtray");
        //            _this.eggTray.visible=true;
        _this.QuestionBox = _this.add.image(865, 215, "NumberBox");

        //            _this.BasketB=_this.add.image(40,447,"BasketB");
        //            _this.BasketB.visible=false;
        //            _this.BasketF=_this.add.image(40,450,"BasketF");
        //            _this.BasketF.visible=false;

        _this.Egg = _this.add.sprite(64, 203, 'Egg');
        _this.Egg = _this.add.sprite(114, 203, 'Egg');
        _this.Egg2 = _this.add.sprite(64, 253, 'Egg');
        _this.Egg2.frame = 0;

        //  moveApple1=_this.add.sprite(40,350,'Apple');


        _this.array_egg_x = [64, 114, 164, 214, 264, 314, 364, 414, 464, 514, 564, 614, 664, 714, 764];
        _this.array_apple_x = [67, 117, 167, 217, 267, 317, 367, 417, 467, 517, 567, 617, 667, 717, 767];

        _this.eggBasketx = [40, 43, 46, 49, 52, 55, 58];
        _this.eggBaskety1 = 450;
        _this.eggBaskety2 = 455;

        _this.array_traytype = [0, 1];
        _this.array_numbertype = [0, 1, 2, 3];
        _this.array_oddnumber = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
        _this.array_evennumber = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

        _this.object_present_box1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        _this.object_present_box2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        _this.object_sign_box1 = [];
        _this.object_sign_box2 = [];

        _this.obj_group1 = _this.add.group();
        _this.obj_group2 = _this.add.group();

        _this.getQuestion();


    },



    shuffle: function (array) {
        //console.log('hi');
        var currentIndex = array.length;
        var temporaryValue, randomIndex;
        //console.log('_this.currentIndex');

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    getQuestion: function (target) {
        if (_this.timer) {
            _this.timer.stop();
            _this.timer = null;
        }

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function () {
            _this.AnsTimerCount++;
        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = _this.time.create(false);

        _this.timer1.loop(1000, function () {
            _this.updateTimer();
        }, _this);

        _this.timer1.start();

        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;
        //_this.randomizing_tray();

        //* randomize the numbers, egg/apple array and the audio question to be asked

        this.start();
        //_this.gotoChangingtrays();


    },

    start: function () {
        _this.randomizing_elements();

        _this.gotoOddEven();
    },

    //        gotoChangingtrays:function()
    //        {   
    //            var i=0;
    //            _this.traychosen=_this.array_traytype[i];
    //            //* Remove next line. Testing**************************
    //            _this.traychosen=1;
    //            
    //
    //            if(_this.traychosen==0)
    //            {
    //                _this.appleTray.visible=true; 
    //                console.log("apple");
    //            }
    //            else
    //            {
    //                _this.eggTray.visible=true;
    //                console.log("egg");
    //            }
    //            
    //            _this.time.events.add(2000, _this);
    //
    //            _this.randomizing_numbertype();
    //            console.log("e1g");
    //
    //            _this.gotoChangingtypes();
    //            console.log("e2g");
    //
    //            _this.callForBasket();
    //            
    //            console.log("at the end of changing trays");
    //
    //        },
    //
    //        gotoChangingtypes:function()
    //        { 
    //            if(_this.array_numbertype[0]==3 || _this.array_numbertype[0]==2 )
    //            {
    //                //  var typechosen=0;
    //                _this.randomizing_evennumbers();
    //                console.log("Enterd");
    //                _this.question=_this.array_evennumber[0];
    //                console.log("The question is "+_this.question);
    //            }
    //            else 
    //            {
    //            //  var typechosen=0;
    //                _this.randomizing_oddnumbers();
    //                _this.question=_this.array_oddnumber[0];
    //                console.log("The question is "+_this.question);
    //            }
    //         
    //            _this.AskQuestion();
    //        },


    gotoOddEven: function () {
        _this.AskQuestion();

        //            _this.OddEvenAudio = _this.xxxArray[ use index varialbe used for this];
        _this.EggOrApple = _this.array_traytype[0];  //* change to an index. (to be incremented later)

        //* check if the choosen _this.OddEvenNumber is odd or even by taking modulus (remainder)
        // if (_this.question%2 == 0)
        // {
        //     console.log("it is even");
        //     _this.IsEvenOdd = 0;
        // }
        // else
        // {
        //     console.log("it is odd");
        //     _this.IsEvenOdd = 1;
        // }

        _this.traychosen = _this.array_traytype[0]; //* change to an index which should be ++ later

        _this.readyToPlace();
    },

    AskQuestion: function () {
        _this.enterTxt = _this.add.text(895, 247, "" + _this.question, { fontSize: '30px' });
        _this.enterTxt.anchor.setTo(0.5);
        // _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#F04C26';
        _this.enterTxt.fontWeight = 'normal';
        //    _this.QuestionBox.addChild(_this.enterTxt);
        //    _this.enterTxt.visible=true;
    },

    //* shuffle the number array and egg/apple array for selecting randomly.
    randomizing_elements: function () {
        //* use the number type array and shuffle it. At 0, Value of 2/3 - ask Even; else ask Odd.
        _this.array_numbertype = _this.shuffle(_this.array_numbertype);

        if (_this.array_numbertype[0] == 3 || _this.array_numbertype[0] == 2) {
            _this.array_evennumber = _this.shuffle(_this.array_evennumber);
            _this.question = _this.array_evennumber[0];
            _this.IsEvenOdd = 0;
            console.log("Even. The question is " + _this.question);
        }
        else {
            _this.array_oddnumber = _this.shuffle(_this.array_oddnumber);
            _this.question = _this.array_oddnumber[0];
            _this.IsEvenOdd = 1;
            console.log("Odd. The question is " + _this.question);
        }

        //* use the egg or apple array and shuffle it
        _this.array_traytype = _this.shuffle(_this.array_traytype);


        //* use the question audio array and shuffle it
        //******************
    },

    //        randomizing_tray:function()
    //        {
    //            _this.array_traytype=_this.shuffle(_this.array_traytype);
    //        },
    //
    //        randomizing_numbertype:function()
    //        desto
    //            //randomising the four elemnted array that chooses if the question to be asked later is odd or even
    //            _this.array_numbertype=_this.shuffle(_this.array_numbertype); 
    //            for(let i=0;i<4;i++)
    //            {
    //                console.log(" "+_this.array_numbertype[i]);
    //            }  
    //            console.log("fekf");
    //        },
    //
    //        randomizing_oddnumbers:function()
    //        {
    //            _this.array_oddnumber=_this.shuffle(_this.array_oddnumber);   
    //        },
    //
    //        randomizing_evennumbers:function()
    //        {
    //            _this.array_evennumber=_this.shuffle(_this.array_evennumber);   
    //        },

    //        callForBasket:function()
    //        {
    //            _this.BasketB.visible=true;
    //            _this.BasketF.visible=true;
    //        },

    readyToPlace: function () {
        _this.arrangeinpairs = document.createElement('audio');
        _this.arrangeinpairssrc = document.createElement('source');
        _this.arrangeinpairs.setAttribute("src", "questionSounds/NS-INT-10-G6/English/Arrange in Pairs.mp3");
        _this.arrangeinpairs.appendChild(_this.arrangeinpairssrc);
        _this.arrangeinpairs.play();

        // _this.array_traytype[0]=1; //**************** to be removed...for testing
        // _this.traychosen=1; //**************** to be removed...for testing

        if (_this.array_traytype[0] == 1) {
            _this.Basket = _this.add.sprite(35, 407, "eggBasket");
            _this.Basket.frame = 13;
            _this.time.events.add(2000, function () {
                _this.Basket.frame = 14;
                _this.Basket.inputEnabled = true;
            });

            // _this.Basket.input.useHandCursor=true;
            _this.Basket.events.onInputDown.add(_this.placeEgg_Apple); //add onclick event.

            _this.eggTray = _this.add.image(35, 180, "Eggtray");


        }
        else {
            console.log('placing apple basket')
            _this.Basket = _this.add.sprite(35, 407, "appleBasket");
            _this.Basket.frame = 13;
            _this.time.events.add(2000, function () {
                _this.Basket.frame = 14;
                _this.Basket.inputEnabled = true;
            });
            console.log("Enabling basket click");

            // _this.Basket.input.useHandCursor=true;
            _this.Basket.events.onInputDown.add(_this.placeEgg_Apple); //add onclick event.

            _this.appleTray = _this.add.image(35, 180, "Appletray");
            console.log("Appletray");
            //* need to show apple filled basket and other things.
        }

    },

    placeEgg_Apple: function () {
        _this.Basket.frame = 13;
        //* prevent any more clicks
        _this.Basket.events.onInputDown.removeAll();

        _this.eggGroup = _this.add.group();
        _this.eggTweenGroup = _this.add.group();
        _this.appleGroup = _this.add.group();
        _this.appleTweenGroup = _this.add.group();

        //* if current random selection is egg, then tween eggs else apples to the tray
        if (_this.EggOrApple == 1) {
            console.log("it is egg!!");
            _this.TweenEggs();
        }
        else {
            console.log("it is apples!!");
            _this.TweenApples();


        }

        //*********** 

    },

    TweenEggs: function () {
        var tween_LoopCount = 0;
        //* determine loop count while tweening.
        //            if (_this.IsEvenOdd == 0)
        //            {
        tween_LoopCount = Math.floor(_this.question / 2);
        let tween_LoopCounthalf = Math.floor((tween_LoopCount / 2));

        //            }
        //            else
        //            {
        //                tween_LoopCount = Math.floor(_this.question/2);
        //            }
        //            
        for (let i = 0; i < tween_LoopCount; i++) {
            _this.time.events.add(1000 * i, function () {
                _this.clickSound.play();
                let moveEgg1 = _this.add.sprite(40, 450, 'Egg');
                let moveEgg2 = _this.add.sprite(60, 450, 'Egg');

                _this.eggGroup.addChild(moveEgg1);
                _this.eggGroup.addChild(moveEgg2);



                let clickMoveAction1 = _this.add.tween(moveEgg1);
                let clickMoveAction2 = _this.add.tween(moveEgg2);
                clickMoveAction1.to({ x: _this.array_egg_x[i], y: 203 }, 2000, 'Quart', true, 0);
                clickMoveAction2.to({ x: _this.array_egg_x[i], y: 253 }, 2000, 'Quart', true, 0);


                if (i >= tween_LoopCounthalf) {
                    _this.Basket.frame = 7;
                    xyz = tween_LoopCount - 2;
                    abc = tween_LoopCount - 1;
                    if (i >= xyz && i < abc) { _this.Basket.frame = 4; }
                    else if (i == abc) {
                        if (_this.IsEvenOdd == 0)
                            _this.Basket.frame = 0;
                        else
                            _this.Basket.frame = 1;
                    }

                }


                //************ Change the basket frame in stages to show eggs reducing

            });

        }

        //* move the last egg if the current question is odd.
        if (_this.IsEvenOdd == 1) {
            _this.time.events.add(1000 * tween_LoopCount, function () {
                _this.clickSound.play();


                _this.moveEgg1 = _this.add.sprite(40, 450, 'Egg');
                _this.eggGroup.addChild(_this.moveEgg1);
                let clickMoveAction1 = _this.add.tween(_this.moveEgg1);
                clickMoveAction1.to({ x: _this.array_egg_x[tween_LoopCount], y: 203 }, 2000, 'Quart', true, 0);
                
                _this.time.events.add(3000, function () {
                    _this.hatchSound.play();
                    _this.eggfinal = _this.eggGroup.getChildAt(tween_LoopCount * 2).frame = 1;
                    
                });
                _this.time.events.add(40, function () { _this.Basket.frame = 0; });
            });


            //******* the last odd egg should hatch next
        }
        _this.timedelay = tween_LoopCount;
        _this.questionAsk();
    },

    TweenApples: function () {
        var tween_LoopCount = 0;
        //* determine loop count while tweening.
        //            if (_this.IsEvenOdd == 0)
        //            {
        tween_LoopCount = Math.floor(_this.question / 2);
        tween_LoopCounthalf = Math.floor(tween_LoopCount / 2);
        //            }
        //            else
        //            {
        //                tween_LoopCount = Math.floor(_this.question/2);
        //            }
        //            
        for (let i = 0; i < tween_LoopCount; i++) {
            _this.time.events.add(1000 * i, function () {
                _this.clickSound.play();
                let moveApple1 = _this.add.sprite(40, 450, 'Apple');
                let moveApple2 = _this.add.sprite(60, 450, 'Apple');

                _this.appleGroup.addChild(moveApple1);
                _this.appleGroup.addChild(moveApple2);

                let clickMoveAction1 = _this.add.tween(moveApple1);
                let clickMoveAction2 = _this.add.tween(moveApple2);
                clickMoveAction1.to({ x: _this.array_apple_x[i], y: 203 }, 2000, 'Quart', true, 0);
                clickMoveAction2.to({ x: _this.array_apple_x[i], y: 253 }, 2000, 'Quart', true, 0);

                if (i >= tween_LoopCounthalf) {

                    _this.Basket.frame = 7;
                    xyz = tween_LoopCount - 2;
                    abc = tween_LoopCount - 1;
                    if (i >= xyz && i < abc) { _this.Basket.frame = 4; }
                    else if (i == abc) {
                        if (_this.IsEvenOdd == 0)
                            _this.Basket.frame = 0;
                        else
                            _this.Basket.frame = 1;
                    }

                }

                //************ Change the basket frame in stages to show eggs reducing

            });

        }

        //* move the last egg if the current question is odd.
        if (_this.IsEvenOdd == 1) {
            // _this.Basket.frame=0;
            _this.time.events.add(1000 * tween_LoopCount, function () {
                _this.clickSound.play();

                _this.moveApple1 = _this.add.sprite(40, 450, 'Apple');
                _this.appleGroup.addChild(_this.moveApple1);
                let clickMoveAction1 = _this.add.tween(_this.moveApple1);
                clickMoveAction1.to({ x: _this.array_apple_x[tween_LoopCount], y: 203 }, 2000, 'Quart', true, 0);
                
                _this.time.events.add(3000, function () {
                    _this.hatchSound.play();
                    _this.applefinal = _this.appleGroup.getChildAt(tween_LoopCount * 2).frame = 1;
                    
                });
                _this.time.events.add(40, function () { _this.Basket.frame = 0; });
            });
            //******* the last odd egg should hatch next
        }
        _this.timedelay = tween_LoopCount;
        _this.questionAsk();
    },

    questionAsk: function () {
        console.log("the given array type is " + _this.array_numbertype[0]);

        if (_this.array_numbertype[0] == 0 || _this.array_numbertype[0] == 2) {
            let evaluation = 0;
            let timeforques=1000 * _this.timedelay + 1000;
            _this.time.events.add(timeforques, function () {

                _this.time.events.add(3000, function () {
                    _this.oddquestionSound.play();
                    _this.speakerbtn.visible = true;
                    _this.thumbsUp.visible = true;
                    _this.thumbsDown.visible = true;
                });
            });
            console.log("Is the given number,odd?");

        }
        else {
            let evealuation = 1;
            let timeforques=1000 * _this.timedelay + 1000;
            _this.time.events.add(timeforques, function () {


                _this.time.events.add(3000, function () {
                    _this.evenquestionSound.play();
                    _this.speakerbtn.visible = true;
                    _this.thumbsUp.visible = true;
                    _this.thumbsDown.visible = true;
                });
                console.log("Is the given number,even?");

            });
        }



        _this.thumbsUp = _this.add.sprite(770, 380, 'ThumbsUp');
        _this.thumbsDown = _this.add.sprite(850, 380, 'ThumbsDown');
        _this.thumbsUp.visible = false;
        _this.thumbsDown.visible = false;
        _this.thumbsUp.inputEnabled = true;
        _this.thumbsDown.inputEnabled = true;




        _this.thumbsUp.events.onInputDown.add(function () {

            if (_this.thumbsUp.frame == 0) {
                _this.thumbsUp.frame = 1;
                console.log("frame swap");
            }
            else
                _this.thumbsUp.frame = 0;
            _this.thumbsDown.frame = 0;

            if (_this.thumbsUp.frame == 1 || _this.thumbsDown.frame == 1) {
                _this.tickButton.visible = true;
            }
            else if (_this.thumbsUp.frame == 0 && _this.thumbsDown.frame == 0) {
                _this.tickButton.visible = false;

                console.log("Vanish");
            }
            if (_this.array_numbertype[0] == 0 || _this.array_numbertype[0] == 2) {
                if (_this.question % 2 == 0) {
                    _this.answer = false;
                    console.log("Try again");
                    _this.time.events.add(10000, function () {
                        _this.thumbsUp.frame = 0;
                    });
                }
                else {
                    _this.answer = true;
                    console.log("Correct");
                }
            }
            else {
                if (_this.question % 2 == 0) {
                    _this.answer = true;
                    console.log("Correct");
                }
                else {
                    _this.answer = false;
                    console.log("Try Again");
                    _this.time.events.add(10000, function () {
                        _this.thumbsUp.frame = 0;
                    });
                }
            }
            if (_this.thumbsUp.frame == 1)
                _this.thumbsDown.frame = 0;



        });
        _this.thumbsDown.events.onInputDown.add(function () {

            if (_this.thumbsDown.frame == 0) {
                _this.thumbsDown.frame = 1;
                console.log("frame swap");
            }
            else
                _this.thumbsDown.frame = 0;
            _this.thumbsUp.frame = 0;
            if (_this.thumbsUp.frame == 1 || _this.thumbsDown.frame == 1) {
                _this.tickButton.visible = true;
            }
            else if (_this.thumbsUp.frame == 0 && _this.thumbsDown.frame == 0)
                _this.tickButton.visible = false;

            if (_this.array_numbertype[0] == 0 || _this.array_numbertype[0] == 2) {
                if (_this.question % 2 == 0) {
                    _this.answer = true;
                    console.log("Correct");
                }
                else {
                    _this.answer = false;
                    console.log("Try Again");

                    // _this.thumbsDown.frame = 0;
                }
            }
            else {
                if (_this.question % 2 == 0) {
                    _this.answer = false;
                    console.log("Try again");

                    // _this.thumbsDown.frame = 0;
                }
                else {
                    _this.answer = true;
                    console.log("Correct");
                }
            }
            if (_this.thumbsDown.frame == 1)
                _this.thumbsUp.frame = 0;



        });

        _this.tickButton = _this.add.sprite(820, 470, 'Tick');
        _this.tickButton.frame = 0;
        _this.tickButton.visible = false;
        if (_this.thumbsDown.frame == 1 || _this.thumbsUp.frame == 1) {
            console.log("Fgvjkf");
        }
        _this.tickButton.inputEnabled = true;
        _this.tickButton.events.onInputDown.add(function () {
            if (_this.answer)
                _this.tickButton.inputEnabled = false;
            _this.tickButton.frame = 1;
            if (_this.answer == true) {
                _this.destroy();
                if (_this.array_traytype[0] == 0) {
                    for (var i = 0; i < _this.appleGroup.length; i++) {
                        _this.appleGroup.getChildAt(i).frame = 1;
                    }
                }
                else {
                    for (var i = 0; i < _this.eggGroup.length; i++) {
                        _this.eggGroup.getChildAt(i).frame = 1;
                    }
                }

                _this.hatchSound.play();
            }
            else {
                _this.wrongSound.play();
                _this.wrongbtnClicked();
                _this.tickButton.visible = false;
            }
        });


    },
    wrongbtnClicked: function () {
        _this.tickButton.frame = 0;
        _this.thumbsUp.frame = 0;
        _this.thumbsDown.frame = 0;

    },
    destroy: function () {

        _this.time.events.add(2000, function () {
            _this.speakerbtn.visible = false;
            _this.Basket.destroy();
            _this.thumbsDown.destroy();
            _this.thumbsUp.destroy();
            _this.enterTxt.destroy();
            _this.tickButton.destroy();
            _this.starActions();
            _this.celebrationSound.play();

            _this.time.events.add(2000, function () { _this.start(); })
        });
    },
    starActions: function () {



        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');
        _this.anim.play();
        _this.count1++;

    },

    generateStarsForTheScene: function (count) {
        _this.starsGroup = _this.add.group();
        for (var i = 0; i < count; i++) {
            _this.starsGroup.create(_this.world.centerX - 15, 10, 'starAnim');
            for (var j = 0; j < i; j++) {
                if (_this.starsGroup.getChildAt(j)) {
                    _this.starsGroup.getChildAt(j).x -= 15;
                    _this.starsGroup.getChildAt(i).x += 15;
                }
            }
        }
    },


    //   var dragPlus = _this.add.sprite(61,85,'plus');

    //          dragPlusDragAction = _this.add.tween(dragPlus);

    //          dragPlusDragAction.to({x: 45, y: _this.spoty_rectaglebox1 }, 1250, 'Quart', false, 0);
    //          dragPlusDragAction.onComplete.add(function() {dragPlus.destroy();});
    //          dragPlusDragAction.start();
    // },

    updateTimer: function () {
        _this.counterForTimer++;
        if (_this.counterForTimer > 59) {
            _this.counterForTimer = 0;

            if (_this.minutes < 10) {
                _this.minutes = _this.minutes + 1;
                _this.seconds = 00;
            }
            else {
                _this.minutes = _this.minutes + 1;
            }
        }
        else {
            if (_this.counterForTimer < 10)
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes + ':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
    },


    shutdown: function () {
        console.log("inside shutdown function");
    }


}