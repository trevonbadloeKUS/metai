document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navToggle = document.getElementById('nav-toggle');

    hamburger.addEventListener('click', () => {
        navToggle.checked = !navToggle.checked;
    });
});
