let count = 0;

const ELEMENT_BUTTON_SUM = document.getElementById('sum-button')

const ELEMENT_BUTTON_SUB = document.getElementById('sub-button')

const CURRENT_NUMBER = document.getElementById('currentNumber');

ELEMENT_BUTTON_SUM .addEventListener("click", () => {
	count += 1;

	if (count >= 10) {
		ELEMENT_BUTTON_SUM.setAttribute('disabled', 'disabled')
	}
	CURRENT_NUMBER.innerHTML = count;
});

ELEMENT_BUTTON_SUB.addEventListener('click', () => {
	count -= 1;
	CURRENT_NUMBER.innerHTML = count;
})
