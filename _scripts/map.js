// Function to format the date to "MMM YY"
function formatDate(dateString) {
    const options = { year: '2-digit', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options); // e.g., "Jan 24"
}

// Initialize the map
var map = L.map('talk-map').setView([20.0, 0.0], 2); // Centered on the world map

// Add the tile layer (map layer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add the locations from the YAML data
var locations = {{ site.data.talks | jsonify }};

locations.forEach(function(location) {
    if (location.latitude && location.longitude) { // Ensure coordinates exist
        var marker = L.marker([location.latitude, location.longitude]).addTo(map);

        // Create the popup content with the required fields
        var popupContent = "<b>" + location.name + "</b><br>" +
                           location.location + "<br>" +
                           formatDate(location.date); // Format the date

        // Add the 'etc' field only if it exists
        if (location.etc) {
            popupContent += "<br>" + location.etc;
        }

        // Bind the popup to the marker
        marker.bindPopup(popupContent);
    }
});