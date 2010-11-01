function startup()
{
	// Call the function for the correct page
	page_id();
}

function index()
{
	// Calculate my current age and stick it in the right place
	var today = new Date(); 
	var age = today.getFullYear() - 1987;
	if (10 > today.getMonth() || (10 == today.getMonth() && today.getDate() < 25)) { age = age - 1; }
	document.getElementById('myage').innerHTML = age + " year old ";
}

function blog()
{}	