const form = document.querySelector('form');
const resultButton = document.getElementById('result-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const bgColor = document.getElementById('button-color').value;
  const fontColor = document.getElementById('font-color').value;
  const fontSize = document.getElementById('font-size').value + 'px';
  const fontWeight = document.getElementById('font-weight').value;
  const padding = document.getElementById('padding').value;
  const buttonRadius = document.getElementById('button-radius').value + 'px';

  resultButton.style.backgroundColor = bgColor;
  resultButton.style.color = fontColor;
  resultButton.style.fontSize = fontSize;
  resultButton.style.fontWeight = fontWeight;
  resultButton.style.padding = padding;
  resultButton.style.borderRadius = buttonRadius;
  resultButton.style.border = 'none';
  resultButton.style.cursor = 'pointer';
});
