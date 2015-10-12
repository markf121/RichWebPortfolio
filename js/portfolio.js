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
/*
function showIndex () {
	document.getElementById('about').style.display = 'none';
	document.getElementById('contact').style.display = 'none';
	document.getElementById('education').style.display = 'none';
}

function showAbout () {
	document.getElementById('about').style.display = 'block';
	document.getElementById('index').style.display = 'none';
	document.getElementById('contact').style.display = 'none';
	document.getElementById('education').style.display = 'none';
}

function showContact () {
	document.getElementById('contact').style.display = 'block';
	document.getElementById('about').style.display = 'none';
	document.getElementById('education').style.display = 'none';
	document.getElementById('index').style.display = 'none';
	
}

function showEdu () {
	document.getElementById('contact').style.display = 'none';
	document.getElementById('about').style.display = 'none';
	document.getElementById('education').style.display = 'block';
	document.getElementById('index').style.display = 'none';
	
}

function showEdu () {
	document.getElementById('contact').style.display = 'none';
	document.getElementById('about').style.display = 'none';
	document.getElementById('education').style.display = 'block';
	document.getElementById('index').style.display = 'none';
	
}
*/