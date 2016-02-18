'use strict';
var startTime;
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
	sga("send", "event", 'like', 'click');

	var timeSpent = endTime - startTime;
	_gaq.push(['_trackTiming', 'Click_Like', 'Time_to_Like', timeSpent]);
}