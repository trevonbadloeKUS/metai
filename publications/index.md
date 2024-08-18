---
title: Publications
nav:
  order: 1
  tooltip: Published work
---

{%
  include button.html
  type="google-scholar"
  text="Google Scholar"
  tooltip="Go to Google Scholar"
  flip=false
  style="bare"
%}

{% include section.html %}

{% include search-box.html %}

{% include tags.html tags=site.publications.tags %}

{% include search-info.html %}

*Equal Contribution | +Corresponding Author

{% include list.html data="citations" component="citation" style="rich" %}
