document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-container button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('tab-item');
            });

            this.classList.add('active');
            this.classList.remove('tab-item');

            const tabId = this.id;
            const contentId = tabId + '-content';

            const allContents = document.querySelectorAll('.tab-content .tab-item');
            allContents.forEach(content => {
                content.classList.remove('active');
            });

            const activeContent = document.getElementById(contentId);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});
