---
title: Talks
nav:
  order: 5
  tooltip: List of invited talks and presentations
---


{% include section.html %}

Explore the locations of past conferences and talks.


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

    // Add a popup with information from the YAML file
    marker.bindPopup("<b>" + location.title + "</b><br>" +
                    location.location + "<br>" +
                    location.date + "<br>" +
                    location.description);
});
</script>

{% include section.html %}


{% include list.html data="talks" component="talks" %}



