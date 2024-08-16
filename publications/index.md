---
title: Publications
nav:
  order: 1
  tooltip: Published work
---

# Publications

{%
  include button.html
  type="google-scholar"
  text="Google Scholar"
  tooltip="Check Google Scholar for the most up to date list of publications"
  flip=false
  style="bare"
%}

{% include section.html %}
{% capture content %}

  \* Equal Contribution  
  
  \+ Corresponding Author

{% endcapture %}

{%
  include alert.html
  type="info"
  content= content
%}

{% include section.html %}

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}