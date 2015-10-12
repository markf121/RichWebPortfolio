function hideAll() {

	//Hides all 'pages' by changing each div's class to hidden
	document.getElementById('index').className = 'hidden';
	document.getElementById('about').className = 'hidden';
	document.getElementById('education').className = 'hidden';
	document.getElementById('experience').className = 'hidden';
	document.getElementById('contact').className = 'hidden';
}

function showThis(myId) {
	var thisId = myId;
	//First hide all 'page' divs by setting their class to hidden.
	hideAll();
	//Then show the selected div by removing the hidden class.
	document.getElementById(thisId).className = 'show';
}
