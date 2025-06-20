const typingElement = document.querySelector('.typing');
const typingWords = ["PRINCE", "Web Developer", "Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = typingWords[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      setTimeout(() => { isDeleting = true; typeEffect(); }, 1200);
    } else {
      setTimeout(typeEffect, 80); 
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, 40); 
    }
  }
}
typeEffect();

const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
});


