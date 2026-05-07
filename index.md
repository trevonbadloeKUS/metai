---
---

<div class="homepage-hero">
  <div class="hero-copy">
    <p class="hero-eyebrow">Welcome to</p>
    <h1 class="hero-title">MetAI Lab</h1>
    <p class="hero-subtitle">@ Korea University - Sejong Campus</p>
    <p class="hero-tagline">Exploring the convergence of Metaphotonics (Meta) and Artificial Intelligence (AI).</p>
    <img class="hero-graphic" src="/images/wave.gif" alt="Animated wave graphic">
  </div>
</div>

At the **MetAI Lab** at **Korea University - Sejong Campus**, we are exploring the convergence of next generation flat optics through **metaphotonics (Meta)** and **artificial intelligence (AI)**. 

<h3> JOIN US </h3>
<h3> 대학원생 / 학부연구생 모집 </h3>
<p> 간단한 자기 소개 및 이력서를 이메일로 보내주시면 검토 후 답변드리겠습니다. 1:1 채팅을 원하시면 카카오톡 오픈채팅 링크를 클릭하세요. </p>
<p> If you are interested in joining our group, please feel free to send an email! Include your CV and a short description of your research interests and we can arrange a meeting and discussion. </p>
<a href="mailto:trevon@korea.ac.kr">trevon@korea.ac.kr</a>

<p> Or click the KakaoTalk link below to access our open chatting room~ </p>

<!-- Kakaotalk Button -->
<p>
  <a href="https://open.kakao.com/o/sCvTrjCh" target="_blank" rel="noopener noreferrer" class="kakao-button">
    KakaoTalk Open Chat
  </a>
</p>

Check out our research activities, topics, and recent publications below!

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
    <p class="feature-title">Recent News & Events</p>
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
<!-- SwiperJS Carousel and Text for "What do we do?" section -->
<div class="feature" data-flip >
  <div class="feature-image">
    <div class="swiper-container-2">
      <div class="swiper-wrapper swiper-wrapper-2">
                <!-- Manually added Swiper slides -->
        <div class="swiper-slide"><img src="{{ '/images/research/metaphotonics.png' | relative_url }}" alt="Metaphotonics"></div>
        <div class="swiper-slide"><img src="{{ '/images/research/ai-meta.png' | relative_url }}" alt="AI for Metaphotonics"></div>
        <div class="swiper-slide"><img src="{{ '/images/research/meta-ai.png' | relative_url }}" alt="Metaphotonics for AI"></div>
      </div>
      <div class="swiper-pagination swiper-pagination-2"></div>
    </div>
  </div>
  <div class="feature-text">
    <p class="feature-title">What do we do at MetAI Lab?</p>
    <div id="custom-text">
    </div>
    {%
    include button.html
    link="research"
    text="Find out more"
    %}
  </div>
</div>