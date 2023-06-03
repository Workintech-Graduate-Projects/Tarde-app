if (markerData.length !== 0) {
  for (const marker of ma.features) {
    // Create a DOM element for each marker.
    const el = document.createElement("div");
    el.className = "marker";
    const size = 50;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;

    //
    // Add a popup displayed on click for each marker
    const popup = new mapboxgl.Popup({ offset: 25 });
    toggle == true
      ? (setHede(`<div id="mapDiv"><h5 id="mapSehir">${marker.properties.name}</h5>
          <h7 id="mapYetkili">Yetkili Adı: ${marker.properties.yetkili}</h7></br>
          <h7 id="mapTelefon">Yetkili Telefonu: ${marker.properties.telefon}</h7></br>
          <h7 id="mapKisi">Ulaşılan toplam kişi sayısı: ${marker.properties.ulasilan}</h7><br/>
          <a href="http://localhost:3000/table" id="mapButton">Detaylar</a></div>`),
        popup.setHTML(hede))
      : (setHede(`<div id="mapDiv">
          <h5 id="mapMerkez">${marker.properties.name}</h5>
          <h7 id="mapYetkili">Yetkili Adı: ${marker.properties.yetkili}</h7></br>
          <h7 id="mapTelefon">Yetkili Telefonu: ${marker.properties.telefon}</h7></br>
          <h7 id="mapKisi">Ulaşılan toplam kişi sayısı: ${marker.properties.ulasilan}</h7><br/>
          <a href="http://localhost:3000/sehir/1" id="mapButton">Detaylar</a></div>`),
        popup.setHTML(hede));

    /*   map.on("zoomout", function () {
          var currentZoom = map.zoomOut();
          currentZoom > 5 ? setToggle(false) : setToggle(true);
        }); */
    // Add markers to the map.
    new mapboxgl.Marker({
      element: el,
      // Point markers toward the nearest horizon
      rotationAlignment: "horizon",
      offset: [0, -size / 2],
    })
      .setLngLat(marker.geometry.coordinates)
      .setPopup(popup)
      .addTo(map);
  }
}



----

{
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          sehir: sehirArr[0],
          // merkez: data.map((item) => console.log(item.merkez_adi))[0],

          ulasilan: dummyData[0].ulasilanKisi,
          telefon1: telefon1Arr[0],
          telefon2: telefon2Arr[0],
        },
        geometry: {
          type: "Point",
          coordinates: coordArray,
        },
      },

      {
        type: "Feature",
        properties: {
          sehir: sehirArr[4],
          // merkez: data.map((item) => console.log(item.merkez_adi))[4],

          ulasilan: dummyData[4].ulasilanKisi,
          telefon1: telefon1Arr[4],
          telefon2: telefon2Arr[4],
        },
        geometry: {
          type: "Point",
          coordinates: coordArray[4],
        },
      },
      {
        type: "Feature",
        properties: {
          sehir: sehirArr[2],
          // merkez: data.map((item) => console.log(item.merkez_adi))[2],

          ulasilan: dummyData[2].ulasilanKisi,
          telefon1: telefon1Arr[2],
          telefon2: telefon2Arr[2],
        },
        geometry: {
          type: "Point",
          coordinates: coordArray[2],
        },
      },
      {
        type: "Feature",
        properties: {
          sehir: sehirArr[2],
          // merkez: data.map((item) => console.log(item.merkez_adi))[2],

          ulasilan: dummyData[2].ulasilanKisi,
          telefon1: telefon1Arr[2],
          telefon2: telefon2Arr[2],
        },
        geometry: {
          type: "Point",
          coordinates: coordArray[3],
        },
      },
      {
        type: "Feature",
        properties: {
          sehir: sehirArr[1],

          ulasilan: dummyData[1].ulasilanKisi,
          telefon1: telefon1Arr[1],
          telefon2: telefon2Arr[1],
        },
        geometry: {
          type: "Point",
          coordinates: coordArray[1],
        },
      },
      {
        type: "Feature",
        properties: {
          sehir: sehirArr[5],

          ulasilan: dummyData[5].ulasilanKisi,
          telefon1: telefon1Arr[5],
          telefon2: telefon2Arr[5],
        },
        geometry: {
          type: "Point",
          coordinates: coordArray[5],
        },
      },
      {
        type: "Feature",
        properties: {
          sehir: sehirArr[6],

          ulasilan: dummyData[6].ulasilanKisi,
          telefon1: telefon1Arr[6],
          telefon2: telefon2Arr[6],
        },
        geometry: {
          type: "Point",
          coordinates: coordArray[6],
        },
      },
    ],
  };