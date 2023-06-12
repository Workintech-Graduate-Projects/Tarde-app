import React, { useEffect, useState } from "react";
import MaterialReactTable from "material-react-table";
import { useDispatch, useSelector } from "react-redux";
import { getDanisan } from "@/redux/actions";

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
  import { Delete, Edit } from '@mui/icons-material';
import axios from "axios";

const Danisan = () => {
  const [columns, setColumns] = useState([]);
  const dispatch = useDispatch();
  const veriler = useSelector((state) => state.danisan);

  useEffect(() => {
    dispatch(getDanisan());
  }, [veriler]);
  let m_Data = [];
  useEffect(() => {
    if (veriler != null) {
      m_Data = veriler[0];
    } else {
      m_Data = [
        {
          accessorKey: "sehir_id",
          header: "Gezici Araç",
          Size: 100,
        },
      ];
    }
    const newColumns = [];
    for (const key in m_Data) {
      // console.log(key);
      newColumns.push({
        accessorKey: key,
        header: key,
        Size: 100,
      });
    }

    setColumns(newColumns);

    // console.log(newColumns);
  }, [veriler]);
  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {

    await axios
          .put(
            `http://localhost:9000/api/table/admin/danisan/${row.original.danisan_id}`,
            values
          )
          .then((res) => {
            return console.log(res.data);
          })
          .catch((error) => console.log(error))
    exitEditingMode();
  }
  const handleDeleteRow = async (row) => {
    if (!confirm(`Silme konusunda mütabık mıyız ?`)) {
      return;
    }
   console.log(row.original)
      await axios
        .delete(
          `http://localhost:9000/api/table/admin/danisan/${row.original.danisan_id}`
        )
        .then((res) => {
          return console.log(res.data, "Merkezden Personel Silindi");
        })
        .catch((error) => console.log(error));
 
    }

  return (
    <div className="w-[95%] m-auto">
      <MaterialReactTable
        columns={columns}
        data={veriler} //10,000 rows
        enablePinning
        enableRowNumbers
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
        enableEditing={true}
        displayColumnDefOptions={{
            "mrt-row-actions": { size: 100 },
            "mrt-row-expand": { size: 0 },
          }}
        onEditingRowSave={handleSaveRowEdits}
        enableRowVirtualization
        muiTableContainerProps={{ sx: { maxHeight: "600px" } }}
      />
    </div>
  );
};

export default Danisan;
