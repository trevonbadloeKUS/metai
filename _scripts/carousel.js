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
        loop: false,
    });

    // Get the publication data from the script tag
    var data = JSON.parse(document.getElementById('data').textContent);

    // Sort publications by date in descending order
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get the 3 most recent publications
    const publications = data.slice(0, 3);

    // Populate Swiper slides
    const swiperWrapper = document.querySelector('.swiper-wrapper');

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

        // Attach the index to the slide
        slide.dataset.pubIndex = index;

        swiperWrapper.appendChild(slide);
    });

    // Set initial text for the first slide
    const publicationText = document.getElementById('publication-text');
    updateText(publications[0]);

    // Update text on slide change
    swiper.on('slideChange', function () {
        const index = swiper.slides[swiper.activeIndex].dataset.pubIndex;
        updateText(publications[index]);
    });

    function updateText(pub) {
        publicationText.innerHTML = `<h6><a href="${pub.link}" target="_blank">${pub.title}</a></h6><p>${pub.highlight}</p>` ;
    }

    // Update Swiper instance after adding slides
    swiper.update();
});


document.addEventListener('DOMContentLoaded', function () {

    // Initialize the second Swiper
    var swiper2 = new Swiper('.swiper-container-2', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: false,
    });

    // If needed, you can also dynamically update text similar to the first carousel
    const customText = document.getElementById('custom-text');
    const customSlides = [
        {
            title: "Highlight Title 1",
            description: "Some description about Highlight 1.",
            link: "https://example.com/highlight1",
        },
        {
            title: "Highlight Title 2",
            description: "Some description about Highlight 2.",
            link: "https://example.com/highlight2",
        },
        {
            title: "Highlight Title 3",
            description: "Some description about Highlight 3.",
            link: "https://example.com/highlight3",
        }
    ];

    // Set initial text for the first slide
    updateCustomText(customSlides[0]);

    // Update text on slide change
    swiper2.on('slideChange', function () {
        const index = swiper2.activeIndex % customSlides.length;  // Ensure correct index even when looping
        updateCustomText(customSlides[index]);
    });

    function updateCustomText(slide) {
        customText.innerHTML = `<h6><a href="${slide.link}" target="_blank">${slide.title}</a></h6><p>${slide.description}</p>`;
    }
});
