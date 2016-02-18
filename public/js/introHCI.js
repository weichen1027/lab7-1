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
	$(".likeBtn").click(projectLike);
}

function projectLike(e) { 
	e.preventDefault();
	var endTime = new Date().getTime();
	ga("send", "event", 'like', 'click');

	var timeSpent = endTime - startTime;
	ga('send', 'timing', 'time_spent', 'clickLike', timeSpent);
}