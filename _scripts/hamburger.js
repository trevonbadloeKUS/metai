document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        navToggle.checked = !navToggle.checked;
    });

    // Optional: Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target) && navToggle.checked) {
            navToggle.checked = false;
        }
    });
});
