"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [mobileValid, setMobileValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);

    if (name === "mobile") {
      setMobileValid(value.length === 10);
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
    if (!formData.email.endsWith("@gmail.com")) {
      setEmailValid(false);
      return;
    }
    setMobileValid(true);
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
      });
    } else {
      alert("Registration successful!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
      });
    }
  };

  return (
    <>
      <section className=" py-5 ">
        <div className=" container mt-sm-5 pt-5 ">
          <div className=" text-center">
            <p className=" mb-4 fw-bold fs_xxl font_poppins text-black">
              Get In Touch
            </p>
          </div>
          <div className="blue_border rounded-4 p-3 p-sm-5">
            <p className=" mb-0 fw-normal fs_sm text-center font_poppins text-black max_width mx-auto">
              Hey, thanks for landing up here. Have some queries or want to
              share feedback? We would love to hear from you and talk about
              travel.
            </p>{" "}
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column mt-4 max_width mx-auto"
            >
              <input
                required
                className="  p-3 rounded-3 grayborder input_style_2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />{" "}
              <div className=" d-flex flex-column flex-sm-row gap-3 align-items-center mt-3">
                <div className=" d-flex flex-column inputwidths ">
                  <input
                    required
                    className=" p-3 rounded-3 grayborder input_style_2 w-100"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                  {!emailValid && (
                    <p className="text-danger">
                      Email must be a valid Gmail address
                    </p>
                  )}
                </div>

                <div className=" d-flex flex-column inputwidths">
                  <input
                    required
                    className=" p-3 rounded-3 grayborder input_style_2 w-100"
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                  />
                  {!mobileValid && (
                    <p className="text-danger">
                      Mobile number must be 10 digits
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className=" bg-primary text-white input_style_2 text-uppercase fw-semibold w-100 fs_lg rounded-3 mt-3 px-4 py-3"
              >
                send messages
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
