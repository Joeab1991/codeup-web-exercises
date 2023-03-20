"use strict";

$(function() {

	$("h1").click(
		function (){
			$(this).css('background-color', '#8a3333')
		}
	);


	$("p").dblclick(
		function (){
			$(this).css('font-size', '18px')
		}
	);

	$("li").hover(
		function (){
			$(this).css('color', 'red')
		},
		function (){
			$(this).css('color', 'black')
		}
	);
});

// Make all paragraphs have a font size of 18px when they are double clicked.
//
// Set all li text color to red when the mouse is hovering; reset to black when it is not.