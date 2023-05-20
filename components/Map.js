"use client";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";


mapboxgl.accessToken =
  "pk.eyJ1IjoiZXNraXNhcmtpc2kiLCJhIjoiY2xocmhxNjdrMHF5ZzNlbnZ2dDNobzhvbiJ9.SuA_p6UCk5NACNs1kz31eQ";

function Maps() {
  useEffect(() => {
    const geojson = {
      type: "FeatureCollection",
      features: [
       
        {
          type: "Feature",
          properties: {
            name: "Mauna Kea",
            height: 4205,
          },
          geometry: {
            type: "Point",
            coordinates: [37.19, 38.2],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "Mauna Kea",
            height: 4205,
          },
          geometry: {
            type: "Point",
            coordinates: [36.19, 38.2],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "Mauna Kea",
            height: 0,
          },
          geometry: {
            type: "Point",
            coordinates: [36.69, 37.2],
          },
        },
        
      ],
    };
    // const bounds=[[38.05, 35.82],[38.22, 40.1]]
    const map = new mapboxgl.Map({
      container: "map",
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/eskisarkisi/clhrhwtt501zx01pga4vadfqs",
      center: [37.15, 37.2],
      zoom: 7.1,
      // maxBounds: bounds
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
        `<h2>${marker.properties.name}</h2>${marker.properties.height}m<br/>`
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

  return (
       <div id="map" className="h-[60vh] md:h-[70vh] w-[100%]" ></div>
  );
}

export default Maps;
