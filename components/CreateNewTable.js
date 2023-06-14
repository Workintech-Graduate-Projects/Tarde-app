import { React, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

export const CreateNewAccountModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  selectedTable,
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
                <label htmlFor="etkinlik">Etkinlik Tarihi</label>
                <input
                  className="border border-solid"
                  type="date"
                  id="etkinlik"
                  name="etkinlik"
                  defaultValue="2023-07-22"
                  min="2023-01-01"
                />

                <label htmlFor="personel_id">Personel Adı</label>
                <select
                  className="border border-solid"
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
