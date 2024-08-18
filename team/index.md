---
title: Team
nav:
  order: 3
  tooltip: Meet our team
---

{% assign pi_members = site.members | where: "role", "pi" %}
{% assign researcher_members = site.members | where: "role", "postdoc" %}
{% assign phd_members = site.members | where: "role", "phd" %}
{% assign comb_members = site.members | where: "role", "combined" %}
{% assign masters_members = site.members | where: "role", "masters" %}
{% assign undergrad_members = site.members | where: "role", "undergrad" %}
{% assign alumni_members = site.members | where: "role", "alumni" %}

<h1>Team</h1>

{% if pi_members.size > 0 %}
  {% include section.html %}
  <h2>PI</h2>
  {% include list.html data="members" component="portrait" filters="role: pi" %}
{% endif %}

{% if researcher_members.size > 0 %}
  {% include section.html %}
  <h2>Researchers</h2>
  {% include list.html data="members" component="portrait" filters="role: postdoc" %}
{% endif %}

{% if phd_members.size > 0 or comb_members.size > 0 or masters_members.size > 0 %}
  {% include section.html %}
  <h2>Graduate students</h2>

  {% if phd_members.size > 0 %}
  <h3>Ph.D. students</h3>
  {% include list.html data="members" component="portrait" filters="role: phd" %}
  {% include list.html data="members" component="portrait" filters="role: combined" %}
  {% endif %}

  {% if masters_members.size > 0 %}
  <h3>Masters students</h3>
  {% include list.html data="members" component="portrait" filters="role: masters" %}
  {% endif %}
{% endif %}

{% if undergrad_members.size > 0 %}
  {% include section.html %}
  <h2>Undergraduate students</h2>
  {% include list.html data="members" component="portrait" filters="role: undergrad" %}
{% endif %}

{% if alumni_members.size > 0 %}
  {% include section.html %}
  <h2>Alumni</h2>
  {% include list.html data="members" component="portrait" filters="role: alumni" %}
{% endif %}

{% include section.html background="images/background.jpg" dark=true %}

<p>Please <a href="mailto:youremail@example.com">contact us</a> if you are interested in joining our team~!</p>
