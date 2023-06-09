import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    relationship: "",
    applicationReason: "",
    supportPerson: "",
    kvkkConfirmation: false,
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    city: false,
    applicationReason: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    let hasErrors = false;

    if (formData.firstName.trim() === "") {
      errors.firstName = true;
      hasErrors = true;
    }

    if (formData.lastName.trim() === "") {
      errors.lastName = true;
      hasErrors = true;
    }

    if (formData.phoneNumber.trim() === "") {
      errors.phoneNumber = true;
      hasErrors = true;
    }

    if (formData.city.trim() === "") {
      errors.city = true;
      hasErrors = true;
    }

    if (formData.applicationReason.trim() === "") {
      errors.applicationReason = true;
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }
    console.log(formData);
  };

  return (
    <div className="flex justify-self-center  ">
      <div className="">
        <h1 className="text-[#030E5E] font-extrabold text-5xl pt-16 text-clip ">
          Psikolojik Destek Almak İçin Başvurun{" "}
        </h1>
        <div className="flex flex-col justify-center items-center pt-6">
          <form onSubmit={handleSubmit} className="flex flex-col  pt-6">
            <label htmlFor="firstName" className="">
              Ad*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{ border: "1px solid black" }}
              className={formErrors.firstName ? "error" : ""}
            />
            {formErrors.firstName && (
              <span className="error-message">Bu alan boş bırakılamaz</span>
            )}

            <label htmlFor="lastName">Soyad*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{ border: "1px solid black" }}
              className={formErrors.lastName ? "error" : ""}
            />
            {formErrors.lastName && (
              <span className="error-message">Bu alan boş bırakılamaz</span>
            )}

            <label htmlFor="phoneNumber">İletişim Numarası*</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{ border: "1px solid black" }}
              className={formErrors.phoneNumber ? "error" : ""}
            />
            {formErrors.phoneNumber && (
              <span className="error-message">Bu alan boş bırakılamaz</span>
            )}

            <label htmlFor="city">Yaşadığınız İl*</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={{ border: "1px solid black" }}
              className={formErrors.city ? "error" : ""}
            />
            {formErrors.city && (
              <span className="error-message">Bu alan boş bırakılamaz</span>
            )}

            <label>
              Destek Alacak Kişi:
              <input
                type="radio"
                name="supportPerson"
                value="Ben"
                checked={formData.supportPerson === "Ben"}
                onChange={handleChange}
              />
              Ben
            </label>

            <label>
              <input
                type="radio"
                name="supportPerson"
                value="Yakınım"
                checked={formData.supportPerson === "Yakınım"}
                onChange={handleChange}
              />
              Yakınım
            </label>
            <label htmlFor="relationship">Yakınlık Derecesi</label>
            <input
              type="text"
              id="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              style={{ border: "1px solid black" }}
            />

            <label htmlFor="applicationReason">Başvuru Nedeni*</label>
            <input
              type="text"
              id="applicationReason"
              name="applicationReason"
              value={formData.applicationReason}
              onChange={handleChange}
              style={{ border: "1px solid black" }}
              className={formErrors.applicationReason ? "error" : ""}
            />
            {formErrors.applicationReason && (
              <span className="error-message">Bu alan boş bırakılamaz</span>
            )}

            <div>
              <p>KVKK Metnini Okudum Onaylıyorum:</p>

              <label>
                <input
                  type="radio"
                  name="option"
                  value="Onaylıyorum"
                  checked={formData.option === "Onaylıyorum"}
                  onChange={handleChange}
                />
                Onaylıyorum
              </label>
            </div>

            <button type="submit" className="">
              Gönder
            </button>
          </form>
        </div>
      </div>
      <div>
        <img className="w-1200 " src="/img/katman_1.svg"></img>
        <img className="w-100" src="/img/Group.svg"></img>
        <img className="w-100" src="/img/Clip path group.svg"></img>
      </div>
    </div>
  );
};

export default FormPage;
