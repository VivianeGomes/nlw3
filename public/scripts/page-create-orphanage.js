//create map
const mymap = L.map('mapid').setView([-23.6533667,-46.7076802], 15);

//create an add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAncor: [29, 68]
})


let marker;

//create and add marker

mymap.on('click', (event) => {

    const lat = event.latIng.lat;
    const lng = event.latIng.lgn;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && mymap.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(mymap)

})

//add o campo de fotos

function addPhotoField() {
    
}