// Add event listeners


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

function selectedLink(linkId) {
	deselectLink();
	document.getElementById(linkId).className = 'selected';
}

function deselectLink() {
	document.getElementById('index-link').className = 'notSelected';
	document.getElementById('about-link').className = 'notSelected';
	document.getElementById('edu-link').className = 'notSelected';
	document.getElementById('exp-link').className = 'notSelected';
	document.getElementById('contact-link').className = 'notSelected';
}


function increaseText(upId) {
	document.getElementById(upId).style.display = 'none';
	document.getElementById('text-down').style.display = 'block';
	document.body.style.fontSize = 'larger';
	document.body.style.fontSize = 'larger';
}

function decreaseText(downId) {
	document.getElementById(downId).style.display = 'none';
	document.getElementById('text-up').style.display = 'block';
	document.body.style.fontSize = 'initial';
}
