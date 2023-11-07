import axios from "axios";
import { useDispatch } from "react-redux";
const handleSaveRowEdits = async ({ exitEditingMode, row, values,selectedTable }) => {
    
    const dispatch = useDispatch();

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

  export default handleSaveRowEdits;