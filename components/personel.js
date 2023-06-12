import React from "react";
import DataTable from "react-data-table-component";
import Header from "@/components/Header";
import { dummyData } from "@/components/dummy-data";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// A super simple expandable component.
const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);
const customStyles = {
  headRow: {
    style: {
      backgroundColor: "gray",
      color: "white",
    },
  },
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontWeight: "600",
      textTransform: "uppercase",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const columns = [
  {
    name: "Personel Adı",
    selector: (row) => row.personel_adi,
    sortable: true,
  },
  {
    name: "Personel Soyadı",
    selector: (row) => row.personel_soyadi,
    sortable: true,
  },
  {
    name: "Telefon Numarası",
    selector: (row) => row.personel_telefon_1,
    sortable: true,
  },
  {
    name: "Saha Adres",
    selector: (row) => row.saha_adres,
    sortable: true,
  },
  {
    name: "Danışan Sayısı",
    selector: (row) => row.danisan_sayisi,
    sortable: true,
  },
  /*   {
    name: "Koordinatlar",
    selector: (row) => row.koordinat,
    sortable: true,
  },
  {
    name: "Hizmet başlangıç tarihi",
    selector: (row) => row.tarih,
    sortable: true,
  },
  {
    name: "İlişkili İş Birliği Yapılan Kurum",
    selector: (row) => row.isbirlikcikurum,
    sortable: true,
  },
  {
    name: "İlişkili Envanterler",
    selector: (row) => row.envanter,
    sortable: true,
  },
  {
    name: "İlişkili Hizmet",
    selector: (row) => row.hizmet,
    sortable: true,
  }, */
];

/* const data = [
  {
    id: "",
    merkezadi: "",
    adres: "1988",
    sehir: dummyData.map((item) => item.sehir),
  },
]; */

const personel = ({ id }) => {
  const [data, setData] = useState();
  console.log("id-data sonrası personel", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tade-be.herokuapp.com/api/table/sehir/${id}`
        );
        console.log("id res-data oncesi personel", id);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div style={{ padding: "50px 10%", backgroundColor: "rgb(55, 185, 211)" }}>
      <DataTable
        title="Merkezlere Göre Personel Tablosu"
        className=" flex flex-wrap "
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination

        /*  expandableRows
        expandableRowsComponent={ExpandedComponent} */
      />
    </div>
  );
};

export default personel;
