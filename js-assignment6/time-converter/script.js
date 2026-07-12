document.getElementById('convert-btn').addEventListener('click', function() {
    const hourInput = document.getElementById('hour').value;
    const minuteInput = document.getElementById('minute').value;
    const outputDiv = document.getElementById('output');
    
    const hour = parseInt(hourInput);
    const minute = parseInt(minuteInput);
    
    if (isNaN(hour) || isNaN(minute) || hour < 0 || minute < 0) {
        outputDiv.innerHTML = 'Please enter valid non-negative numbers for hour and minute';
        return;
    }
    
    const totalSeconds = (hour * 3600) + (minute * 60);
    outputDiv.innerHTML = `Total Seconds: ${totalSeconds}`;
});

