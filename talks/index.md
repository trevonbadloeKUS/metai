---
title: Talks
nav:
  order: 5
  tooltip: List of invited talks and presentations
---


{% include section.html %}

Explore the locations of past conferences and talks.

<div id="map" style="height: 500px; width: 100%;"></div>

<script>

// Initialize the map
var map = L.map('map').setView([20.0, 0.0], 2); // Centered on the world map

// Add the tile layer (map layer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add the locations from the YAML data
var locations = {{ site.data.talks | jsonify }};

locations.forEach(function(location) {
    var marker = L.marker([location.latitude, location.longitude]).addTo(map);

    // Create the popup content with the required fields
    var popupContent = "<b>" + location.name + "</b><br>" +
                       location.location + "<br>" +
                       location.date;

    // Add the 'etc' field only if it exists
    if (location.etc) {
        popupContent += "<br>" + location.etc;
    }

    // Bind the popup to the marker
    marker.bindPopup(popupContent);
});
</script>

{% include section.html %}
{% include list.html data="talks" component="talks" %}

