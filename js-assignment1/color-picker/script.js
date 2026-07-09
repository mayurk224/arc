document.addEventListener('DOMContentLoaded', function () {
    const colorCodeSpan = document.getElementById('color-code');

    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.btn-div');

        if (btn.id === 'white-btn') {
            const bgColor = '#ffffff';
            document.body.style.backgroundColor = bgColor;
            colorCodeSpan.textContent = bgColor;
        } else if (btn.id === 'green-btn') {
            const bgColor = '#00ff00';
            document.body.style.backgroundColor = bgColor;
            colorCodeSpan.textContent = bgColor;
        } else if (btn.id === 'blue-btn') {
            const bgColor = '#0000ff';
            document.body.style.backgroundColor = bgColor;
            colorCodeSpan.textContent = bgColor;
        } else if (btn.id === 'red-btn') {
            const bgColor = '#ff0000';
            document.body.style.backgroundColor = bgColor;
            colorCodeSpan.textContent = bgColor;
        }
    });
});
