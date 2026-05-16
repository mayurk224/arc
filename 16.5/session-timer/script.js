let count = 0;

    const timerDisplay = document.getElementById("timer");
    const message = document.getElementById("message");
    const resetBtn = document.getElementById("resetBtn");

    let timer = setInterval(startTimer, 1000);

    function startTimer() {
      count++;
      timerDisplay.textContent = count;

      if (count >= 10) {
        clearInterval(timer);

        message.style.display = "block";
        resetBtn.style.display = "inline-block";
      }
    }

    resetBtn.addEventListener("click", function () {
      count = 0;

      timerDisplay.textContent = count;
      message.style.display = "none";
      resetBtn.style.display = "none";

      timer = setInterval(startTimer, 1000);
    });