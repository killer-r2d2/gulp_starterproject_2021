// foreign code from:
// Maps JavaScript API
// https://developers.google.com/maps/documentation/javascript/overview
function initMap() {
    // Map options
    var options = {
        zoom:8,
        center:{lat:47.4250593,lng:9.3765878},
        mapId: '2ab83db5f283fb46',
        disableDefaultUI: true
    }

    var map = new
    google.maps.Map(document.getElementById('map'),options);

    // Add your marker
    var marker = new google.maps.Marker({
        position:{lat:47.4425183,lng:9.4704406},
        map:map,
        icon:'detail_place.svg'
    });
}


// additional steps:
// set the id="map" in your html
// set the script tag with api key in your html:
// <script defer
//         src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
// </script>

// we export the function initMap
export { initMap };