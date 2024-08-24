---
title: Contact
nav:
  order: 6
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Contact me for any enquiries or to arrange a visit or meeting

{%
  include button.html
  type="email"
  text="email"
  link="trevon@korea.ac.kr"
%}

{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps"
%}

{% include section.html %}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1142.8376185475045!2d127.28316851961112!3d36.609618489047485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ad3cd1583e639%3A0xcf1204333d744171!2sKorea%20University%20Sejong%20Campus%20Accelerator%20ICT%20Convergence%20Hall!5e0!3m2!1sen!2skr!4v1724466522320!5m2!1sen!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
%}

{% endcapture %}

{% capture col2 %}

Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html %}

{% capture col1 %}

Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor

{% endcapture %}

{% capture col2 %}


{%
  include figure.html
  image="images/photo.jpg"
%}
{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}