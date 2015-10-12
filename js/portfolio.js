function showThis(id) {
	//Hide all
	document.getElementById('index').style.display = 'none';
	document.getElementById('about').style.display = 'none';
	document.getElementById('education').style.display = 'none';
	document.getElementById('experience').style.display = 'none';
	document.getElementById('contact').style.display = 'none';
	//Show selected
	document.getElementById(id).style.display = 'block';
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