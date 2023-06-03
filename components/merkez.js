import React from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "next/navigation";

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "gray",
      color: "white",
    },
  },
  rows: {
    style: {
      minHeight: "72px",
      flexWrap: "wrap", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontWeight: "600",
      textTransform: "uppercase",
      display: "flex",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      flexWrap: "wrap",
      alignItems: "center",
    },
  },
};
const columns = [
  {
    name: "Sehir Adı",
    selector: (row) => row.sehir_adi,
    sortable: true,
  },
  {
    name: "Merkez Adı",
    selector: (row) => row.merkez_adi,
    sortable: true,
  },

  {
    name: "Telefon 1",
    selector: (row) => row.merkez_telefon_1,
    sortable: true,
  },
  {
    name: "Telefon 2",
    selector: (row) => row.merkez_telefon_1,
    sortable: true,
  },
  {
    name: "Adres",
    selector: (row) => row.adres,
    sortable: true,
  },
  {
    name: "Ulaşılan Kişi",
    selector: (row) => row.total,
    sortable: true,
  },
];

const Merkez = ({ id }) => {
  const [data, setData] = useState();
  console.log("id-data sonrası merkez", id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tade-be.herokuapp.com/api/table/sehir/${id}`
        );
        console.log("id-resçdata oncesi merkez", id);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  /*    useEffect(() => {
      const fetData = async () => {
        axios
          .get("https://tade-be.herokuapp.com/api/table/coordinate/1")
          .then((res) => {
            console.log(res.data[0]);
            setRecords(res.data);
            setFilterRecords(res.data);
          })
          .catch((error) => console.log(error));
      };
      fetData();
    }, []); */

  return (
    <div style={{ padding: "50px 10%", backgroundColor: "rgb(55, 185, 211)" }}>
      <DataTable
        title="Merkezlere Göre Sehir Tablosu"
        columns={columns}
        data={data}
        customStyles={customStyles}
        dense
        highlightOnHover
        pointerOnHover
        pagination></DataTable>
    </div>
  );
};

export default Merkez;
