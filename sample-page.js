function addElement(message)
{
	while (true)
	{
		console.log("Calculating")
		var number = Math.round(Math.random() * 10)
		if ((number % 9) == 0)
		{
			break;
		}
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
	document.getElementById("user-display-area").appendChild(paragraph);
}

function removeElement(elementQuery)
{
	while (true)
	{
		console.log("Calculating")
		var number = Math.round(Math.random() * 10)
		if ((number % 11) == 0)
		{
			break;
		}
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
