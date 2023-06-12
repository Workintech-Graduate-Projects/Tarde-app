import axios from "axios";
import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    danisan_adi: "",
    danisan_soyadi: "",
    danisan_numara: "",
    danisan_sehir: "",
    danisan_yakinlik: "Ben",
    supportPerson: "",
    danisan_basvuru_nedeni:"",

  });
  const [akraba,setAkraba]=useState("Ben")
  const [kvkk,setKvkk]=useState(false)
  const [formErrors, setFormErrors] = useState({
    danisan_adi: false,
    danisan_soyadi: false,
    danisan_numara: false,
    danisan_sehir: false,
    danisan_yakinlik: false,
    danisan_basvuru_nedeni: false,
    kvkk:false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    let hasErrors = false;

    if (formData.danisan_adi.trim() === "") {
      errors.danisan_adi = true;
      hasErrors = true;
    }

    if (formData.danisan_soyadi.trim() === "") {
      errors.danisan_soyadi = true;
      hasErrors = true;
    }

    if (formData.danisan_numara.trim() === "") {
      errors.danisan_numara = true;
      hasErrors = true;
    }

    if (formData.danisan_sehir.trim() === "") {
      errors.danisan_sehir = true;
      hasErrors = true;
    }

    if (formData.danisan_basvuru_nedeni.trim() === "") {
      errors.danisan_basvuru_nedeni = true;
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }
   
    const {supportPerson,...nFormData}=formData;
   
    if(kvkk==true){
      await axios
      .post(`http://localhost:9000/api/table/admin/danisan/`,nFormData)
      .then((res) => {
        return console.log(res.data);
      })
      .catch((error) => console.log(error));
    }
    else
    {errors.kvkk = true; hasErrors = true;
    }
  };

  return (
    <div className="flex justify-self-center  ">
      <div className="pt-16 rounded-lg ">
        <h1 className="text-[#030E5E] font-extrabold text-5xl pt-8 mb-8 ">
          {" "}
          Psikolojik Destek Almak İçin Başvurun
        </h1>
        <div className="block md:hidden ">
          <img className="" src="/img/Group.svg"></img>
        </div>

        <div className="flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <label htmlFor="danisan_adi">Adınız*</label>
            <input
              type="text"
              id="danisan_adi"
              name="danisan_adi"
              value={formData.danisan_adi}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                width: "300px",
                marginBottom: "10px",
              }}
              className={formErrors.danisan_adi ? "error" : ""}
            />
            {formErrors.danisan_adi && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}

            <label htmlFor="danisan_soyadi">Soyadınız*</label>
            <input
              type="text"
              id="danisan_soyadi"
              name="danisan_soyadi"
              value={formData.danisan_soyadi}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
              className={formErrors.danisan_soyadi ? "error" : ""}
            />
            {formErrors.danisan_soyadi && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}

            <label htmlFor="danisan_numara">İletişim Numaranız*</label>
            <input
              type="text"
              id="danisan_numara"
              name="danisan_numara"
              value={formData.danisan_numara}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
              className={formErrors.danisan_numara ? "error" : ""}
            />
            {formErrors.danisan_numara && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}

            <label htmlFor="danisan_sehir">Yaşadığınız İl*</label>
            <input
              type="text"
              id="danisan_sehir"
              name="danisan_sehir"
              value={formData.danisan_sehir}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
              className={formErrors.danisan_sehir ? "error" : ""}
            />
            {formErrors.danisan_sehir && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}
            <div className="flex">
              <label>
                Destek Alacak Kişi:
                <input
                  type="radio"
                  name="supportPerson"
                  value="Ben"
                  checked={akraba === "Ben"}
                  onChange={()=>{setAkraba("Ben");setFormData({
                    ...formData,
                    danisan_yakinlik:"Ben",
                  })}}
                  style={{
                    marginBottom: "3px",
                    height: "16px",
                    width: "22px",
                    marginBottom: "10px",
                  }}
                />
                Ben
              </label>
    
              <label>
                <input
                  type="radio"
                  name="supportPerson"
                  value="Yakınım"
                  checked={akraba === "Yakınım"}
           onChange={()=>setAkraba("Yakınım")}
                  style={{
                    marginBottom: "3px",
                    height: "16px",
                    width: "22px",
                    marginBottom: "10px",
                  }}
                />
                Yakınım
              </label>
            </div>
            {akraba == "Yakınım" && (

    <>
            <label htmlFor="danisan_yakinlik">Yakınlık Dereceniz</label>
            <input
              type="text"
              id="danisan_yakinlik"
              name="danisan_yakinlik"
              value={formData.danisan_yakinlik}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
              /> 
              </>)
            }
            

            <label htmlFor="danisan_basvuru_nedeni">Başvuru Nedeniniz*</label>
            <input
              type="text"
              id="danisan_basvuru_nedeni"
              name="danisan_basvuru_nedeni"
              value={formData.danisan_basvuru_nedeni}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "25px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
              className={formErrors.danisan_basvuru_nedeni ? "error" : ""}
            />
            {formErrors.danisan_basvuru_nedeni && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}

            <div className="flex">
              <p>KVKK Metnini Okudum Onaylıyorum:</p>

              <label>
                <input
                  type="checkbox"
                  name="kvkk"
                
                  checked={kvkk}
                  onChange={()=>setKvkk(!kvkk )}
                  style={{
                    marginBottom: "3px",
                    height: "16px",
                    width: "22px",
                    marginBottom: "10px",
                  }}
                />
              {  formErrors.kvkk && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#F8CB4E] block mt-[15px] h-12 w-22 
              rounded-lg"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
      <div className=" justify-self-center">
        <img className="w-100 pt-32" src="/img/katman_1.svg"></img>
        <img className="w-100 py-2" src="/img/Group.svg"></img>
        <img className="w-100 py-2" src="/img/Clip path group.svg"></img>
      </div>
    </div>
  );
};

export default FormPage;
