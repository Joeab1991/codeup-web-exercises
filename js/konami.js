"use strict";

let key = [];
let konamiCode = [38,38,40,40,37,39,37,39,66,65,13];
$(document).keyup(function(event){
	key = key.concat([event.keyCode]);
	if (key.toString() === konamiCode.toString()) {
		alert(`You have added 30 lives!`);
	}
});
