var mymap = L.map("mapid").setView([33.6593, 73.0238, 13], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution: "Gaqdget Room",
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);

L.marker([33.6593, 73.0238, 13])
  .addTo(mymap)
  .bindPopup("<b>Gadget Room</b><br />Location.")
  .openPopup();

mymap.scrollWheelZoom.disable();
mymap.touchZoom.disable();
