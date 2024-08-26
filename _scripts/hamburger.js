document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        navToggle.checked = !navToggle.checked;
    });
});