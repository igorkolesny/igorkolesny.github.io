ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [58.561853, 49.602571],
        zoom: 15,
        controls: []
    }, {
        suppressMapOpenBlock: true
    });

    myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [58.561853, 49.602571]
        }
    }, {
        preset: 'islands#redDotIcon'
    });

    myMap.geoObjects.add(myGeoObject)

});

