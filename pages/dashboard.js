import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { dummyData } from "../components/dummy-data";
import Tables_Merkez from "@/components/Tables_Merkez";
import { useDispatch, useSelector } from "react-redux";
import { getSehirAPI } from "@/redux/actions";

function dashboard() {
  const [isValid, setIsValid] = useState(false);
  const [selectedSehir, setSelectedSehir] = useState("");
  const sehir = useSelector((state) => state.sehir);
  const apiMerkez = useSelector((state) => state.merkez);
  const dispatch = useDispatch();
  const router = useRouter();
  const routeToHome = () => {
    router.push("/");
    alert("Lütfen Giriş yapınız");
  };

  useEffect(() => {
    dispatch(getSehirAPI());
    if (localStorage.getItem("token") === "1234567" ? false : true) {
      routeToHome();
    } else {
      setIsValid(true);
    }
  }, []);
  const onCity = (item) => {
    // sessionStorage.setItem("sehirler", item);
    sessionStorage.setItem("id", item);
    setSelectedSehir(item);
  };
  const onTable = (item) => {
    sessionStorage.setItem("table", item);
  };
  const selectSehir = sessionStorage.getItem("sehirler");
  const selectId = sessionStorage.getItem("id");
  const selectedTable = sessionStorage.getItem("table");

  return isValid ? (
    <div className="">
      <header className="flex justify-center items-center flex-col">
        <h2>Dashboard</h2>

        <div className="flex">
          <button
            className="p-2 hover:bg-slate-50"
            onClick={() => {
              router.push("/");
            }}
          >
            Anasayfa
          </button>
        </div>
      </header>
      <main className="flex justify-center items-center flex-col mt-10 ">
        <div className="flex justify-around border border-solid-gray my-8 w-[80%]">
          <select
            onClick={(event) => {
              onTable(event.target.value);
            }}
            name="table"
          >
            <option key={2} value="merkez">
              Merkez
            </option>
            <option key={1} value="personel">
              Personel
            </option>
          </select>
          {selectedTable=="merkez"? 
          <select
          onChange={(event) => {
            onCity(event.target.value);
          }}
          name="sehir"
          >
            {sehir.map((item) => (
              <option key={item.sehir_id} value={item.sehir_id}>
                {item.sehir_adi}
              </option>
            ))}
          </select>
          : 
          <select className="w-[170px]"
          onChange={(event) => {
            onCity(event.target.value);
          }}
          name="merkez"
          >
            {apiMerkez.map((item) => (
              <option key={item.merkez_id} value={item.merkez_id}>
                {item.merkez_adi}
              </option>
            ))}
          </select>}
        </div>
        <Tables_Merkez />
      </main>
    </div>
  ) : (
    <>
      <header>Hoşgeldiniz</header>
    </>
  );
}

export default dashboard;
