document.getElementById('tip-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const billAmount = parseFloat(document.getElementById('bill').value);
  const tipPercentage = parseFloat(document.getElementById('tip').value);
  
  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  
  document.getElementById('result').innerHTML = `
    Tip Amount: ${tipAmount.toFixed(2)}<br>
    Total Amount: ${totalAmount.toFixed(2)}
  `;
});
