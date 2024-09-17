let score = 0;
const text = document.getElementById("text");
text.innerHTML = 'Start click on the button'
text.style.color = 'green';

function updateScore() {
  text.innerHTML = score;
}

function increaseBy(inputNumber) {
  score++;
  updateScore();
}

const button0 = document.getElementById("button0");
button0.addEventListener('click', () => {
  increaseBy(1)
})
