import axios from "axios";
import React, { useState } from "react";

const SahaFormPage = () => {
  const [formData, setFormData] = useState({
    gonullu_adi: "",
    gonullu_soyadi: "",
    gonullu_numara: "",
    gonullu_sehir: "",
    gonullu_baslagıc: "",
    gonullu_bitis: "",
    gonullu_motivasyon: "",
    supportPerson: "",
    kvkkConfirmation: false,
  });
  const [formErrors, setFormErrors] = useState({
    gonullu_adi: false,
    gonullu_soyadi: false,
    gonullu_numara: false,
    gonullu_sehir: false,
    gonullu_motivasyon: false,
    kvkkConfirmation: false,
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

    if (formData.gonullu_adi.trim() === "") {
      errors.gonullu_adi = true;
      hasErrors = true;
    }

    if (formData.gonullu_soyadi.trim() === "") {
      errors.gonullu_soyadi = true;
      hasErrors = true;
    }

    if (formData.gonullu_numara.trim() === "") {
      errors.gonullu_numara = true;
      hasErrors = true;
    }

    if (formData.gonullu_sehir.trim() === "") {
      errors.gonullu_sehir = true;
      hasErrors = true;
    }

    if (formData.gonullu_motivasyon.trim() === "") {
      errors.gonullu_motivasyon = true;
      hasErrors = true;
    }
    if (formData.kvkkConfirmation == false) {
      errors.kvkkConfirmation = true;
      hasErrors = true;
    }
    console.log(errors.kvkkConfirmation);
    if (hasErrors) {
      setFormErrors(errors);
      return;
    }
    const { kvkkConfirmation, supportPerson, ...nFormData } = formData;
    console.log(nFormData);
    await axios
      .post(`http://localhost:9000/api/table/admin/gonullu/`, nFormData)
      .then((res) => {
        return console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center  rounded-[55px] h-[100%] xl:bg-[rgba(251,240,212,0.20)]">
      <div className="lg:pt-2 pl-4 rounded-lg ">
        <h1 className="text-[#030E5E] font-extrabold text-5xl pt-8 mb-8 mr-12">
          {" "}
          Sahada Destek Vermek için Gönüllü Ol
        </h1>
        <div className="block md:hidden ">
          <img className="" src="/img/Group.svg"></img>
        </div>

        <div className="flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <label  style={{
                fontFamily: "roboto",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4A4A4A",
                marginBottom: "7px",
              }} htmlFor="gonullu_adi">Adınız *</label>
            <input
              type="text"
              id="gonullu_adi"
              name="gonullu_adi"
              value={formData.gonullu_adi}
              onChange={handleChange}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
             
                marginBottom: "14px",
              }}
              className={formErrors.gonullu_adi ? "error" : ""}
            />
            {formErrors.gonullu_adi && (
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

            <label   style={{
                fontFamily: "roboto",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4A4A4A",
                marginBottom: "7px",
              }} htmlFor="gonullu_soyadi">Soyadınız *</label>
            <input
              type="text"
              id="gonullu_soyadi"
              name="gonullu_soyadi"
              value={formData.gonullu_soyadi}
              onChange={handleChange}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "14px",
              }}
              className={formErrors.gonullu_soyadi ? "error" : ""}
            />
            {formErrors.gonullu_soyadi && (
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

            <label  style={{
                fontFamily: "roboto",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4A4A4A",
                marginBottom: "7px",
              }} htmlFor="gonullu_numara">İletişim Numaranız *</label>
            <input
              type="text"
              id="gonullu_numara"
              name="gonullu_numara"
              value={formData.gonullu_numara}
              onChange={handleChange}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "14px",
              }}
              className={formErrors.gonullu_numara ? "error" : ""}
            />
            {formErrors.gonullu_numara && (
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

            <label style={{
                fontFamily: "roboto",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4A4A4A",
                marginBottom: "7px",
              }} htmlFor="gonullu_sehir">Çalışmak İstediğiniz İl *</label>
            <input
              type="text"
              id="gonullu_sehir"
              name="gonullu_sehir"
              value={formData.gonullu_sehir}
              onChange={handleChange}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "14px",
              }}
              className={formErrors.gonullu_sehir ? "error" : ""}
            />
            {formErrors.gonullu_sehir && (
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

            <label style={{
                fontFamily: "roboto",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4A4A4A",
                marginBottom: "7px",
              }} htmlFor="gonullu_baslagıc">
              Çalışmak İstediğiniz tarih başlangıcı *{" "}
            </label>
            <input
              type="date"
              id="gonullu_baslagıc"
              name="gonullu_baslagıc"
              value={formData.gonullu_baslagıc}
              onChange={handleChange}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "14px",
              }}
            />
            <label  style={{
                fontFamily: "roboto",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4A4A4A",
                marginBottom: "7px",
              }} htmlFor="gonullu_bitis">
              Çalışmak istediğiniz tarih bitişi *{" "}
            </label>
            <input
              type="date"
              id="gonullu_bitis"
              name="gonullu_bitis"
              value={formData.gonullu_bitis}
              onChange={handleChange}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "14px",
              }}
            />

            <label style={{
                fontFamily: "roboto",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4A4A4A",
                marginBottom: "7px",
              }} htmlFor="gonullu_motivasyon">
              Kısaca sahada gönüllü çalışma motivasyonunuz *
            </label>
            <input
              type="text"
              id="gonullu_motivasyon"
              name="gonullu_motivasyon"
              value={formData.gonullu_motivasyon}
              onChange={handleChange}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "25px",
                borderRadius: "7px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
              className={formErrors.gonullu_motivasyon ? "error" : ""}
            />
            {formErrors.gonullu_motivasyon && (
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

            <div className="flex flex-row mt-2">
             

              <label className="mt-1">
                <input
                  type="checkbox"
                  name="kvkkConfirmation"
                  onChange={handleChange}
                  value={!formData.kvkkConfirmation}
                  style={{
                    marginBottom: "3px",
                    height: "16px",
                    width: "22px",
                    
                    marginBottom: "10px",
                    borderRadius: "25px",
                  }}
                  className={formErrors.kvkkConfirmation ? "error" : ""}
                />
              <p className=" text-[14px] text-[#4A4A4A] font-normal">KVKK Metnini Okudum Onaylıyorum:</p>
              </label>
            {formErrors.kvkkConfirmation && (
              <span
              style={{
                fontSize: "12px",
                color: "red",
              }}
              className="error-message"
              >
                Kvkk Metinin Kabul Ediniz
              </span>
            )}
            </div>
<div>

            <button
              type="submit"
              className="bg-[#F8CB4E] rounded-lg font-black  px-4 py-3 mt-[15px] text-[rgba(0,12,92,1)]"
              >
              BAŞVURUMU GÖNDER
            </button>
              </div>
          </form>
        </div>
      </div>
      <div className=" justify-self-center">
        <img className="w-80 h-80 pt-32" src="/img/katman_1.svg"></img>
        <img className="w-80 h-80 pt-32" src="/img/Group 1.svg"></img>
      </div>
    </div>
  );
};

export default SahaFormPage;
