"use strict";

let key = [];
let konamiCode = [38,38,40,40,37,39,37,39,66,65,13];
let $renderInput = $(`#codeInput`)
$(document).keyup(function(event){
	key = key.concat([event.keyCode]);
	if (key.toString() === konamiCode.toString()) {
		alert(`You have added 30 lives!`);
	}
});

$(document).keyup(function(event){
	let pressedKey = (event.keyCode);
	let up = `<img src="images/Loteria/konami-code-up.png" alt="arrow">`;
	console.log(pressedKey)
	if (pressedKey === 38 || 40 || 37 || 39) {
		$renderInput.innerHTML = up
		console.log($renderInput.innerHTML)
	}
	return $renderInput.innerHTML
});