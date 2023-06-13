"use client";
import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";

import axios from "axios";
import EtkinlikCard from "./Etkinlik-card";
import Card from "./Card";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZXNraXNhcmtpc2kiLCJhIjoiY2xocmhxNjdrMHF5ZzNlbnZ2dDNobzhvbiJ9.SuA_p6UCk5NACNs1kz31eQ";

function Maps({ setSiteMap }) {
  const [click, setClick] = useState("");
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [cardToggle, setCardToggle] = useState(false);
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

        const handleClick = () => {
          console.log(cardToggle);
        };



        const button = document.createElement("button");
        button.innerText = "Detaylar";
        button.className = "card-button";
        const merkez_baslik = document.createElement("h2");
        merkez_baslik.innerText = "MERKEZ TELEFONLARI";
        merkez_baslik.className = "card-header";
        const merkez_tel_1 = document.createElement("p");
        merkez_tel_1.innerText = `${marker.properties.telefon1}`;
        merkez_tel_1.className = "card-tel-1";
        const merkez_tel_2 = document.createElement("p");
        merkez_tel_2.innerText = `${marker.properties.telefon2}`;
        merkez_tel_2.className = "card-tel-2";
        const calisma_saat = document.createElement("p");
        calisma_saat.innerText = `7 Gün 24 Saat`;
        calisma_saat.className = "card-calisma";
        const icon = document.createElement("img");
        icon.src = "./img/button/tel-icon.png";
        icon.innerText = "favorite";
        icon.className="img-icon-1"
        const iconsecond = document.createElement("img");
        iconsecond.src = "./img/button/tel-icon.png";
        iconsecond.innerText = "favorsite";
        iconsecond.className="img-icon-2"
      

     
        button.addEventListener("click", function () {
          setClick(marker.properties.no);
        });

      
        const buttonContainer = document.createElement("div");
        const buttonInner = document.createElement("div");
        buttonInner.className="tel-1-div"
        const buttonInnerSecond = document.createElement("div");
        buttonInnerSecond.className="tel-2-div"
        buttonContainer.appendChild(merkez_baslik);
        
        buttonContainer.appendChild(buttonInner);
        buttonInner.appendChild(icon);
        buttonInner.appendChild(merkez_tel_1);
        buttonContainer.appendChild(buttonInnerSecond);
        buttonInnerSecond.appendChild(iconsecond);
        buttonInnerSecond.appendChild(merkez_tel_2);
       
        buttonContainer.appendChild(calisma_saat);
        buttonContainer.appendChild(button);
        buttonContainer.className = "card-pad";

        const popup = new mapboxgl.Popup({ offset: 25 });
        // popup.setHTML(

        //   `
        //   <div id="mapDiv">
        //   <h7 id="mapBaslik">MERKEZ TELEFON NUMARALARI</h7></br>
        //       <a href:tel:${marker.properties.telefon1} id="mapTel">${marker.properties.telefon1}</a></br>
        //       <a href:"tel:${marker.properties.telefon2}" id="mapTel">${marker.properties.telefon2}</a></br>
        //       <h7 id="mapNote">7 GÜN 24 SAAT</h7></br>
        //       <button onClick="setClick('${marker.properties.telefon2}')" id="mapButton">Detaylar</button>
        //       <a href:"tel:${marker.properties.no}" id="mapTel">${marker.properties.no}</a></br>
        //       `

        // ),
        popup.setDOMContent(buttonContainer);
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
      <div
        id="map"
        className="rounded-xl  h-[60vh] md:h-[90vh] w-[100%] relative"
      ></div>
      {click != "" ? (
        <div className="absolute bottom-20 right-20  flex items-center justify-center">
          <Card className="absolute " setClick={setClick} click={click} />
        </div>
      ) : (
        <div className="absolute left-[72%] xl:left-[75%] top-[70%] xl:top-[60%] 2xl:top-[50%] ">
          <img
            className="max-w-[150px] xl:max-w-[220px] 2xl:max-w-[260px]  bg-[rgba(246,190,49,0.30)]  rounded-3xl md:w-[270px] troubleMaker"
            src="img/Volunteer-map.svg"
            onClick={() => setSiteMap("SahaForm")}
          />
        </div>
      )}
    </>
  );
}

export default Maps;
