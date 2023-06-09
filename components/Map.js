"use client";
import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";
import { dummyData } from "./dummy-data";
import Header from "./Header";
import axios from "axios";
import maps from "@/pages/maps";
import { RedirectType } from "next/dist/client/components/redirect";
import EtkinlikCard from "./Etkinlik-card";

dummyData;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZXNraXNhcmtpc2kiLCJhIjoiY2xocmhxNjdrMHF5ZzNlbnZ2dDNobzhvbiJ9.SuA_p6UCk5NACNs1kz31eQ";

function Maps() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  const [markerData, setMarkerData] = useState([]);
  //const [hede, setHede] = useState();
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

        const popup = new mapboxgl.Popup({ offset: 25 });
        popup.setHTML(
          `
          <div id="mapDiv"> 
          <h7 id="mapBaslik">MERKEZ TELEFON NUMARALARI</h7></br>
              <a href:tel:${marker.properties.telefon1} id="mapTel">${marker.properties.telefon1}</a></br>
              <a href:"tel:${marker.properties.telefon2}" id="mapTel">${marker.properties.telefon2}</a></br>
              <h7 id="mapNote">7 GÜN 24 SAAT</h7></br>
              <a href="http://localhost:3000/table" id="mapButton">Detaylar</a></div>`
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

  /*   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/api/table/coordinate/`
        );
        console.log(response.data);
        response.data;
        await setData(response.data);
        setKonum({ ...konum, coordinates: koordinat[1] });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); */
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/table/coordinate/")
      .then(function (response) {
        // handle success
        setData(response.data);
        const a = response.data;
        return a;
      })

      .then((a) => {


        const sehirArray = a.map((item) => item.sehir_adi);
        const enlem = a.map((item) => item.enlem);
        const boylam = a.map((item) => item.boylam);
        const telefon1Arr = a.map((item) => item.merkez_telefon_1);
        const telefon2Arr = a.map((item) => item.merkez_telefon_2);
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

        function calculateResult(a) {
          for (let i = 0; i < a.length; i++) {
            if (a[i] == tasari.properties.id) return a[i];
          }
        }
        const myResult = calculateResult(tasari.properties.sehir);

        return {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                no: tasari.properties.no[0],
                sehir: myResult,
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
                sehir: myResult,
                telefon1: tasari.properties.telefon1[1],
                telefon2: tasari.properties.telefon2[1],
              },
              geometry: {
                type: "Point",
                coordinates: tasari.geometry.coordinates[1],
              },
            },
          ],
        };
      })
      .then((geojson) => {
        setMarkerData(geojson);
      });
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div id="map" className="rounded-xl  h-[60vh] md:h-[90vh] w-[100%]">
       
      </div>
    </>
  );
}

export default Maps;
