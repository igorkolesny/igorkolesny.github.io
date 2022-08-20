ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.767032, 37.671162],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([55.741059, 37.610862], {
            hintContent: 'Офис First Print',
            balloonContent: 'Офис First Print | г.Москва, Берсеневский пер., д.5, стр.4'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/bitrix/templates/.default/theme/images/icon-marker.png',
            // Размеры метки.
            iconImageSize: [38, 45],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17, -45]
        }),

         myPlacemark2 = new ymaps.Placemark([55.786505, 37.704134], {
            hintContent: 'Производство First Print',
            balloonContent: 'Производство First Print | г.Москва, ул. Электрозаводская, д.21',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/bitrix/templates/.default/theme/images/icon-marker.png',
            // Размеры метки.
            iconImageSize: [38, 45],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -45],
        });

    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2);
});