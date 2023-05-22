"use client";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";
import { dummyData } from "./dummy-data";
import Link from "next/link";

dummyData;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZXNraXNhcmtpc2kiLCJhIjoiY2xocmhxNjdrMHF5ZzNlbnZ2dDNobzhvbiJ9.SuA_p6UCk5NACNs1kz31eQ";

function Maps() {
  const router = useRouter();

  useEffect(() => {
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: dummyData[0].sehir,
            ulasilan: dummyData[0].ulasilanKisi,
            telefon: dummyData[0].telefonNumaralari[0],
            yetkili: dummyData[0].personelAdi[0],
          },
          geometry: {
            type: "Point",
            coordinates: dummyData[0].coordinates,
          },
        },
        /*       {
          type: "Feature",
          properties: {
            name: "Şanlıurfa",
            ulasilan: 4205,
          },
          geometry: {
            type: "Point",
            coordinates: [38.79, 37.16],
          },
        }, */
        {
          type: "Feature",
          properties: {
            name: dummyData[4].sehir,
            ulasilan: dummyData[4].ulasilanKisi,
            telefon: dummyData[4].telefonNumaralari[0],
            yetkili: dummyData[4].personelAdi[0],
          },
          geometry: {
            type: "Point",
            coordinates: dummyData[4].coordinates,
          },
        },
        {
          type: "Feature",
          properties: {
            name: dummyData[2].sehir,
            ulasilan: dummyData[2].ulasilanKisi,
            telefon: dummyData[2].telefonNumaralari[0],
            yetkili: dummyData[2].personelAdi[0],
          },
          geometry: {
            type: "Point",
            coordinates: dummyData[2].coordinates,
          },
        },
        {
          type: "Feature",
          properties: {
            name: dummyData[3].sehir,
            ulasilan: dummyData[3].ulasilanKisi,
            telefon: dummyData[3].telefonNumaralari[0],
            yetkili: dummyData[3].personelAdi[0],
          },
          geometry: {
            type: "Point",
            coordinates: dummyData[3].coordinates,
          },
        },
        {
          type: "Feature",
          properties: {
            name: dummyData[1].sehir,
            ulasilan: dummyData[1].ulasilanKisi,
            telefon: dummyData[1].telefonNumaralari[0],
            yetkili: dummyData[1].personelAdi[0],
          },
          geometry: {
            type: "Point",
            coordinates: dummyData[1].coordinates,
          },
        },
        {
          type: "Feature",
          properties: {
            name: dummyData[5].sehir,
            ulasilan: dummyData[5].ulasilanKisi,
            telefon: dummyData[5].telefonNumaralari[0],
            yetkili: dummyData[5].personelAdi[0],
          },
          geometry: {
            type: "Point",
            coordinates: dummyData[5].coordinates,
          },
        },
        {
          type: "Feature",
          properties: {
            name: dummyData[6].sehir,
            ulasilan: dummyData[6].ulasilanKisi,
            telefon: dummyData[6].telefonNumaralari[0],
            yetkili: dummyData[6].personelAdi[0],
          },
          geometry: {
            type: "Point",
            coordinates: dummyData[6].coordinates,
          },
        },
      ],
    };
    /*    const bounds = [
      [36.05, 40.82],
      [43.22, 36.1],
    ]; */
    const map = new mapboxgl.Map({
      container: "map",
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/eskisarkisi/clhrhwtt501zx01pga4vadfqs",
      center: [38.05, 37.6],
      zoom: 6.61,
      minZoom: 5.61,
      maxZoom: 10,
      /*   maxBounds: bounds, */
    });
    //  map.scrollZoom.disable();
    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });

    for (const marker of geojson.features) {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      el.className = "marker";
      const size = 50;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;

      // Add a popup displayed on click for each marker
      const popup = new mapboxgl.Popup({ offset: 25 });
      popup.setHTML(
        `<div id="mapDiv"><h5 id="mapSehir">${marker.properties.name}</h5>
        <h7 id="mapYetkili">Yetkili Adı: ${marker.properties.yetkili}</h7></br>
        <h7 id="mapTelefon">Yetkili Telefonu: ${marker.properties.telefon}</h7></br>
        <h7 id="mapKisi">Ulaşılan toplam kişi sayısı: ${marker.properties.ulasilan}</h7><br/>
        <a href="http://localhost:3000/sehir" id="mapButton">Detaylar</a></div>`
      );

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
  });

  return <div id="map" className=" h-[60vh] md:h-[70vh] w-[100%]"></div>;
}

export default Maps;
