import React, { useEffect, useMemo, useState } from "react";
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
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getMerkezAPI, editPersonelAPI } from "@/redux/actions";
import axios from "axios";

export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
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
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

function Tables_Merkez() {
  const [columns, setColumns] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [tableData, setTableData] = useState();

  const [createMoDalOpen, setCreateModalOpen] = useState(false);

  const veriler = useSelector((state) => state.adminMerkez);

  const dispatch = useDispatch();
  const selectedId = sessionStorage.getItem("id");
  const selectedTable = sessionStorage.getItem("table");
  useEffect(() => {
    dispatch(getMerkezAPI(selectedId, selectedTable));
  }, [selectedId, selectedTable]);

  let n_Data = [];
  useEffect(() => {
    if (veriler != null) {
      n_Data = veriler[0];
    } else {
      n_Data = [
        {
          accessorKey: "sehir_id",
          header: "Gezici Araç",
          maxSize: 150,
          minSize: 120,
        },
      ];
    }
    const newColumns = [];
    for (const key in n_Data) {
      // console.log(key);
      newColumns.push({
        accessorKey: key,
        header: key,
        maxSize: 150,
        minSize: 120,
      });
    }
    setColumns(newColumns);
    // console.log(newColumns);
  }, [selectedId, selectedTable]);

  const handleSaveRowEdits = async ({ exitEditingMode, values }) => {
    // dispatch(editPersonelAPI(selectedId,selectedTable,values));
   
    await axios
      .put(
        `http://localhost:9000/api/table/admin/merkez/2`,
values

      )
      .then((res) => {
        return console.log(res.data);
      })

      .catch((error) => console.log(error));
console.log(selectedId);
    console.log(values);
    exitEditingMode();
  };

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  return (
    <div className="w-[90%] m-auto">
      {columns.length > 2 && (
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
          muiTableContainerProps={{ sx: { maxHeight: "600px" } }}
          rowVirtualizerProps={{ overscan: 5 }} //optionally customize the row virtualizer
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex" }}>
              <Tooltip sx={{ p: 0.2 }} arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip sx={{ p: 0.2 }} arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          renderTopToolbarCustomActions={() => (
            <Button
              color="secondary"
              onClick={() => setCreateModalOpen(true)}
              variant="contained"
            >
              Create New Account
            </Button>
          )}
        />
      )}
    </div>
  );
}

export default Tables_Merkez;
