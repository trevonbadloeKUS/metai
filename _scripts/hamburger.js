document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navToggle = document.getElementById('nav-toggle');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
    });
});