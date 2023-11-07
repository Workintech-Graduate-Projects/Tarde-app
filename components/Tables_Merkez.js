import React, { useEffect, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button, IconButton, Typography, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getMerkezAPI, personelAPI } from "@/redux/actions";
import axios from "axios";
import { CreateNewAccountModal } from "./CreateNewTable";

function Tables_Merkez(props) {
  const dispatch = useDispatch();
  const { apiMerkez, selectedId, selectedTable } = props;
  const [columns, setColumns] = useState([]);
  const veriler = useSelector((state) => state.adminMerkez);
  const sehir = useSelector((state) => state.sehir);
  const personel = useSelector((state) => state.Personel);
  const [createModalOpen, setCreateModalOpen] = useState(false);


  let n_Data = [];
  useEffect(() => {
    dispatch(getMerkezAPI(selectedId, selectedTable));
    dispatch(personelAPI());

    if (veriler != null) {
      n_Data = veriler[0];
    } else {
      n_Data = [
        {
          accessorKey: "sehir_id",
          header: "Gezici Araç",
          Size: 100,
        },
      ];
    }
    const newColumns = [];
    for (const key in n_Data) {
      // console.log(key);
      newColumns.push({
        accessorKey: key,
        header: key,
        Size: 100,
      });
    }

    setColumns(newColumns);

    // console.log(newColumns);
  }, [selectedTable, selectedId, veriler]);

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    const { merkez_id, personel_id, sehir_id, arac_sayisi_id, ...nValues } =
      values;
    const { merkez_adi, ...mValues } = nValues;
    console.log(values);
    selectedTable == "isbirligi"
      ? await axios
          .put(
            `https://tarde-be-vgfs.onrender.com/api/table/admin/${selectedTable}`,
            nValues
          )
          .then((res) => {
            return console.log(res.data);
          })
          .catch((error) => console.log(error))
      : selectedTable == "aracsayisi"
      ? await axios
          .put(`https://tarde-be-vgfs.onrender.com/api/table/admin/aracsayisi/`, nValues)
          .then((res) => {
            return console.log(res.data);
          })
          .catch((error) => console.log(error))
      : selectedTable == "hizmet"
      ? await axios
          .put(`https://tarde-be-vgfs.onrender.com/api/table/admin/hizmet/`, mValues)
          .then((res) => {
            return console.log(res.data);
          })
          .catch((error) => console.log(error))
      : await axios
          .put(
            `https://tarde-be-vgfs.onrender.com/api/table/admin/${selectedTable}/${row.original.merkez_id}`,
            nValues
          )
          .then((res) => {
            return console.log(res.data);
          })
          .catch((error) => console.log(error));
    exitEditingMode();
    dispatch(getMerkezAPI(selectedId, selectedTable));
  };

  const handleCreateNewRow = async (values) => {
    console.log(values);
    await axios
      .post(`https://tarde-be-vgfs.onrender.com/api/table/admin/${selectedTable}`, values)
      .then((res) => {
        return console.log(res.data);
      })
      .catch((error) => console.log(error));
    dispatch(getMerkezAPI(selectedId, selectedTable));
  };

  const handleDeleteRow = async (row) => {
    if (!confirm(`Silme konusunda mütabık mıyız ?`)) {
      return;
    }
    if (selectedTable === "merkezpersonel") {
      await axios
        .delete(
          `https://tarde-be-vgfs.onrender.com/api/table/admin/${selectedTable}/${row.original.merkez_id}/${row.original.personel_id}`
        )
        .then((res) => {
          return console.log(res.data, "Merkezden Personel Silindi");
        })
        .catch((error) => console.log(error));
      dispatch(getMerkezAPI(selectedId, selectedTable));
    } else if (selectedTable === "isbirligi") {
      await axios
        .delete(
          `https://tarde-be-vgfs.onrender.com/api/table/admin/isbirligi/${row.original.Merkez_is_birligi_id}`
        )
        .then((res) => {
          return console.log(res.data, "İşbirliği kesildi Silindi");
        })
        .catch((error) => console.log(error));

      dispatch(getMerkezAPI(selectedId, selectedTable));
    } else if (selectedTable === "hizmet") {
      await axios
        .delete(
          `https://tarde-be-vgfs.onrender.com/api/table/admin/hizmet/${row.original.hizmet_id}`
        )
        .then((res) => {
          return console.log(res.data, "Hizmet Silindi");
        })
        .catch((error) => console.log(error));

      dispatch(getMerkezAPI(selectedId, selectedTable));
    } else if (selectedTable === "aracsayisi") {
      await axios
        .delete(
          `https://tarde-be-vgfs.onrender.com/api/table/admin/aracsayisi/${row.original.arac_sayisi_id}`
        )
        .then((res) => {
          return console.log(res.data, "Araç envanteri Silindi");
        })
        .catch((error) => console.log(error));

      dispatch(getMerkezAPI(selectedId, selectedTable));
    } else if (selectedTable === "merkez") {
      await axios
        .delete(
          `https://tarde-be-vgfs.onrender.com/api/table/admin/merkez/${row.original.merkez_id}`
        )
        .then((res) => {
          return console.log(res.data, "Merkez Silindi");
        })
        .catch((error) => console.log(error));
      dispatch(getMerkezAPI(selectedId, selectedTable));
    }
  };

  const modalStyles = {
    modalContainer: {
      backgroundColor: "#F8CB4E",
    },
    modalContent: {
      backgroundColor: "#F8CB4E",
    },
  };

  return (
    <div className="w-[95%]  m-auto">
      
      {columns.length > 2 ? (
        <MaterialReactTable
          columns={columns}
          data={veriler}
          enableColumnFilterModes
          enableBottomToolbar={true}
          enableColumnResizing
          enableColumnVirtualization
          enableEditing={selectedTable != "gonullu"}
          enableGlobalFilterModes
          editingMode="modal" //default
          muiTableHeadCellColumnActionsButtonProps={{
            sx: {
              fontSize: 11,
              direction: "flex-column",
              display: "flex",
            },
          }}
          displayColumnDefOptions={{
            "mrt-row-actions": { size: 100 },
            "mrt-row-expand": { size: 0 },
          }}
          onEditingRowSave={handleSaveRowEdits}
          muiTableHeadCellProps={{
            sx: {
              fontSize: 11,

              display: "flex",
              alignItems: "center",
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              fontSize: 10,
            },
          }}
          muiTableContainerProps={{ sx: { maxHeight: "800px" } }}
          rowVirtualizerProps={{ overscan: 5 }} //optionally customize the row virtualizer
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
              <Tooltip sx={{}} arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>

              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          renderTopToolbarCustomActions={() => (
            <Button
              color="secondary"
              onClick={() => setCreateModalOpen(true)}
              variant="contained"
              sx={{
                backgroundColor: "#000C5C",
                "&:hover": {
                  backgroundColor: "#F6BE31",
                },
              }}
            >
              Ekle
            </Button>
          )}
          initialState={
            selectedTable == "merkez"
              ? {
                  columnVisibility: {
                    merkez_id: false,
                    merkez_personel_id: false,
                    sehir_id: false,
                    telefon_numarası: false,
                    merkez_telefon_2: false,
                  },
                }
              : {
                  columnVisibility: {
                    personel_kan_grubu: false,
                    personel_tc: false,
                    personel_adres: false,
                    personel_id: false,
                    merkez_id: false,
                    merkez_personel_id: false,
                    sehir_id: false,
                  },
                }
          }
          renderDetailPanel={({ row }) =>
            selectedTable == "merkezpersonel" ? (
              <Box
                sx={{
                  display: "grid",
                  margin: "auto",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                }}
              >
                <Typography>
                  Çalışma Durumu:
                  {row.original.personel_calisma_durumu == 0
                    ? "Çalışmıyor"
                    : "Çalışıyor"}
                </Typography>
                <br />
                <Typography>
                  Kan Grubu: {row.original.personel_kan_grubu}
                </Typography>
                <Typography>
                  Personel Adres: {row.original.personel_adres}
                </Typography>
                <Typography>TCNO: {row.original.personel_tc}</Typography>
              </Box>
            ) : selectedTable == "isbirligi" ? (
              <Box
                sx={{
                  display: "grid",
                  margin: "auto",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                }}
              ></Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  margin: "auto",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                }}
              >
                <br />
                <Typography>Merkez_id: {row.original.merkez_id}</Typography>
              </Box>
            )
          }
        />
      ) : (<>
        <button onClick={() => setCreateModalOpen(true)} >Ekle</button>
        <h1 className="text-center mt-5">Lütfen Tablo Seçiniz !!</h1>
      </>
      )}

      <CreateNewAccountModal
        style={modalStyles}
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        selectedTable={selectedTable}
        selectedId={selectedId}
        apiMerkez={apiMerkez}
        sehir={sehir}
        personel={personel}
        onSubmit={handleCreateNewRow}
      />
    </div>
  );
}

export default Tables_Merkez;
