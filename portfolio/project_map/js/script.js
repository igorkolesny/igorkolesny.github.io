function initMap() {
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  const marker_box_photo = [
    "./img/map_markers/photo_1.png",
  ]
    
  const ico_mark = "./img/map_markers/marker_1.png"

  let items_description = [
    {
      id: 1, 
      item_title: "Тайтл первой метки", 
      item_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 2, 
      item_title: "Тайтл второй метки", 
      item_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 3, 
      item_title: "Тайтл третьей метки", 
      item_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 4, 
      item_title: "Тайтл четвертой метки", 
      item_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {id: 5, item_title: "Вася", item_text: "Привет!"},
    {id: 6, item_title: "Вася", item_text: "Привет!"},
    {id: 7, item_title: "Вася", item_text: "Привет!"},
    {id: 8, item_title: "Вася", item_text: "Привет!"},
    {id: 9, item_title: "Вася", item_text: "Привет!"},
    {id: 10, item_title: "Вася", item_text: "Привет!"},
    {id: 11, item_title: "Вася", item_text: "Привет!"},
    {id: 12, item_title: "Вася", item_text: "Привет!"},
  ];


  let id_1 = items_description.find(item => item.id == 1);
  let id_2 = items_description.find(item => item.id == 2);
  let id_3 = items_description.find(item => item.id == 3);
  let id_4 = items_description.find(item => item.id == 4);
  let id_5 = items_description.find(item => item.id == 5);
  let id_6 = items_description.find(item => item.id == 6);
  let id_7 = items_description.find(item => item.id == 7);
  let id_8 = items_description.find(item => item.id == 8);
  let id_9 = items_description.find(item => item.id == 9);
  let id_10 = items_description.find(item => item.id == 10);
  let id_11 = items_description.find(item => item.id == 11);
  let id_12 = items_description.find(item => item.id == 12);

  marker_1_text = 
    '<div class="marker_box">' + 
    '<div class="marker_box-photo">' + 
    '<img src="' + marker_box_photo[0] + '">' + 
    '</div>' +
    '<div class="marker_box-info>' + 
    '<h1 class="firstHeading">' +
    id_1.item_title + 
    '</h1>' + 
    '<p>' + 
    id_1.item_text + 
    '</p>' + 
    '</div>' + 
    '</div>';

  marker_2_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_2.item_title + '</h1>' + '<p>' + id_2.item_text + '</p>' + '</div>';
  marker_3_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_3.item_title + '</h1>' + '<p>' + id_3.item_text + '</p>' + '</div>';
  marker_4_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_4.item_title + '</h1>' + '<p>' + id_4.item_text + '</p>' + '</div>';
  marker_5_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_5.item_title + '</h1>' + '<p>' + id_5.item_text + '</p>' + '</div>';
  marker_6_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_6.item_title + '</h1>' + '<p>' + id_6.item_text + '</p>' + '</div>';
  marker_7_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_7.item_title + '</h1>' + '<p>' + id_7.item_text + '</p>' + '</div>';
  marker_8_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_8.item_title + '</h1>' + '<p>' + id_8.item_text + '</p>' + '</div>';
  marker_9_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_9.item_title + '</h1>' + '<p>' + id_9.item_text + '</p>' + '</div>';
  marker_10_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_10.item_title + '</h1>' + '<p>' + id_10.item_text + '</p>' + '</div>';
  marker_11_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_11.item_title + '</h1>' + '<p>' + id_11.item_text + '</p>' + '</div>';
  marker_12_text = '<div class="marker_box">' + '<h1 class="firstHeading">' + id_12.item_title + '</h1>' + '<p>' + id_12.item_text + '</p>' + '</div>';


  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
  });

  map.setCenter({
    lat: -25.165,
    lng: 136.044
  });


  var infowindow = new google.maps.InfoWindow();
  var marker, i;

  var markers = [];

  var locations = [
    [marker_1_text, -25.165, 136.044, image, "marker_1"],
    [marker_2_text, -25.565, 136.044, image, "marker_2"],
    [marker_3_text, -25.965, 136.044, image, "marker_3"],
    [marker_3_text, -26.365, 136.044, image, "marker_4"],
  ];


  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      visible: false,
      icon: ico_mark,
      zIndex: 10
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
        let object = $('.leftside__item[data-mark*=' + locations[i][4] + ']' ).attr('data-mark');
        if (object == locations[i][4]) {
          console.log(object);
          $('.leftside__item[data-mark*=' + locations[i][4] + ']' ).css({'backgroundColor' : '#18b170'});
          $('.leftside__item[data-mark*=' + locations[i][4] + ']' ).addClass("found");
          if ($('.leftside__item[data-mark*=' + locations[i][4] + ']' ).hasClass("found")) {
            $('.leftside__item.found[data-mark*=' + locations[i][4] + ']' ).click(function () {
              map.setCenter({
                lat: locations[i][1],
                lng: locations[i][2]
              })
              map.setZoom(10)
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            })
          }
        } else {
          console.log("error")
        }
      }
    })(marker, i));


  markers.push(marker);

}



google.maps.event.addListener(map, 'zoom_changed', function () {
  var zoom = map.getZoom();
  for (i = 0; i < locations.length; i++) {
    markers[i].setVisible(zoom >= 10);
  }
});





}

window.initMap = initMap;