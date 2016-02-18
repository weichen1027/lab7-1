'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".project .likeCtr").click(projectLike);
	$(".project .likeCtrGrid").click(projectLike);
}

function projectLike(e) { 
	ga("send", "event", 'like', 'click');

}