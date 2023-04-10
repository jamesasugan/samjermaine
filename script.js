const openLetterBtn = document.querySelector('#open-letter-btn');
const closeLetterBtn = document.querySelector('#close-letter-btn');
const letterContainer = document.querySelector('#letter-container');

openLetterBtn.addEventListener('click', () => {
	letterContainer.style.display = 'block';
});

closeLetterBtn.addEventListener('click', () => {
	letterContainer.style.display = 'none';
});
