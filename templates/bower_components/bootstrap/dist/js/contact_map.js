var city = ol.proj.transform([-73.920935,40.780229], 'EPSG:4326', 'EPSG:3857');


// setting up openlayer3 view
var view = new ol.View({
    center: city,
    zoom: 11
});


// Create the map
var map = new ol.Map({
  target: 'map',
  renderer: 'canvas',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: view
});
