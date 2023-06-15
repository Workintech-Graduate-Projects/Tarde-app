import React from "react";

export default function ListeGorunumu() {
  const cities = [
    "antakya",
    "adana",
    "osmaniye",
    "kilis",
    "kahramanmaraş",
    "gaziantep",
    "adıyaman",
    "malatya",
    "diyarbakır",
    "şanlıurfa",
  ];
  const formattedCities = cities.map((city) => city.toUpperCase());
  return (
    <div className="block md:hidden">
      {/* <img
        className="min-w-[200px]"
        src="./img/affan-logo.svg"
        alt="Affan Logo"
      /> */}

      <div className="block md:hidden  ">
        {" "}
        <button className="border border-gray-300 py-2 px-4 mr-2">Liste</button>
        <button className="border border-gray-300 py-2 px-4">Harita</button>
      </div>

      <div className="md:hidden flex flex-col items-center p-0 gap-3.5 absolute ">
        {" "}
        {formattedCities.map((city) => (
          <button
            key={city}
            className="border bg-[#3C4058] text-white py-2 px-4 mr-2 rounded-full roboto w-300"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
