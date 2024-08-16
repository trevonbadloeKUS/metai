---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team


{% include section.html %}
# PI
{% include list.html data="members" component="portrait" filters="role: pi" %}

{% include section.html %}

# Researchers
{% include list.html data="members" component="portrait" filters="role: postdoc" %}

{% include section.html %}

# Graduate students
{% include list.html data="members" component="portrait" filters="role: phd" %}
{% include list.html data="members" component="portrait" filters="role: combined" %}

{% include section.html %}

# Undergraduate researchers
{% include list.html data="members" component="portrait" filters="role: undergrad" %}



{% include section.html %}

# Alumni
{% include list.html data="members" component="portrait" filters="role: alumni" %}




{% include section.html background="images/background.jpg" dark=true %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
