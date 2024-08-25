document.addEventListener('DOMContentLoaded', function () {
    // First Carousel for Recent Publications
    var swiper1 = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
    });

    // Get the publication data from the script tag
    var data = JSON.parse(document.getElementById('data').textContent);

    // Get the 3 most recent publications
    const publications = data.slice(0, 3);

    // Populate Swiper slides for the first carousel
    const swiperWrapper1 = document.querySelector('.swiper-wrapper');

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

        swiperWrapper1.appendChild(slide);
    });

    // Set initial text for the first slide
    const publicationText = document.getElementById('publication-text');
    updatePublicationText(publications[0]);

    // Update text on slide change for the first carousel
    swiper1.on('slideChange', function () {
        const index = swiper1.slides[swiper1.realIndex].dataset.pubIndex;
        updatePublicationText(publications[index]);
    });

    function updatePublicationText(pub) {
        publicationText.innerHTML = `<h6><a href="${pub.link}" target="_blank">${pub.title}</a></h6><p>${pub.highlight}</p>`;
    }

    // Second Carousel for "What do we do?" section
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
        loop: true,
    });

    // Define custom text for each slide in the second carousel
    const customSlides = [
        {
            title: "Metamaterials",
            description: "Some description about Highlight 1.",
            link: "https://example.com/highlight1",
        },
        {
            title: "Photonic Crystals",
            description: "Some description about Highlight 2.",
            link: "https://example.com/highlight2",
        },
        {
            title: "Nanotechnology",
            description: "Some description about Highlight 3.",
            link: "https://example.com/highlight3",
        },
    ];

    // Set initial text for the first slide in the second carousel
    const customText = document.getElementById('custom-text');
    updateCustomText(0);

    // Update text on slide change for the second carousel
    swiper2.on('slideChange', function () {
        updateCustomText(swiper2.realIndex);
    });

    function updateCustomText(index) {
        const slideData = customSlides[index];
        customText.innerHTML = `<h6><a href="${slideData.link}" target="_blank">${slideData.title}</a></h6><p>${slideData.description}</p>`;
    }
});
