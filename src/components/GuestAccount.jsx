"use client";
import React, { useState } from "react";

const GuestAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
    age: "",
    date: "",
    emergencyContact: "",
  });

  const [ageValid, setAgeValid] = useState(true);
  const [mobileValid, setMobileValid] = useState(true);
  const [emergencyContactValid, setEmergencyContactValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);

    if (name === "mobile") {
      setMobileValid(value.length === 10);
    }
    if (name === "emergencyContact") {
      setEmergencyContactValid(value.length === 10);
    }
    if (name === "age") {
      setAgeValid(value.length === 2);
    }
    if (name === "email") {
      setEmailValid(value.endsWith("@gmail.com"));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      setMobileValid(false);
      return;
    }
    if (formData.emergencyContact.length !== 10) {
      setEmergencyContactValid(false);
      return;
    }
    if (formData.age.length !== 2) {
      setAgeValid(false);
      return;
    }
    if (!formData.email.endsWith("@gmail.com")) {
      setEmailValid(false);
      return;
    }

    setAgeValid(true);
    setMobileValid(true);
    setEmergencyContactValid(true);
    setEmailValid(true);

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Registration successful!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        gender: "",
        address: "",
        age: "",
        date: "",
        emergencyContact: "",
      });
    } else {
      alert("Registration Sucessful.");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        gender: "",
        address: "",
        age: "",
        date: "",
        emergencyContact: "",
      });
    }
  };

  return (
    <>
      <section className="py-5">
        <div className=" container pt-5 mt-5">
          <div className="grayborder boxshadow py-4 px-3 p-sm-5 guest_width mx-auto rounded-3 bg-white">
            <p className="mb-0 fs_lg fw-semibold font_poppins text-black text-center">
              Please fill your details
            </p>
            <form onSubmit={handleSubmit}>
              <div className="d-flex align-items-center flex-column flex-md-row gap-2 gap-md-3 mt-4">
                <input
                  required
                  className="mb-2 mb-md-3 p-3 rounded-3 grayborder input_style_2 inputwidths"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
                <input
                  required
                  className="mb-2 mb-md-3 p-3 rounded-3 grayborder input_style_2 inputwidths"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
              </div>
              {!emailValid && (
                <p className="text-danger text-end">
                  Email must be a valid Gmail address
                </p>
              )}
              <div className="d-flex align-items-center flex-column flex-md-row gap-2 gap-md-3 mt-2">
                <select
                  required
                  className="mb-2 mb-md-3 p-3 rounded-3 bg-white grayborder clr_gray input_style_2 inputwidths"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                <input
                  required
                  className="mb-2 mb-md-3 p-3 rounded-3 grayborder input_style_2 inputwidths"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="d-flex align-items-center flex-column flex-md-row gap-2 gap-md-3 mt-2">
                <div className="d-flex flex-column inputwidths">
                  <input
                    required
                    className="mb-2 mb-md-3 p-3 rounded-3 grayborder input_style_2 w-100"
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                  />
                  {!mobileValid && (
                    <p className="text-danger">
                      Mobile Number must be 10 digits
                    </p>
                  )}
                </div>
                <div className="d-flex flex-column inputwidths">
                  <input
                    required
                    className="mb-2 mb-md-3 p-3 rounded-3 grayborder input_style_2 w-100"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter Your Age"
                  />
                  {!ageValid && (
                    <p className="text-danger text-end">
                      Age must be 2 digits like (00)
                    </p>
                  )}
                </div>
              </div>
              <div className="d-flex align-items-center flex-column flex-md-row gap-2 gap-md-3 mt-2">
                <div className="position-relative inputwidths">
                  <input
                    required
                    className="mb-2 mb-md-3 p-3 rounded-3 bg-white grayborder input_style_2 w-100"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {!formData.date && (
                    <span
                      className="position-absolute top-50 start-0 translate-middle-y d-sm-none text-muted ps-3"
                      style={{ pointerEvents: "none" }}
                    >
                      dd/mm/yyyy
                    </span>
                  )}
                </div>
                <div className="d-flex flex-column inputwidths">
                  <input
                    required
                    className="mb-2 mb-md-3 p-3 rounded-3 grayborder input_style_2 w-100"
                    type="number"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    placeholder="Emergency Contact Number"
                  />
                  {!emergencyContactValid && (
                    <p className="text-danger text-end">
                      Mobile Number must be 10 digits
                    </p>
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="bg-primary text-white input_style_2 fw-bold fs_md rounded-3 mt-3 px-4 py-3"
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuestAccount;
