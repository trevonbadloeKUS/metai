// carousel.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 4000, // 4 seconds
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
    });

    // Get the publication data from the script tag
    var data = JSON.parse(document.getElementById('citations-data').textContent);

    // Sort publications by date in descending order
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get the 5 most recent publications
    const publications = data.slice(0, 5);

    // Populate Swiper slides
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    publications.forEach(pub => {
        // Create Swiper slide
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        const img = document.createElement('img');
        img.src = pub.image;
        img.alt = pub.title;
        img.style.width = '100%'; // Ensure the image fits the container
        img.style.height = 'auto'; // Maintain aspect ratio
        slide.appendChild(img);
        swiperWrapper.appendChild(slide);
    });

    // Set initial text for the first slide
    const publicationText = document.getElementById('publication-text');
    updateText(publications[0]);

    // Update text on slide change
    swiper.on('slideChange', function () {
        const index = swiper.realIndex % publications.length;
        updateText(publications[index]);
    });

    function updateText(pub) {
        publicationText.innerHTML = `<h3>${pub.title}</h3><p>${pub.authors.join(', ')}</p>`;
    }

    // Update Swiper instance after adding slides
    swiper.update();
});
