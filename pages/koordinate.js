import React from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "next/navigation";

const columns = [
  {
    name: "Adres",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Sehir Adı",
    selector: (row) => row.enlem,
    sortable: true,
  },
  {
    name: "Telefon Numarası 1",
    selector: (row) => row.boylam,
    sortable: true,
  },
  {
    name: "Telefon Numarası 2",
    selector: (row) => row.merkez_telefon_1,
    sortable: true,
  },
];

const koordinate = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tade-be.herokuapp.com/api/table/coordinate/${2}`
        );
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
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          style={{ padding: "6px 10px" }}></input>
      </div>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        pagination></DataTable>
    </div>
  );
};

export default koordinate;
