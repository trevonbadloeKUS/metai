---
title: Talks
nav:
  order: 5
  tooltip: List of invited talks and presentations
---

{% include section.html %}

<!-- Map Container -->
<div id="talk-map" style="height: 500px; width: 100%;"></div>

<script>
function formatDate(dateString) {
    const options = { year: '2-digit', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}

var map = L.map('talk-map').setView([20.0, 0.0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var piIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var studentIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var locations = {{ site.data.talks | jsonify }};
var piName = "Trevon Badloe"; 

locations.forEach(function(location) {
    if (location.latitude && location.longitude) {
        var isStudent = location.presenter && location.presenter !== piName;
        var chosenIcon = isStudent ? studentIcon : piIcon;
        var marker = L.marker([location.latitude, location.longitude], {icon: chosenIcon}).addTo(map);

        var popupContent = "<b>" + location.name + "</b><br>" +
                           location.location + "<br>" +
                           formatDate(location.date);

        if (location.etc) { popupContent += "<br><i>" + location.etc + "</i>"; }

        if (isStudent) {
            popupContent += "<br><strong style='color: #872535;'>Presenter: " + location.presenter + "</strong>";
        }

        marker.bindPopup(popupContent);
    }
});
</script>

{% include section.html %}

<!-- LIQUID SETUP -->
{% assign pi_name = "Trevon Badloe" %}
{% assign all_talks = site.data.talks | sort: 'date' | reverse %}

<!-- Filter Lists -->
{% assign pi_talks = all_talks | where_exp: "item", "item.presenter == nil or item.presenter == pi_name" %}
{% assign student_talks = all_talks | where_exp: "item", "item.presenter != nil and item.presenter != pi_name" %}


<!-- =========================================
     SECTION 1: PI TALKS
     ========================================= -->
<div class="bio-heading">Talks & Seminars</div>

<!-- 1. Group by Year -->
{% assign pi_talks_by_year = pi_talks | group_by_exp: "item", "item.date | date: '%Y'" %}

<!-- 2. Set Counter to Total Items (So newest starts at Max) -->
{% assign current_count = pi_talks.size %}

{% for year_group in pi_talks_by_year %}
  
  <h3>{{ year_group.name }}</h3>
  
  <!-- 3. Start Ordered List with 'reversed' and calculated 'start' index -->
  <ol reversed start="{{ current_count }}">
    {% for talk in year_group.items %}
      {% include talks.html lookup=talk.id name=talk.name website=talk.website location=talk.location date=talk.date etc=talk.etc presenter=talk.presenter %}
    {% endfor %}
  </ol>

  <!-- 4. Update Counter for next year group -->
  {% assign current_count = current_count | minus: year_group.items.size %}

{% endfor %}

<!-- =========================================
     SECTION 2: GROUP PRESENTATIONS (STUDENTS)
     ========================================= -->
{% if student_talks.size > 0 %}
{% include section.html %}
<div class="bio-heading">Group Presentations</div>

{% assign student_talks_by_year = student_talks | group_by_exp: "item", "item.date | date: '%Y'" %}
{% assign current_count = student_talks.size %}

{% for year_group in student_talks_by_year %}
<h3>{{ year_group.name }}</h3>

<ol reversed start="{{ current_count }}">
{% for talk in year_group.items %}
{% include talks.html lookup=talk.id name=talk.name website=talk.website location=talk.location date=talk.date etc=talk.etc presenter=talk.presenter %}
{% endfor %}
</ol>

{% assign current_count = current_count | minus: year_group.items.size %}
{% endfor %}
{% endif %}