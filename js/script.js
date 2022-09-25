const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

btn.addEventListener('click', navtoggle);

linkForm.addEventListener('submit', formSubmit);

// * Toggle Mobie Menu
function navtoggle() {
	btn.classList.toggle('open');
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');
}

// * Validate a URL
function validURL(str) {
	const pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
			'((\\d{1,3}\\.){3}\\d{1,3}))' +
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
			'(\\?[;&a-z\\d%_.~+=-]*)?' +
			'(\\#[-a-z\\d_]*)?$',
		'i'
	);
	return !!pattern.test(str);
}

// * Form Submit
function formSubmit(e) {
	e.preventDefault();
	inputLogic();
}

// * Input Logic
function inputLogic() {
	if (input.value === '') {
		errMsg.innerHTML = 'Please enter a URL';
		input.classList.add('border-red');
	} else if (!validURL(input.value)) {
		errMsg.innerHTML = 'Please enter a valid URL';
		input.classList.add('border-red');
	} else {
		errMsg.innerHTML = '';
		input.classList.add('border-red');
		alert('Success: Valid URL');
	}
}
