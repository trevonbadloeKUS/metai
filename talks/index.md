---
title: Talks
nav:
  order: 5
  tooltip: List of invited talks and presentations
---


# Talks

<!--> 
<div id="map"></div>
<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>


<script>
  // Initialize the map
  var map = L.map('map').setView([51.505, -0.09], 13);

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add a marker at a specific location
  var marker = L.marker([51.5, -0.09]).addTo(map);

  // Add a popup to the marker
  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
</script>
</!--> 

<h3>My Leaflet.js Map</h3>
<div id="map"></div>

<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>

<script>
    // Initialize the map and set its view to a geographical center and zoom level
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer to the map (this is from OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
</script>


{% include section.html %}

{% include list.html data="talks" component="talks" %}
