import React, { useEffect, useMemo, useCallback, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import { Delete, Edit, SaveIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getMerkezAPI, personelAPI } from "@/redux/actions";
import axios from "axios";

export const CreateNewAccountModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  selectedTable,
  selectedId,
  sehir,
  apiMerkez,
  personel,
}) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };
  return (
    <Dialog open={open}>
      {selectedTable == "merkez" ? (
        <DialogTitle textAlign="center">Yeni Merkez Ekle</DialogTitle>
      ) : selectedTable == "aracsayisi" ? (
        <DialogTitle textAlign="center">Yeni Merkez Ekle</DialogTitle>
      ) : (
        <DialogTitle textAlign="center">Yeni Personel Ekle</DialogTitle>
      )}
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            key="stack_d"
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1rem",
              lineHeight: "1.2rem",
              fontSize: "18px",
            }}
          >
            {selectedTable == "merkez" ? (
              <>
                <TextField
                  key="merkez_adi"
                  label="Merkez Adı"
                  name="merkez_adi"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />

                <label htmlFor="Merkez Telefon-1">Personel Telefon-1</label>
                <PhoneInput
                  country="tr"
                  key="merkez_telefon_1"
                  label="Merkez Telefon-1"
                  name="merkez_telefon_1"
                  value={values.merkez_telefon_1 || ""}
                  onChange={(value) =>
                    setValues({ ...values, merkez_telefon_1: value })
                  }
                />
                <label htmlFor="Merkez Telefon-2">Personel Telefon-2</label>
                <PhoneInput
                  country="tr"
                  key="merkez_telefon_2"
                  id="merkez_telefon_2"
                  name="merkez_telefon_2"
                  value={values.merkez_telefon_2 || ""}
                  onChange={(value) =>
                    setValues({ ...values, merkez_telefon_2: value })
                  }
                />
                <label htmlFor="sehir_id">Şehir</label>
                <select
                  name="sehir_id"
                  key="sehir_id"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                >
                  {sehir.map((item) => (
                    <option key={item.sehir_id} value={item.sehir_id}>
                      {item.sehir_adi}
                    </option>
                  ))}
                </select>

                <TextField
                  key="adres"
                  label="Merkez Adres"
                  name="adres"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
                <label htmlFor="hizmet_baslangic_tarihi">
                  Hizmet Başlangıç Tarihi
                </label>
                <input
                  type="date"
                  id="hizmet_baslangic_tarihi"
                  name="hizmet_baslangic_tarihi"
                  defaultValue="2023-07-22"
                  min="2023-01-01"
                />
              </>
            ) : selectedTable == "isbirligi" ? (
              <>
                <label htmlFor="sehir_id">Şehir</label>
                <select
                  name="sehir_id"
                  key="sehir_id"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                >
                  {sehir.map((item) => (
                    <option key={item.sehir_id} value={item.sehir_id}>
                      {item.sehir_adi}
                    </option>
                  ))}
                </select>
                <TextField
                  key="is_birligi_kurum_adi"
                  label="İşbirliği Kurum Adı"
                  name="is_birligi_kurum_adi"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </>
            ) : selectedTable == "aracsayisi" ? (
              <>
                <label htmlFor="merkez_id">Merkez</label>
                <select
                  name="merkez_id"
                  key="merkez_id"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                >
                  {apiMerkez.map((item) => (
                    <option key={item.merkez_id} value={item.merkez_id}>
                      {item.merkez_adi}
                    </option>
                  ))}
                </select>
                <label htmlFor="quantity">Gezici Araç Sayısı:</label>
                <input
                  type="number"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  id="binekarac_sayisi"
                  name="binekarac_sayisi"
                ></input>

                <label htmlFor="quantity">Karavan Araç Sayısı:</label>
                <input
                  type="number"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  id="gezicikaravan_sayisi"
                  name="gezicikaravan_sayisi"
                ></input>
              </>
            ) : selectedTable == "hizmet" ? (
              <>
                <label htmlFor="merkez_id">Merkez Adı</label>
                <select
                  name="merkez_id"
                  key="merkez_id"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                >
                  {apiMerkez.map((item) => (
                    <option key={item.merkez_id} value={item.merkez_id}>
                      {item.merkez_adi}
                    </option>
                  ))}
                </select>
                <TextField
                  key="etkinlik_adi"
                  label="Etkinlik Adı"
                  name="etkinlik_adi"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
                <label htmlFor="personel_id">Personel Adı</label>
                <select
                  name="personel_id"
                  key="personel_id"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                >
                  {personel.map((item) => (
                    <option key={item.personel_id} value={item.personel_id}>
                      {item.personel_adi} {item.personel_soyadi}
                    </option>
                  ))}
                </select>
                <label htmlFor="quantity">Danışan Sayısı:</label>
                <input
                className="border border-solid"
                  type="number"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  id="danisan_sayisi"
                  name="danisan_sayisi"
                ></input>
              </>
            ) : (
              <>
                <TextField
                  key="personel_adi"
                  label="Personel Adı"
                  name="personel_adi"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />

                <TextField
                  key="personel_soyadi"
                  label="Personel Soyadı"
                  name="personel_soyadi"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
                <label htmlFor="personel_telefon_1">Personel Telefon-1</label>
                <PhoneInput
                  country="tr"
                  id="personel_telefon_1"
                  key="personel_telefon_1"
                  name="personel_telefon_1"
                  value={values.personel_telefon_1 || ""}
                  onChange={(value) =>
                    setValues({ ...values, personel_telefon_1: value })
                  }
                />
                <label htmlFor="personel_telefon_2">Personel Telefon-2</label>
                <PhoneInput
                  country="tr"
                  key="personel_telefon_2"
                  id="personel_telefon_2"
                  name="personel_telefon_2"
                  value={values.personel_telefon_2 || ""}
                  onChange={(value) =>
                    setValues({ ...values, personel_telefon_2: value })
                  }
                />
                <TextField
                  key="personel_tc"
                  label="Personel TCNO"
                  name="personel_tc"
                  inputProps={{ maxLength: 11 }}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
                <label htmlFor="merkez_id">Merkez</label>
                <select
                  name="merkez_id"
                  key="merkez_id"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                >
                  {apiMerkez.map((item) => (
                    <option key={item.merkez_id} value={item.merkez_id}>
                      {item.merkez_adi}
                    </option>
                  ))}
                </select>
                <label htmlFor="personel_kan_grubu">Kan Grubu</label>
                <select
                  name="personel_kan_grubu"
                  key="personel_kan_grubu"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="0+">0+</option>
                  <option value="0-">0-</option>
                </select>
                <TextField
                  key="personel_adres"
                  label="Personel Adres"
                  name="personel_adres"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />

                <label htmlFor="personel_calisma_durumu">Çalışma Durumu</label>
                <select
                  name="personel_calisma_durumu"
                  key="personel_calisma_durumu"
                  value={values.personel_calisma_durumu}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                >
                  <option key="work" value={1}>
                    Çalışıyor
                  </option>
                  <option key="unwork" value={0}>
                    Çalışmıyor
                  </option>
                </select>
              </>
            )}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>İptal</Button>
        <Button color="primary" onClick={handleSubmit} variant="contained">
          {selectedTable} Ekle
        </Button>
      </DialogActions>
    </Dialog>
  );
};

function Tables_Merkez(props) {
  const dispatch = useDispatch();
  const { apiMerkez, selectedId, selectedTable } = props;
  const [columns, setColumns] = useState([]);
  const [tableData, setTableData] = useState();
  const veriler = useSelector((state) => state.adminMerkez);
  const sehir = useSelector((state) => state.sehir);
  const personel = useSelector((state) => state.Personel);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  // useEffect(() => {
  //   dispatch(getMerkezAPI(selectedId, selectedTable));

  // }, [selectedTable]);
  // useEffect(() => {

  // }, [selectedId]);
  // (" ");
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
  }, [selectedId, selectedTable]);

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    const { merkez_id, personel_id, sehir_id, arac_sayisi_id, ...nValues } =
      values;
      const {merkez_adi,...mValues}= nValues
      console.log(values);
    selectedTable == "isbirligi"
      ? await axios
          .put(
            `http://localhost:9000/api/table/admin/${selectedTable}`,
            nValues
          )
          .then((res) => {
            return console.log(res.data);
          })
          .catch((error) => console.log(error))
      : selectedTable == "aracsayisi"
      ? await axios
          .put(`http://localhost:9000/api/table/admin/aracsayisi/`, nValues)
          .then((res) => {
            return console.log(res.data);
          })
          .catch((error) => console.log(error))
      : selectedTable == "hizmet"
      ? 
       await axios
          .put(
            `http://localhost:9000/api/table/admin/hizmet/`,
            mValues
          )
          .then((res) => {
            return console.log(res.data);
          })
          .catch((error) => console.log(error)) :
          await axios
          .put(
            `http://localhost:9000/api/table/admin/${selectedTable}/${row.original.merkez_id}`,
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
      .post(`http://localhost:9000/api/table/admin/${selectedTable}`, values)
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
          `http://localhost:9000/api/table/admin/${selectedTable}/${row.original.merkez_id}/${row.original.personel_id}`
        )
        .then((res) => {
          return console.log(res.data, "Merkezden Personel Silindi");
        })
        .catch((error) => console.log(error));
      dispatch(getMerkezAPI(selectedId, selectedTable));
    } else if (selectedTable === "isbirligi") {
      await axios
        .delete(
          `http://localhost:9000/api/table/admin/isbirligi/${row.original.Merkez_is_birligi_id}`
        )
        .then((res) => {
          return console.log(res.data, "İşbirliği kesildi Silindi");
        })
        .catch((error) => console.log(error));

      dispatch(getMerkezAPI(selectedId, selectedTable));
    }
    else if (selectedTable === "hizmet") {
      await axios
        .delete(
          `http://localhost:9000/api/table/admin/hizmet/${row.original.hizmet_id}`
        )
        .then((res) => {
          return console.log(res.data, "Hizmet Silindi");
        })
        .catch((error) => console.log(error));

      dispatch(getMerkezAPI(selectedId, selectedTable));
    }
     else if (selectedTable === "aracsayisi") {
      await axios
        .delete(
          `http://localhost:9000/api/table/admin/aracsayisi/${row.original.arac_sayisi_id}`
        )
        .then((res) => {
          return console.log(res.data, "Araç envanteri Silindi");
        })
        .catch((error) => console.log(error));

      dispatch(getMerkezAPI(selectedId, selectedTable));
    } else if (selectedTable === "merkez") {
      await axios
        .delete(
          `http://localhost:9000/api/table/admin/merkez/${row.original.merkez_id}`
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
    <div className="w-[95%] m-auto">
      {columns.length > 2 ? (
        <MaterialReactTable
          columns={columns}
          data={veriler}
          enableColumnFilterModes
          enableBottomToolbar={true}
          enableColumnResizing
          enableColumnVirtualization
          enableGlobalFilterModes
          enableEditing={true}
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
      ) : (
        <h1 className="text-center mt-5">Lütfen Tablo Seçiniz !!</h1>
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
