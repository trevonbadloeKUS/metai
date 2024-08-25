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
        effect: coverflow,
    });

    // Get the publication data from the script tag
    var data = JSON.parse(document.getElementById('citations-data').textContent);

    // Sort publications by date in descending order
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get the 5 most recent publications
    const publications = data.slice(0, 5);

    // Populate Swiper slides and text
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const publicationText = document.getElementById('publication-text');

    publications.forEach((pub, index) => {
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

        // Add event listener to update the text when this slide is active
        swiper.on('slideChange', function () {
            if (swiper.realIndex === index) {
                publicationText.innerHTML = `<h3>${pub.title}</h3><p>${pub.authors.join(', ')}</p>`;
            }
        });
    });

    // Set the text for the first slide on load
    publicationText.innerHTML = `<h3>${publications[0].title}</h3><p>${publications[0].authors.join(', ')}</p>`;

    // Update Swiper instance after adding slides
    swiper.update();
});
