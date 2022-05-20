console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted!")
}

let hover = document.getElementById("duck")

hover.addEventListener('mouseover', () => {
	alert("You look very nice today!")
})

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);