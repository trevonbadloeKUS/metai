---
title: Talks
nav:
  order: 5
  tooltip: List of invited talks and presentations
---


# Talks

<div id="map" style="height: 500px;"></div>

<script>
    // Initialize the map and set its view
    var map = L.map('map').setView([51.505, -0.09], 2); // Default view set to a world map

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Add markers based on the YAML data
    {% for location in site.data.talks %}
        L.marker([{{ location.latitude }}, {{ location.longitude }}])
            .addTo(map)
            .bindPopup("<b>{{ location.place }}</b><br>{{ location.name }}");
    {% endfor %}
</script>


{% include section.html %}

{% include list.html data="talks" component="talks" %}
