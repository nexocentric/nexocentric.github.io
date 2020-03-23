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
	let contactForm = document.getElementById(name + "-modal");
	contactForm.classList.add("is-active");
}