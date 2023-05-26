import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { dummyData } from "./dummy-data";

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

export default function dashtable(props) {
  const { sehir } = props;

  const [editingRowId, setEditingRowId] = useState(null);
  const [editedData, setEditedData] = useState({});
console.log(sehir)
  const data3 = [dummyData.filter((item) => item.sehir == sehir)[0]];
  const data1 = data3[0];
 
  const dataKey = Object.keys(data1);
  const dataObj = Object.values(data1);
  const columnsDash = []; //colums
  const dataIndex = [];
  dataKey.map((item) =>
  columnsDash.push({ name: item, selector: row => row[item] })
  );
  console.log(data1);

  const handleEdit = (row) => {
    setEditingRowId(row.id);
    setEditedData(row);
  };
  const data = [
    {
      id: 1,
      sehir: "Beetlejuice",
      personelAdi: "1988",
      telefonNumaralari: ["0549 553 21 00"],
      ulasilanKisi: 24,
      aracSayisi: 5,
      merkezler:
        ["İzmit & Nilüfer Belediyesi Çadırkent - Kahramanmaraş, Onikişubat","Doğa Koleji - Kahramanmaraş, Onikişubat"],
      isbirlikciKurumlar: "İzmit Belediyesi",
      coordinates: 36.93,
    },
  ];
  const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};
  const handleSave = () => {
    setEditingRowId(null);
    setEditedData({});
  };


  const handleCancel = () => {
    setEditingRowId(null);
    setEditedData({});
  };
  return (
    <DataTable
      className="flex flex-col m-"
      columns={[
        ...columnsDash,
        {
          name: "Actions",
          cell: (row) =>
            editingRowId === row.id ? (
              <>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <button onClick={() => handleEdit(row)}>Edit</button>
            ),
        },
      ]}
      data={data}
      pagination
      selectableRows
      dense
      onSelectedRowsChange={(rows) =>
        rows.selectedRows.map((item) => console.log(item.id))
      }
      expandableIcon
    />
  );
}
