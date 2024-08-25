---
---

# Welcome to Trevon's nanophotonics lab at Korea University - Sejong Campus

# Welcome to the Advanced Metamaterials and Nanophotonics Lab

Welcome to the **Advanced Metamaterials and Nanophotonics Lab** at **Korea University's Sejong Campus**, nestled within the **Department of Electronics and Information Engineering**. Our lab is dedicated to pioneering research at the intersection of **metamaterials**, **nanophotonics**, and **nano-optics**, where the extraordinary potential of these fields is explored through innovative design and implementation strategies powered by **artificial intelligence**.

Here, we delve into the fundamental and applied aspects of these cutting-edge technologies, seeking to push the boundaries of what's possible in optical science and engineering. Our interdisciplinary approach integrates physics, engineering, and AI to develop novel materials and devices with unprecedented capabilities. Whether you are a student, researcher, or collaborator, we invite you to join us in advancing the frontiers of knowledge and technology in this exciting and rapidly evolving field.

Welcome to a space where creativity meets precision, and where your contributions will help shape the future of nanotechnology and optical engineering!



{% include section.html %}

## About our lab

{% capture text %}

Find out more about what we do at Trevon's Research Lab

{%
  include button.html
  link="research"
  text="See what we do"
  flip=true
%}

{% endcapture %}

{%
  include feature.html
  image="images/icon.png"
  link="research"
  title="Our Research Topics"
  text=text
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="publications"
  text="See our publications"
  flip=true
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="publications"
  title="Our Recent Publications"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

{%
  include button.html
  link="team"
  text="Meet the team"
  flip=true
%}

{% endcapture %}

{%
  include feature.html
  image="team/photos/professor/trevon_photo.jpeg"
  link="team"
  title="Our Research Team"
  text=text
%}


{% assign sorted_publications = site.data.citations | sort: 'date' | reverse %}
{% assign latest_publications = sorted_publications | slice: 0, 3 %}


{% include section.html %}


<div class="feature" data-flip>
  <!-- Image Carousel -->
  <div class="feature-image">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- Slides will be dynamically added here -->
        <!-- Example Slide -->
        <div class="swiper-slide">
          <img src="path-to-your-image1.jpg" alt="Description 1">
        </div>
        <div class="swiper-slide">
          <img src="path-to-your-image2.jpg" alt="Description 2">
        </div>
        <!-- Add more slides as needed -->
      </div>

      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>

      <!-- Add Navigation -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>

  <!-- Text Content -->
  <div class="feature-text">
    <h2 class="feature-title">Your Title Here</h2>
    <p>Your descriptive text here. This section can include details about the images or any other content you'd like to display.</p>
  </div>
</div>



{% include section.html %}

<div class="feature">
  <!-- Image Carousel -->
  <div class="feature-image">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        {% assign sorted_pubs = site.data.citations | sort: "date" | reverse %}
        {% assign recent_pubs = sorted_pubs | slice: 0, 3 %}

        {% for publication in recent_pubs %}
          <div class="swiper-slide" data-title="{{ publication.title }}" data-description="{{ publication.description }}" data-link="{{ publication.link }}">
            <a href="{{ publication.link }}">
              <img src="{{ publication.image }}" alt="{{ publication.title }}">
            </a>
          </div>
        {% endfor %}
      </div>

      <!-- Add Pagination and Navigation -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>

  <!-- Text Content -->
  <div class="feature-text">
    <h2 class="feature-title">{{ recent_pubs[0].title }}</h2>
    <p>{{ recent_pubs[0].type }}</p>
  </div>
</div>

<!-- Include Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: function () {
          var currentSlide = swiper.slides[swiper.activeIndex];
          var title = currentSlide.getAttribute('data-title');
          var description = currentSlide.getAttribute('data-description');

          document.querySelector('.feature-text .feature-title').textContent = title;
          document.querySelector('.feature-text p').textContent = description;
        }
      }
    });
  });
</script>