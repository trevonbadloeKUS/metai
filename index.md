---
---

<div>
<img align="center" height="30" src="/trevons-lab-website/images/cheer.gif"> 
<h3> Welcome to Trevon's nanophotonics lab </h3>
<img align="center" height="30" src="/trevons-lab-website/images/wave.gif"> 
</div>

Welcome to the **Advanced Metamaterials and Nanophotonics Lab** at **Korea University's Sejong Campus**, nestled within the **Department of Electronics and Information Engineering**.
Welcome to a space where creativity meets precision, and where your contributions will help shape the future of nanotechnology and optical engineering!


{% include section.html %}
<!-- SwiperJS Carousel and Text for "What do we do?" section -->
<div class="feature" data-flip >
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
  <div class="feature-text">
    <p class="feature-title">What do we do?</p>
    <div id="custom-text">
    </div>
    {%
    include button.html
    link="research"
    text="Find out more"
    %}
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


{% include section.html %}

<div class="feature" data-flip>
  <div class="feature-image">
      <div class="swiper-container-news">
        <div class="swiper-wrapper swiper-wrapper-news">
          <!-- Swiper slides for News & Events will be populated here by JavaScript -->
        </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="feature-text">
    <p class="feature-title">News & Events</p>
    <div id="news-text">
      <!-- News text will be updated here by JavaScript -->
    </div>
    {%
    include button.html
    link="news"
    text="See all news & events"
    %}
  </div>
</div>

<script id="news-data" type="application/json">
    [
    {% for post in site.posts | sort: 'date' | reverse | limit: 3 %}
      {
        "title": "{{ post.title | escape }}",
        "image": "{{ post.image | relative_url }}",
        "link": "{{ post.url | relative_url }}",
        "date": "{{ post.date }}"
      }{% if forloop.last == false %},{% endif %}
    {% endfor %}
    ]
</script>