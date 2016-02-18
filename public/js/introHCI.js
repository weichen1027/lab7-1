'use strict';
var startTime;
var _gaq = _gaq || [];
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	startTime = new Date().getTime();
	$(".project .likeCtr").click(projectLike);
	$(".project .likeCtrGrid").click(projectLike);
}

function projectLike(e) { 
	var endTime = new Date().getTime();
	ga("send", "event", 'like', 'click');

	var timeSpent = endTime - startTime;
	ga('send', 'timing', 'time_spent', 'clickLike', timeSpent);
}