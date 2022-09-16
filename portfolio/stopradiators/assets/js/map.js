
ymaps.ready(function () {
    let myMap = new ymaps.Map(
      "map", {
        center: [60.070849, 30.285176],
        zoom: 18,
        controls: ["smallMapDefaultSet"],
      }, {
        suppressMapOpenBlock: true,
      }
    );

    var myPlacemark = new ymaps.Placemark(
      [60.070859, 30.286790]
    );

    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors
      .disable(["", "rightMouseButtonMagnifier", "scrollZoom"])
      .disable("ruler");

    // myMap.controls.add('geolocationControl');

    if ($(window).width() <= 1280) {
      myMap.behaviors.disable("drag");
    }
  
});