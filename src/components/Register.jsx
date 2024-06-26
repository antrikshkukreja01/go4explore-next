"use client";
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [mobileValid, setMobileValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);

    if (name === "password" || name === "confirmPassword") {
      setPasswordMatch(newFormData.password === newFormData.confirmPassword);
    }

    if (name === "mobile") {
      setMobileValid(value.length === 10);
    }

    if (name === "email") {
      setEmailValid(value.endsWith("@gmail.com"));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    if (formData.mobile.length !== 10) {
      setMobileValid(false);
      return;
    }
    if (!formData.email.endsWith("@gmail.com")) {
      setEmailValid(false);
      return;
    }
    setPasswordMatch(true);
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
        password: "",
        confirmPassword: "",
      });
    } else {
      alert("Registration successful!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <>
      <section className="py-5">
        <div className=" container pt-5 mt-5">
          <div className="grayborder boxshadow py-4 px-3 p-sm-5 signup_width mx-auto rounded-3 bg-white">
            <p className="mb-0 fs_lg fw-semibold font_poppins text-black text-center">
              Sign Up
            </p>
            <p className="mb-0 text-black font_poppins fw-normal text-center mt-2 fs_xsm">
              Create new Go4Explore account
            </p>
            <form onSubmit={handleSubmit} className="d-flex flex-column">
              <input
                required
                className="mt-4 mb-3 p-3 rounded-3 grayborder input_style_2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
              <input
                required
                className="mb-3 p-3 rounded-3 grayborder input_style_2"
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
              <input
                required
                className="mb-3 p-3 rounded-3 grayborder input_style_2"
                type="number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
              />
              {!mobileValid && (
                <p className="text-danger">Mobile number must be 10 digits</p>
              )}
              <input
                required
                className="mb-3 p-3 rounded-3 grayborder input_style_2"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create Password"
              />
              <input
                required
                className="mb-3 p-3 rounded-3 grayborder input_style_2"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-Enter Password"
              />
              {!passwordMatch && (
                <p className="text-danger">Passwords do not match</p>
              )}

              <button
                type="submit"
                className="btn btn-primary fw-semibold w-100 fs_lg rounded-3 mt-3 px-4 py-3"
              >
                Create Account
              </button>
            </form>
            <span className="d-flex justify-content-center align-items-center mt-3 gap-2">
              <p className="mb-0 text-black font_poppins fw-normal fs_xsm">
                Already have an account?
              </p>

              <span className="text-decoration-none text-primary font_poppins fw-normal fs_xsm">
                Sign In
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
