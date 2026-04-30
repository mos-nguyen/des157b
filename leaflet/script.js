(function(){
    'use strict';

    // add your script here
    const map = L.map('map').setView([38.581573,-121.494400], 13);
    const marker = L.marker([38.601224,-121.426969]).addTo(map);
    const marker2 = L.marker([38.576725,-121.487623]).addTo(map);
    
    const polygon = L.polygon([
        [38.579011,-121.489142],
        [38.578390,-121.486750],
        [38.577409,-121.487147],
        [38.578046,-121.489581]
    ]).addTo(map);

   
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    marker.bindPopup("This is the Arden Fair Mall. My sister and I like to walk around and window shop.").openPopup();
    marker2.bindPopup("This is a pretty nice resturant I went to after SacAnime with my friends. It has a pretty weird bathroom.");
    polygon.bindPopup("This is where SacAnime is hosted twice a year. Ive been going with my sister and friends for a couple years now.");
    const popup = L.popup()
            .setLatLng([38.581573,-121.494400])
            .setContent("Here is my Hometown! This is where I grew up :3")
            .openOn(map);

    function onMapClick(event) {
        alert("You clicked the map at" + event.latlng);
    }

    map.on('click', onMapClick);

    function onMapClick(event) {
        popup
            .setLatLng(event.latlng)
            .setContent("You clicked the map at " + event.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
    
}());