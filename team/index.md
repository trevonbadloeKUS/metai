---
title: Team
nav:
  order: 3
  tooltip: Meet our team
---

{% assign pi_team = site.team | where: "role", "pi" %}
{% assign researcher_team = site.team | where: "role", "postdoc" %}
{% assign phd_team = site.team | where: "role", "phd" %}
{% assign comb_team = site.team | where: "role", "combined" %}
{% assign masters_team = site.team | where: "role", "masters" %}
{% assign undergrad_team = site.team | where: "role", "undergrad" %}
{% assign alumni_team = site.team | where: "role", "alumni" %}

<h2>Principal Investigator</h2>
{% include list.html data="team" component="portrait" filters="role: pi" %}

{% if researcher_team.size > 0 %}
  {% include section.html %}
  <h2>Researchers</h2>
  {% include list.html data="team" component="portrait" filters="role: postdoc" %}
{% endif %}

{% if phd_team.size > 0 or comb_team.size > 0 or masters_team.size > 0 %}
  {% include section.html %}
  <h2>Graduate students</h2>

  {% if phd_team.size > 0 or  comb_team.size>0 %}
  <h3>Ph.D. students</h3>
  {% include list.html data="team" component="portrait" filters="role: phd" %}
  {% include list.html data="team" component="portrait" filters="role: combined" %}
  {% endif %}

  {% if masters_team.size > 0 %}
  <h3>Masters students</h3>
  {% include list.html data="team" component="portrait" filters="role: masters" %}
  {% endif %}
{% endif %}

{% if undergrad_team.size > 0 %}
  {% include section.html %}
  <h2>Undergraduate students</h2>
  {% include list.html data="team" component="portrait" filters="role: undergrad" %}
{% endif %}

{% if alumni_team.size > 0 %}
  {% include section.html %}
  <h2>Alumni</h2>
  <ul>
    {% for member in alumni_team %}
      {% if member.current[0] %}
        <li>{{ member.name }} - {{ member.current[0].position }} ({{ member.current[0].date }})</li>
      {% endif %}
    {% endfor %}
  </ul>
{% endif %}