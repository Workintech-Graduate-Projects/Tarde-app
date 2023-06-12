"use client";
import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";

import axios from "axios";
import EtkinlikCard from "./Etkinlik-card";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZXNraXNhcmtpc2kiLCJhIjoiY2xocmhxNjdrMHF5ZzNlbnZ2dDNobzhvbiJ9.SuA_p6UCk5NACNs1kz31eQ";

function Maps() {
  const [isOpen, setIsOpen] = useState([]);
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  const [markerData, setMarkerData] = useState([]);
  //const [hede, setHede] = useState();
  const [isVisible, setIsVisible] = useState(false);

  const [konum, setKonum] = useState([
    {
      type: "Feature",
      properties: {
        no: 1,
        sehir: "Gaziantep",
        telefon1: "02337768478",
        telefon2: "03748204828",
      },
      geometry: {
        type: "Point",
        coordinates: { lng: 36.7, lat: 37.6 },
      },
    },
  ]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/eskisarkisi/clhrhwtt501zx01pga4vadfqs",
      center: [38.05, 37.6],
      zoom: 5.8,
      minZoom: 5,
      /*   maxBounds: bounds, */
    });
    //  map.scrollZoom.disable();
    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });

    map.on("zoom", function () {
      var currentZoom = map.getZoom();
      currentZoom > 5 ? setToggle(true) : setToggle(false);
    });

    if (markerData.length !== 0) {
      for (const marker of markerData.features) {
        // Create a DOM element for each marker.
        const el = document.createElement("div");
        el.className = "marker";
        const size = 50;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;

        function handleClick() {
          console.log("tıklandı");
        }

        const popup = new mapboxgl.Popup({ offset: 25 });
        popup.setHTML(
          `
          <div id="mapDiv"> 
          <h7 id="mapBaslik">MERKEZ TELEFON NUMARALARI</h7></br>
              <a href:tel:${marker.properties.telefon1} id="mapTel">${marker.properties.telefon1}</a></br>
              <a href:"tel:${marker.properties.telefon2}" id="mapTel">${marker.properties.telefon2}</a></br>
              <h7 id="mapNote">7 GÜN 24 SAAT</h7></br>
              <a href="http://localhost:3000/card" id="mapButton">Detaylar</a>

              `
        ),
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

    /*    const bounds = [
      [36.05, 40.82],
      [43.22, 36.1],
    ]; */
  }, [markerData]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/table/admin/sehir")
      .then(function (response) {
        // handle success
        setData(response.data);
        console.log(response.data);
        const a = response.data;
        return a;
      })

      .then((a) => {
        const sehirArray = a.map((item) => item.sehir_adi);
        const enlem = a.map((item) => item.enlem);
        const boylam = a.map((item) => item.boylam);
        const telefon1Arr = a.map((item) => item.sehir_tel_1);
        const telefon2Arr = a.map((item) => item.sehir_tel_2);
        const coordArray = enlem.map((element, index) => [
          element,
          boylam[index],
        ]);

        const id = a.map((item) => item.sehir_id);
        const tasari = {
          type: "Feature",
          properties: {
            no: id,
            sehir: sehirArray,
            telefon1: telefon1Arr,
            telefon2: telefon2Arr,
          },
          geometry: {
            type: "Point",
            coordinates: coordArray,
          },
        };

        setKonum(
          [
            {
              ...konum,
              tasari,
            },
          ] /* , `{lon: ${enlem[0]}, lat: ${boylam[0]}}` */
        );

        return tasari;
      })
      .then((tasari) => {
        return {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                no: tasari.properties.no[0],
                sehir: tasari.properties.sehir[0],
                telefon1: tasari.properties.telefon1[0],
                telefon2: tasari.properties.telefon2[0],
              },
              geometry: {
                type: "Point",
                coordinates: tasari.geometry.coordinates[0],
              },
            },
            {
              type: "Feature",
              properties: {
                no: tasari.properties.no[1],
                sehir: tasari.properties.sehir[1],
                telefon1: tasari.properties.telefon1[1],
                telefon2: tasari.properties.telefon2[1],
              },
              geometry: {
                type: "Point",
                coordinates: tasari.geometry.coordinates[1],
              },
            },
            {
              type: "Feature",
              properties: {
                no: tasari.properties.no[2],
                sehir: tasari.properties.sehir[2],
                telefon1: tasari.properties.telefon1[2],
                telefon2: tasari.properties.telefon2[2],
              },
              geometry: {
                type: "Point",
                coordinates: tasari.geometry.coordinates[2],
              },
            },
            {
              type: "Feature",
              properties: {
                no: tasari.properties.no[3],
                sehir: tasari.properties.sehir[3],
                telefon1: tasari.properties.telefon1[3],
                telefon2: tasari.properties.telefon2[3],
              },
              geometry: {
                type: "Point",
                coordinates: tasari.geometry.coordinates[3],
              },
            },
            {
              type: "Feature",
              properties: {
                no: tasari.properties.no[4],
                sehir: tasari.properties.sehir[4],
                telefon1: tasari.properties.telefon1[4],
                telefon2: tasari.properties.telefon2[4],
              },
              geometry: {
                type: "Point",
                coordinates: tasari.geometry.coordinates[4],
              },
            },
            {
              type: "Feature",
              properties: {
                no: tasari.properties.no[5],
                sehir: tasari.properties.sehir[5],
                telefon1: tasari.properties.telefon1[5],
                telefon2: tasari.properties.telefon2[5],
              },
              geometry: {
                type: "Point",
                coordinates: tasari.geometry.coordinates[5],
              },
            },
            {
              type: "Feature",
              properties: {
                no: tasari.properties.no[6],
                sehir: tasari.properties.sehir[6],
                telefon1: tasari.properties.telefon1[6],
                telefon2: tasari.properties.telefon2[6],
              },
              geometry: {
                type: "Point",
                coordinates: tasari.geometry.coordinates[6],
              },
            },
            {
              type: "Feature",
              properties: {
                no: tasari.properties.no[7],
                sehir: tasari.properties.sehir[7],
                telefon1: tasari.properties.telefon1[7],
                telefon2: tasari.properties.telefon2[7],
              },
              geometry: {
                type: "Point",
                coordinates: tasari.geometry.coordinates[7],
              },
            },
          ],
        };
      })
      .then((geojson) => {
        setMarkerData(geojson);
      })
      .then((tasari) => {});
  }, []);

  return (
    <>
      <div id="map" className="rounded-xl  h-[60vh] md:h-[90vh] w-[100%]"></div>
    </>
  );
}

export default Maps;
