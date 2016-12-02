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
	var currentLevel = 0;
	var userPressed = 5;

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
			currentLevel = 0;
			generatedPattern = [];
		}
	});

	function playGame(level) {
		console.log("New game of level " + level +"has started.");
		currentLevel = level;
		$('#centerDisk').html(currentLevel);

		// generate a pattern for the computer to play.
		generatedPattern.push(Math.ceil(Math.random() * 4));

		console.log("Computer will now play the game.");
		// start next level after 1s break
		setTimeout(compPlayGame(), 1000);
	}

	function compPlayGame() {
		var k = 0;
		var interval = 1000;
		var level = generatedPattern.length;

		console.log("Computer is playing the game according to the generatedPattern: " + generatedPattern);

		// set interval as per the level
		if(level < 5) {interval = 1000;}
		else if(level < 10) {interval = 800;}
		else if(level < 15) {interval = 600;}
		else if(level < 20) {interval = 400;}
		else if(level < 25) {interval = 200;}
		else {interval = 150;}
		console.log("The level " + level + " will run at " + interval + " speed.");

		//play the sounds with effects
		var temp = setInterval(function() {
			if(generatedPattern[k] == 1) {play1();}
			else if(generatedPattern[k] == 2) {play2();}
			else if(generatedPattern[k] == 3) {play3();}
			else if(generatedPattern[k] == 4){play4();}
			else {/*Do nothing*/console.log("generatedPattern[k] " + generatedPattern[k]);}
			k ++;
			if(k == generatedPattern.length) {
				console.log("Computer has finished playing the game.");
				clearInterval(temp);
				temp = 0; // just in case
				// now give user a chance to play the game.
				userPlayGame();
			}
		}, interval);
	}

	function play1() {
		$('#color1').css({'backgroundColor' : '#c62828'});
		setTimeout( function() {$('#color1').css({'backgroundColor' : '#f44336'});playSound1();}, 100);
	}
	function play2() {
		$('#color2').css({'backgroundColor' : '#1565C0'});
		setTimeout( function() {$('#color2').css({'backgroundColor' : '#2196F3'});playSound2();}, 100);
	}
	function play3() {
		$('#color3').css({'backgroundColor' : '#F9A825'});
		setTimeout( function() {$('#color3').css({'backgroundColor' : '#FFEB3B'});playSound3();}, 100);
	}
	function play4() {
		$('#color4').css({'backgroundColor' : '#2E7D32'});
		setTimeout( function() {$('#color4').css({'backgroundColor' : '#4CAF50'});playSound4();}, 100);
	}

	function userPlayGame() {
		// the user will now play the game
		var i = 0;
		var result = undefined;
		var count = 0;
		console.log(i);
		console.log("The generated pattern is: " + generatedPattern);

		$('#color1').on('click', function() {
			play1();
			userPressed = 1;
			console.log(userPressed + " " + generatedPattern[i] + " " + i);
			if(userPressed == generatedPattern[i]) {result = true;}
			else {result = false; count ++; userMadeAMistake();}
			i ++;
			if(i == generatedPattern.length) {
				// the enterd pattern matches the generated pattern. Level up.
				userPattern.push(userPressed);
				console.log("The userPattern is: " + userPattern);
				if(result == true && match(userPattern, generatedPattern)) { playGame(++ currentLevel);}
				else if(result == false) {console.log("User has lost.");}
				else { console.log("result is: " + result);}
			}
		});
		$('#color2').on('click', function() {
			play2();
			userPressed = 2;
			console.log(userPressed + " " + generatedPattern[i] + " " + i);

			if(userPressed == generatedPattern[i]) {result = true;}
			else {result = false; userMadeAMistake();}
			i ++;
			if(i == generatedPattern.length) {
				// the enterd pattern matches the generated pattern. Level up.
				userPattern.push(userPressed);
				console.log("The userPattern is: " + userPattern);
				if(result == true && match(userPattern, generatedPattern)) { playGame(++ currentLevel);}
				else if(result == false) {console.log("User has lost.");}
				else { console.log("result is: " + result);}
			}
		});
		$('#color3').on('click', function() {
			play3();
			userPressed = 3;
			console.log(userPressed + " " + generatedPattern[i] + " " + i);
			if(userPressed == generatedPattern[i]) {
				result = true;

				//console.log("The user Pattern is : " + userPattern);
			}
			else {result = false; userMadeAMistake();}
			i ++;
			if(i == generatedPattern.length) {
				// the enterd pattern matches the generated pattern. Level up.
				userPattern.push(userPressed);
				console.log("The userPattern is: " + userPattern);
				if(result == true && match(userPattern, generatedPattern)) { playGame(++ currentLevel);}
				else if(result == false) {console.log("User has lost.");}
				else { console.log("result is: " + result);}
			}
		});
		$('#color4').on('click', function() {
			play4();
			userPressed = 4;
			console.log(userPressed + " " + generatedPattern[i] + " " + i);
			if(userPressed == generatedPattern[i]) {
				result = true;

				//console.log("The user Pattern is : " + userPattern);
			}
			else {result = false; userMadeAMistake();}
			i ++;
			if(i == generatedPattern.length) {
				// the enterd pattern matches the generated pattern. Level up.
				userPattern.push(userPressed);
				console.log("The userPattern is: " + userPattern);
				if(result == true && match(userPattern, generatedPattern)) { playGame(++ currentLevel);}
				else if(result == false) {console.log("User has lost.");}
				else { console.log("result is: " + result);}
			}
		});
	}

	function match(array1, array2) {
		if(array2.length != array1.length) {return false;}
		else {
			var x = 0;
			for(x = 0; x < array1.length; x ++) {
				if(array1[x] != array2[x]) {return false;}
			}
			if(x == array1.length) {return true;}
		}
	}

	function userMadeAMistake() {
		console.log("User Made a mistake.");
		$('#centerDisk').html("X");
	}
};

$(document).ready(main);
