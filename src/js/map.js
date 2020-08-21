

function initMap() {
    // Map options
    var options = {
        zoom:14,
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

export{initMap};