/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _this;
var app = {
    // Application Constructor
    initialize: function() {

		
		this.receivedEvent();
		
       // document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

   

    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
		
		//Initializing Phaser...
        var game = new Phaser.Game(960,540,Phaser.CANVAS,'');

     
        game.state.add('boot',Game.boot);
        game.state.add('preloader',Game.preloader);
        game.state.add('NS_INT_7_G6level1',Game.NS_INT_7_G6level1);
        game.state.add('NS_INT_7_G6Score',Game.NS_INT_7_G6Score);
      
		game.state.start('boot');

    }
};


app.initialize();