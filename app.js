var main = function() {

	function playSound1() {
		var sound1 = new Audio("./Sounds/simonSound1.mp3");
		sound1.play();
	}
	function playSound2() {
		var sound2 = new Audio("./Sounds/simonSound2.mp3");
		sound2.play();
	}
	function playSound3() {
		var sound3 = new Audio("./Sounds/simonSound3.mp3");
		sound3.play();
	}
	function playSound4() {
		var sound4 = new Audio("./Sounds/simonSound4.mp3");
		sound4.play();
	}

	var gameStatus = 0;
	var generatedPattern = [];
	var userPattern = [];

	$('#button').hover(
	                   function() {
	                   	if(gameStatus == 0) { $(this).css({'backgroundColor': '#1abc9c'}); }
	                   	else { $(this).css({'backgroundColor': '#34495e'}); }
	                   },
	                   function() {
	                   	if(gameStatus == 0) { $(this).css({'backgroundColor': '#16a085'}); }
	                   	else { $(this).css({'backgroundColor': '#2c3e50'}); }
	                   }
		);
	$('#button').on('click', function() {
		if(gameStatus == 0) {

			$('#button').css({'backgroundColor': '#2c3e50'});
			$(this).html("Reset");
			gameStatus = 1;

			playGame(1);
		}
		else {
			$('#button').css({'backgroundColor': '#16a085'});
			$(this).html("Start");
			gameStatus = 0;
			$('#centerDisk').html(0);
			generatedPattern = [];
		}
	});

	var playGame = function(level) {
		console.log("New game of " + level + " level has started.");
		var currentLevel = level;
		$('#centerDisk').html(currentLevel);
		// empty the userPattern array
		userPattern.splice(0, userPattern.length);
		console.log("The current user pattern is: " + userPattern);
		var result = undefined;

		generatedPattern.push(Math.ceil(Math.random() * 4));
		console.log("Generated Pattern: " + generatedPattern);

		console.log("Computer will now play the game.");
		var time = setTimeout(compPlayGame(generatedPattern), 1000);
		console.log("Computer has finished playing");

		// the user will play the game
		var i = 0;
		console.log(i);
		console.log("The computer pattern is: " + generatedPattern);
		$('#color1').on('click', function() {
			playSound1();
			userPattern[i] = 1;
			console.log("The user pattern is: " + userPattern);
			if(userPattern[i] == generatedPattern[i]) {result = true;}
			else {result = false; userMadeAMistake();}
			i ++;
			if(i == generatedPattern.length || result == false) {
				// the enterd pattern matches the generated pattern. Level up.
				console.log("The current level is: " + currentLevel);
				if(result == true) {currentLevel ++; playGame(currentLevel);}
				else if(result == false) {console.log("User has lost.");}
				else { console.log("result is: " + result); }
			}
		});
		$('#color2').on('click', function() {
			playSound2();
			userPattern[i] = 2;
			console.log("The user pattern is: " + userPattern);
			if(userPattern[i] == generatedPattern[i]) {result = true;}
			else {result = false; userMadeAMistake();}
			i ++;
			if(i == generatedPattern.length || result == false) {
				// the enterd pattern matches the generated pattern. Level up.
				console.log("The current level is: " + currentLevel);
				if(result == true) {currentLevel ++; playGame(currentLevel);}
				else if(result == false) {console.log("User has lost.");}
				else { console.log("result is: " + result); }
			}
		});
		$('#color3').on('click', function() {
			playSound3();
			userPattern[i] = 3;
			console.log("The user pattern is: " + userPattern);
			if(userPattern[i] == generatedPattern[i]) {result = true;}
			else {result = false; userMadeAMistake();}
			i ++;
			if(i == generatedPattern.length || result == false) {
				// the enterd pattern matches the generated pattern. Level up.
				console.log("The current level is: " + currentLevel);
				if(result == true) {currentLevel ++; playGame(currentLevel);}
				else if(result == false) {console.log("User has lost.");}
				else { console.log("result is: " + result); }
			}
		});
		$('#color4').on('click', function() {
			playSound4();
			userPattern[i] = 4;
			console.log("The user pattern is: " + userPattern);
			if(userPattern[i] == generatedPattern[i]) {result = true;}
			else {result = false; userMadeAMistake();}
			i ++;
			if(i == generatedPattern.length || result == false) {
				// the enterd pattern matches the generated pattern. Level up.
				console.log("The current level is: " + currentLevel);
				if(result == true) {currentLevel ++; playGame(currentLevel);}
				else if(result == false) {console.log("User has lost.");}
				else { console.log("result is: " + result); }
			}
		});
	};

	function compPlayGame(pattern) {
		var k = 0;
		var interval = 1000;
		var level = pattern.length;

		console.log("Computer is playing the game according to the following pattern.");
		console.log(pattern);
		console.log("You are at level: " + level);

		// set interval as per the level
		if(level < 5) {interval = 1000;}
		else if(level < 10) {interval = 800;}
		else if(level < 15) {interval = 600;}
		else if(level < 20) {interval = 400;}
		else if(level < 25) {interval = 200;}
		else {interval = 100;}
		console.log("The time interval is: " + interval);

		//play the sounds with effects
			var temp = setInterval(function() {
				if(pattern[k] == 1) {play1(interval);}
				else if(pattern[k] == 2) {play2(interval);}
				else if(pattern[k] == 3) {play3(interval);}
				else if(pattern[k] == 4){play4(interval);}
				else {/*Do nothing*/}
				k ++;
			}, interval);
	};

	function play1(time) {
		$('#color1').css({'backgroundColor' : '#c62828'});
		playSound1();
		setTimeout( function() {$('#color1').css({'backgroundColor' : '#f44336'});}, time);
	};
	function play2(time) {
		$('#color2').css({'backgroundColor' : '#1565C0'});
		playSound2();
		setTimeout( function() {$('#color2').css({'backgroundColor' : '#2196F3'});}, time);
	};
	function play3(time) {
		$('#color3').css({'backgroundColor' : '#F9A825'});
		playSound3();
		setTimeout( function() {$('#color3').css({'backgroundColor' : '#FFEB3B'});}, time);
	};
	function play4(time) {
		$('#color4').css({'backgroundColor' : '#2E7D32'});
		playSound4();
		setTimeout( function() {$('#color4').css({'backgroundColor' : '#4CAF50'});}, time);
	};

	function userMadeAMistake() {
		console.log("User Made a mistake.");
	};
};
$(document).ready(main);