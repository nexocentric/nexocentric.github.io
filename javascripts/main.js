function closeModal()
{
	console.log("close modal fired");

	let activeModals = document.getElementsByClassName("modal is-active");

	for (let modal of activeModals) {
		modal.classList.remove("is-active");
	}
}

function showModal(name)
{

	var radios = document.getElementsByName('pill');

	for (var index = 0, length = radios.length; index < length; index++) {
		if (radios[index].checked) {
			if (radios[index].value == "blue") { name = "fail"; }
			break;
		}
	}

	let contactForm = document.getElementById(name + "-modal");
	contactForm.classList.add("is-active");
}