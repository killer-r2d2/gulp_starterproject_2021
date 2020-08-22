function initMap() {
    // Map options
    var options = {
        zoom:16,
        center:{lat:47.445229,lng:9.472451},
        mapId: '2ab83db5f283fb46',
        disableDefaultUI: true
    }

    var map = new
    google.maps.Map(document.getElementById('map'),options);

    // Add your marker
    var marker = new google.maps.Marker({
        position:{lat:47.445229,lng:9.472451},
        map:map,
        icon:'../../images/icons/detail_place.svg'
    });
}

export{initMap};