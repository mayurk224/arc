const letterInput = document.getElementById('letter');
const output = document.getElementById('output');

letterInput.addEventListener('keydown', (event) => {
  const keyCode = event.keyCode;
  const character = String.fromCharCode(keyCode);
  
  output.innerHTML = `
    <div class="result">
      <span class="label">Character:</span>
      <span class="value">${character}</span>
    </div>
    <div class="result">
      <span class="label">ASCII Code:</span>
      <span class="value">${keyCode}</span>
    </div>
  `;
});
