let count = 0;

const ELEMENT_BUTTON_SUM = document.getElementById('sum-button')

const ELEMENT_BUTTON_SUB = document.getElementById('sub-button')

const CURRENT_NUMBER = document.getElementById('currentNumber');

ELEMENT_BUTTON_SUM .addEventListener("click", () => {
	count += 1;
	ELEMENT_BUTTON_SUB.removeAttribute('disabled');
	CURRENT_NUMBER.removeAttribute('style');
	ELEMENT_BUTTON_SUB.removeAttribute('style');

	if (count >= 10) {
		ELEMENT_BUTTON_SUM.setAttribute('disabled', 'disabled')
		ELEMENT_BUTTON_SUM.setAttribute('style', 'color: grey; border-color: grey;')
	}
	CURRENT_NUMBER.innerHTML = count;
});

ELEMENT_BUTTON_SUB.addEventListener('click', () => {
	ELEMENT_BUTTON_SUM.removeAttribute('disabled')
	ELEMENT_BUTTON_SUM.removeAttribute('style');
	if (count >= 0) {
		count -= 1;
		CURRENT_NUMBER.innerHTML = count;
	}
	if (count < 0) {
		ELEMENT_BUTTON_SUB.setAttribute('disabled', 'disabled')
		CURRENT_NUMBER.setAttribute('style', 'color: red;')
		ELEMENT_BUTTON_SUB.setAttribute('disabled', 'disabled')
		ELEMENT_BUTTON_SUB.setAttribute('style', 'color: grey; border-color: grey;')
	}
})
