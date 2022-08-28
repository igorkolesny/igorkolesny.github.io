function initMap() {

  // в html файл карточки добавятся автоматически, если добавить новую карточку здесь
  const items_description = [
    [
      // id маркера - отсчет начинается с 0 и обяательно без кавычек
      0, 

      // координаты 1
      -25.165, 

      // координаты 2
      136.044, 

       // иконка маркера
      "./img/map_markers/marker_1.png",

      // фото писания маркера
      "./img/map_photos/photo_1.jpg", 

      // заголовок
      "Тайтл первой метки", 

      // информация
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      
      // дата 
      "01.01.1970",

      // краткая информация
      "Where, can"
    ],
    [
      1,
      -26.165,
      136.444,
      "./img/map_markers/marker_2.png",
      "./img/map_photos/photo_2.jpg",
      "Тайтл 2 метки",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "01.01.1970",
      "Where, can"
    ],
    [
      2,
      -27.165,
      136.844,
      "./img/map_markers/marker_3.png",
      "./img/map_photos/photo_3.jpg",
      "Тайтл 3 метки",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "01.01.1970",
      "Where, can"
    ],
    [
      3,
      -28.165,
      137.244,
      "./img/map_markers/marker_4.png",
      "./img/map_photos/photo_4.jpg",
      "Тайтл 4 метки",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "01.01.1970",
      "Where, can"
    ],
    [
      4,
      -29.165,
      137.244,
      "./img/map_markers/marker_4.png",
      "./img/map_photos/photo_4.jpg",
      "Тайтл 5 метки",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "01.01.1972",
      "выава, can"
    ],
    [
      5,
      -30.165,
      137.244,
      "./img/map_markers/marker_4.png",
      "./img/map_photos/photo_4.jpg",
      "Тайтл 6 метки",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "01.01.1975",
      "выава, can"
    ],
    [
      6,
      -31.165,
      137.244,
      "./img/map_markers/marker_4.png",
      "./img/map_photos/photo_4.jpg",
      "Тайтл 7 метки",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "01.01.1975",
      "выава, can"
    ],
    [
      7,
      -32.165,
      137.244,
      "./img/map_markers/marker_4.png",
      "./img/map_photos/photo_4.jpg",
      "Тайтл 8 метки",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "01.01.1975",
      "выава, can"
    ],
    [
      8,
      -33.165,
      137.244,
      "./img/map_markers/marker_4.png",
      "./img/map_photos/photo_4.jpg",
      "Тайтл 9 метки",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "01.01.1975",
      "выава, can"
    ],
    [
      9,
      -34.165,
      137.244,
      "./img/map_markers/marker_4.png",
      "./img/map_photos/photo_4.jpg",
      "Тайтл 10 метки",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "01.01.1975",
      "выава, can"
    ]
  ]

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false  
  });

  map.setCenter({
    lat: -26.165,
    lng: 136.444
  });

  var infowindow = new google.maps.InfoWindow();
  var marker, i;

  var markers = [];

  for (let its = 0; its < items_description.length; its++) {
    let output_text = "";

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(items_description[its][1], items_description[its][2]),
      map: map,
      visible: false,
      icon: items_description[its][3],
      zIndex: 10,
    });

    output_text += `
    <div class="marker_box">
      <div class="marker_box-photo">
        <img src="${items_description[its][4]}">
      </div>
      <div class="marker_box-info">
        <h1>${items_description[its][5]}</h1>
        <div class="marker_inform">
          <div class="marker-append">
            <img src="./img/calendar.png">
            <p>${items_description[its][7]}</p>
          </div>
          <div class="marker-append">
            <img src="./img/loc.png">
            <p>${items_description[its][8]}</p>
          </div>
        </div>
        <p>${items_description[its][6]}</p>
      </div>
    </div>
    `;

    let leftside_item = '<div class="leftside__item"></div>';

    $('.leftside__items').append(leftside_item);

      let this_click = items_description[its][0];  

      let newval = Number(this_click);

      this_click = newval;

      console.log(this_click)
      
      let img = document.createElement('img');
      img.className = "num-mes";
      img.src = items_description[its][4];

      google.maps.event.addListener(marker, 'click', (function (marker, its) {
        return function () {
          infowindow.setContent(output_text);
          infowindow.open(map, marker);

          $('.leftside__item:eq(' + this_click + ')').attr('data-mark', this_click);

          let object = $('.leftside__item[data-mark*=' + this_click + ']' ).attr('data-mark');

          if (object == this_click) {

            let storage_2 = $('.leftside__item[data-mark*=' + this_click + ']' ).addClass("found");

            storage_2;
            storage_2 = 1;

            map.setCenter({
              lat: items_description[its][1],
              lng: items_description[its][2]
            })

            $('.leftside__item[data-mark*=' + this_click + ']' ).attr("data-lat", items_description[its][1]);
            $('.leftside__item[data-mark*=' + this_click + ']' ).attr("data-lng", items_description[its][2]);

            let storage_lat = $('.leftside__item[data-mark*=' + this_click + ']' ).attr("data-lat");
            let storage_lng = $('.leftside__item[data-mark*=' + this_click + ']' ).attr("data-lng");


            let storage_add_data = object;

            localStorage.setItem(object, storage_add_data);
            localStorage.setItem(items_description[its][0], storage_2);

            localStorage.setItem(items_description[its][0] + "_lat", storage_lat);
            localStorage.setItem(items_description[its][0] + "_lng", storage_lng);
            
            
            $('.leftside__item[data-mark*=' + this_click + ']').prepend(img);
       
      
            
           
            
            if ($('.leftside__item[data-mark*=' + this_click + ']' ).hasClass("found")) {
    
              $('.leftside__item.found[data-mark*=' + this_click + ']' ).click(function () {
                map.setCenter({
                  lat: items_description[its][1],
                  lng: items_description[its][2]
                })
                map.setZoom(10)
                infowindow.setContent(output_text);
                infowindow.open(map, marker);
              })
            }
          } else {
            console.log("error")
          }

        }
      })(marker, its));
  
  
    markers.push(marker);

    
    if (localStorage.getItem(this_click) == 1) {

      $('.leftside__item:eq(' + this_click + ')').attr('data-mark', this_click);
      $('.leftside__item[data-mark*=' + this_click + ']' ).addClass("found");
      $('.leftside__item[data-mark*=' + this_click + ']').prepend(img);
      $('.leftside__item.found[data-mark*=' + this_click + ']' ).attr("data-lat", localStorage.getItem(items_description[its][0] + "_lat"));
      $('.leftside__item.found[data-mark*=' + this_click + ']' ).attr("data-lng", localStorage.getItem(items_description[its][0] + "_lng"));

    }   
    
    $('.leftside__item.found[data-mark*=' + this_click + ']' ).click(function () {

      let slat = Number($(this).attr("data-lat"));
      let slng = Number($(this).attr("data-lng"));
          
      map.setCenter({
        lat: slat,
        lng: slng
      });
      

      map.setZoom(10);
      infowindow.setContent(output_text);
  
    })  
  }
  
  google.maps.event.addListener(map, 'zoom_changed', function () {
    var zoom = map.getZoom();
    for (i = 0; i < items_description.length; i++) {
      markers[i].setVisible(zoom >= 10);
    }
    infowindow.close();
  });

  map.addListener("click", () => {
    infowindow.close();
  });



}

window.initMap = initMap;
