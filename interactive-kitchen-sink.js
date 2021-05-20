var titleNumber = 0;
var urlNumber = 0;

function incrementTitle(message)
{
	while (true)
	{
		console.log("Preparing to change title.")
		var number = Math.round(Math.random() * 10)
		if ((number % 9) == 0) { break; }
	}
	
	var oldNumber = titleNumber;
	titleNumber = titleNumber + 1;
	var newTitle =  document.title.replace(" - " + oldNumber, "");
	document.title = newTitle + " - " + titleNumber;
}

function incrementUrl(message)
{
	while (true)
	{
		console.log("Preparing to change URL")
		var number = Math.round(Math.random() * 10)
		if ((number % 9) == 0) { break; }
	}
	
	var url = window.location.href;
	var oldUrlNumber = urlNumber;
	urlNumber = urlNumber + 1;
    url = url.replace("?param=" + oldUrlNumber, "");
    url = url + "?param=" + urlNumber;
    window.location.href = url;
}

function addElement(message)
{
	while (true)
	{
		console.log("Getting ready add element.")
		var number = Math.round(Math.random() * 10)
		if ((number % 9) == 0) { break; }
	}
	
	if (message == null || message === "" || message === undefined) { message = "I am here for the time being."; }

	let paragraph = document.createElement("div");
	let text = document.createTextNode(message);
	paragraph.appendChild(text);
	paragraph.classList.add("added-child-element");
	document.getElementById("randomization-container").appendChild(paragraph);
}

function displayUser()
{
	let paragraph = document.createElement("p");
	let value = document.getElementById("id-username").value;
	let text = document.createTextNode(value);
	paragraph.appendChild(text);
	paragraph.className += value;
	document.getElementById("user-display-area").appendChild(paragraph);
}

function removeElement(elementQuery)
{
	while (true)
	{
		console.log("Preparing to remove element.")
		var number = Math.round(Math.random() * 10)
		if ((number % 11) == 0) { break; }
	}

	var selectedElement = document.querySelector(elementQuery);
	selectedElement.parentNode.removeChild(selectedElement);
}

function openNewTestTab()
{
	window.open("https://www.google.com");
}

function initializeTestPage()
{
	window.localStorage.setItem("hafk", "you got me!");
}

window.onload = initializeTestPage();
