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

    // Get the 5 most recent publications (assuming data is already sorted in the desired order)
    const publications = data.slice(0, 5);

    // Populate Swiper slides and text
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const publicationText = document.getElementById('publication-text');

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

        // Update publication text
        const textDiv = document.createElement('div');
        textDiv.innerHTML = `<h3>${pub.title}</h3><p>${pub.authors.join(', ')}</p>`;
        publicationText.innerHTML = textDiv.innerHTML; // Overwrite text content with the latest publication
    });

    // Update Swiper instance after adding slides
    swiper.update();
});
