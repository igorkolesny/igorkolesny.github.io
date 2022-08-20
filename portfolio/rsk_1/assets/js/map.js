ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.789082, 37.497638],
        zoom: 15,
        controls: []
    }, {
        suppressMapOpenBlock: true
    });

    //геолокация
    var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
            layout: 'round#buttonLayout'
        }
    });
    myMap.controls.add(geolocationControl, {
        float: 'none',
            position: {
                left: 10,
                top: 290,
            }
        });

    // линейка
    var rulerControl = new ymaps.control.RulerControl({
        options: {
            layout: 'round#rulerLayout'
        }
    });
    myMap.controls.add(rulerControl, {
        float: 'none',
            position: {
                left: 10,
                top: 505,
            }
        });


    // масштаб +-
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            layout: 'round#zoomLayout'
        }
    });
    myMap.controls.add(zoomControl, {
        float: 'none',
            position: {
                left: 10,
                top: 350,
            }
        });


    //тип селектор
    var typeSelector = new ymaps.control.TypeSelector({
        options: {
            layout: 'round#listBoxLayout',
            itemLayout: 'round#listBoxItemLayout',
            itemSelectableLayout: 'round#listBoxItemSelectableLayout',
            float: 'none',
            position: {
                bottom: '40px',
                left: '10px'
            }
        }
    });
    myMap.controls.add(typeSelector, {
        float: 'none',
            position: {
                left: 10,
                top: 460,
            }
        });
});

