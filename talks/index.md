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
// Function to format the date to "MMM YY"
function formatDate(dateString) {
    const options = { year: '2-digit', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}

// Initialize the map
var map = L.map('talk-map').setView([20.0, 0.0], 2);

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define Icons
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

// Load Data
var locations = {{ site.data.talks | jsonify }};
var piName = "Trevon Badloe"; // Define PI Name for filtering

locations.forEach(function(location) {
    if (location.latitude && location.longitude) {
        
        // Determine if this is a Student or PI talk
        var isStudent = location.presenter && location.presenter !== piName;
        
        // Select Icon: Red for Student, Blue for PI
        var chosenIcon = isStudent ? studentIcon : piIcon;

        // Add Marker
        var marker = L.marker([location.latitude, location.longitude], {icon: chosenIcon}).addTo(map);

        // Build Popup Content
        var popupContent = "<b>" + location.name + "</b><br>" +
                           location.location + "<br>" +
                           formatDate(location.date);

        if (location.etc) {
            popupContent += "<br><i>" + location.etc + "</i>";
        }

        // Add Presenter Name to popup if it's a student
        if (isStudent) {
            popupContent += "<br><strong style='color: #d63e2d;'>Presenter: " + location.presenter + "</strong>";
        }

        marker.bindPopup(popupContent);
    }
});
</script>

{% include section.html %}

<!-- LIQUID LOGIC TO SEPARATE LISTS -->
<!-- 1. Define PI Name -->
{% assign pi_name = "Trevon Badloe" %}
{% assign all_talks = site.data.talks | sort: 'date' | reverse %}

<!-- 2. Create filtered arrays -->
<!-- PI Talks: Presenter is empty OR explicitly the PI -->
{% assign pi_talks = all_talks | where_exp: "item", "item.presenter == nil or item.presenter == pi_name" %}

<!-- Student Talks: Presenter exists AND is NOT the PI -->
{% assign student_talks = all_talks | where_exp: "item", "item.presenter != nil and item.presenter != pi_name" %}


<!-- SECTION 1: PI TALKS -->
<div class="bio-heading">Invited Talks & Seminars</div>
<div style="margin-bottom: 20px;">
  <!-- Manually loop to use the included component -->
  {% for talk in pi_talks %}
    {% include talks.html lookup=talk.id name=talk.name website=talk.website location=talk.location date=talk.date etc=talk.etc presenter=talk.presenter %}
  {% endfor %}
</div>

<!-- SECTION 2: STUDENT PRESENTATIONS -->
{% if student_talks.size > 0 %}
  {% include section.html %}
  <div class="bio-heading">Group Presentations</div>
  <div style="margin-bottom: 20px;">
    {% for talk in student_talks %}
      {% include talks.html lookup=talk.id name=talk.name website=talk.website location=talk.location date=talk.date etc=talk.etc presenter=talk.presenter %}
    {% endfor %}
  </div>
{% endif %}