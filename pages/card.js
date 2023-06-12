import React, { useEffect, useState } from "react";
import { getSehirAPI } from "@/redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import axios from "axios";

const Card = ({ id }) => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/api/table/admin/aracsayisi/${id}`
        );
        console.log("id-arac", response.data);
        console.log(response.data);
        setData(response.data);
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);
  const sehir = useSelector((state) => state.sehir);
  const merkez = useSelector((state) => state.merkez);
  const dispatch = useDispatch();
  const [card, setcard] = useState({
    sehir_id: 1,
    sehir: "Antakya",
    merkezler: [
      "İBB Afet Koordinasyon Merkezi",
      "Harbiye/Hidropark Çadırkeny",
      "Samandağ Konteynır Kent",
      "Orhanlı Konteynır Kent",
    ],
    arac_sayisi: { gezici_karavan: 1, binek_arac: 1 },
    isbirliğiyapankurumlar: [
      "İzmit Belediyesi",
      "Mor Yerleşke",
      "Samandağ Belediyesi",
      "Sunanın Kızları",
      "MAYA",
      "AÇEV",
    ],
  });

  useEffect(() => {
    dispatch(getSehirAPI());

    const sehirler = sehir.map((item) => item.sehir_adi);
    const id = sehir.map((item) => item.sehir_id);
    // const merkezler = merkez.map((item) => item.merkez_adi);
    /*     const gezici = arac.map((item) => item.gezicikaravan_sayisi);
    const binek = arac.map((item) => item.binekarac_sayisi);
    console.log(gezici, binek, "binek dispatch"); */
    const merkezler = merkez.map((merkez_adi, sehir_id) => (
      <li key={sehir_id}>{merkez_adi}</li>
    ));

    const component = {
      sehirid: id,
      sehir: sehirler,
      merkezler: merkezler,
      arac_sayisi: { gezici_karavan: 1, binek_arac: 1 },
      isbirliğiyapankurumlar: [
        "İzmit Belediyesi",
        "Mor Yerleşke",
        "Samandağ Belediyesi",
        "Sunanın Kızları",
        "MAYA",
        "AÇEV",
      ],
    };
    setcard({ ...card, component });
  }, []);

  return (
    <div>
      <div id="baslik">
        <h1>{card.sehir}</h1>
      </div>
      <div>
        <ul>{card.merkezler.reduce((acc, curr) => acc + " " + curr)}</ul>
      </div>
      <div id="arac_tablo" className="flex space gap-4">
        <div id="arac_girdi" className="flex  flex-col">
          <ul>ARAÇ SAYISI</ul>
          <ul>Gezici Karavan</ul>
          <ul>Binek Araç</ul>
        </div>
        <div id="arac_çıktı" className="flex flex-col">
          <ul>ADET</ul>
          <ul>{card.arac_sayisi.gezici_karavan}</ul>
          <ul>{card.arac_sayisi.binek_arac}</ul>
        </div>
      </div>
      <div>
        <ul>İŞ BİRLİĞİ YAPILAN KURUMLAR</ul>
        <li>
          {card.isbirliğiyapankurumlar.reduce((acc, curr) => acc + ` ` + curr)}
        </li>
      </div>
    </div>
  );
};

export default Card;
