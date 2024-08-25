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
  text="See all publications"
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




{% include section.html %}
<!-- SwiperJS Carousel and Text for "What do we do?" section -->
<div class="feature" data-flip>
  <div class="feature-text">
    <p class="feature-title">What do we do?</p>
    <div id="custom-text">
      <!-- Custom text will be added here by JavaScript -->
    </div>
    {%
    include button.html
    link="research"
    text="Check check check check it out"
    %}
  </div>
  <div class="feature-image">
    <div class="swiper-container-2">
      <div class="swiper-wrapper swiper-wrapper-2">
        <!-- Manually added Swiper slides -->
        <div class="swiper-slide"><img src="{{ '/images/KUS.jpeg' | relative_url }}" alt="Highlight 1"></div>
        <div class="swiper-slide"><img src="{{ '/images/photo.jpg' | relative_url }}" alt="Highlight 2"></div>
        <div class="swiper-slide"><img src="{{ '/images/share.jpg' | relative_url }}" alt="Highlight 3"></div>
      </div>
      <div class="swiper-pagination swiper-pagination-2"></div>
    </div>
  </div>
</div>


{% include section.html %}

<!-- SwiperJS Carousel and Text for Recent Publications -->
<div class="feature">
  <div class="feature-image">
    <div class="swiper-container-1">
      <div class="swiper-wrapper swiper-wrapper-1">
        <!-- Swiper slides will be populated by JavaScript -->
      </div>
      <div class="swiper-pagination swiper-pagination-1"></div>
    </div>
  </div>
  <div class="feature-text">
    <p class="feature-title">Our Recent Publications</p>
    <div id="publication-text">
      <!-- Publication text will be updated by JavaScript -->
    </div>
    {%
    include button.html
    link="publications"
    text="See all publications"
    %}
  </div>
</div>



<script id="data" type="application/json">
  {{ site.data.citations | jsonify }}
</script>

