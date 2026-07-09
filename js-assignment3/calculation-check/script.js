let num1, num2;

function generateRandomNumbers() {
  num1 = Math.floor(Math.random() * 100) + 1;
  num2 = Math.floor(Math.random() * 100) + 1;
  document.getElementById('number1').textContent = num1;
  document.getElementById('number2').textContent = num2;
  document.getElementById('user-answer').value = '';
  document.getElementById('result').textContent = '';
}

document.getElementById('check').addEventListener('click', () => {
  const userAnswer = parseInt(document.getElementById('user-answer').value);
  const correctAnswer = num1 + num2;
  
  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Correct';
  } else {
    document.getElementById('result').textContent = 'Incorrect';
  }
});

document.getElementById('reset').addEventListener('click', generateRandomNumbers);

generateRandomNumbers();
