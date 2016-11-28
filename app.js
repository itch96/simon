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

	$('#color1').on('click', function() {playSound1();} );
	$('#color2').on('click', function() {playSound2();} );
	$('#color3').on('click', function() {playSound3();} );
	$('#color4').on('click', function() {playSound4();} );


};
$(document).ready(main);