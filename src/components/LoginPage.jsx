"use client";

import React from "react";

const LoginPage = () => {
  return (
    <>
      <section className=" py-5">
        <div className=" container mt-5 pt-sm-5">
          <div className="grayborder boxshadow py-4 px-3 p-sm-5 login_width mx-auto rounded-3 bg-white">
            <p className=" mb-0 fs_lg fw-semibold font_poppins text-black text-center">
              Login
            </p>
            <div className=" d-flex flex-column">
              <input
                className=" mt-4 mb-3 p-3 rounded-3 grayborder input_style_2"
                type="text"
                placeholder="Enter Email"
              />
              <input
                className="mb-3 p-3 rounded-3 grayborder input_style_2"
                type="text"
                placeholder="Enter Password"
              />{" "}
            </div>
            <div className=" d-flex align-items-center justify-content-between w-100">
              <form className=" d-flex align-items-center gap-2  ">
                <input className=" mt-1" type="checkbox" />
                <p className=" mb-0 "> Remember Me</p>
              </form>

              <a
                className=" text-primary text-decoration-none fw-normal mt-1  fs_xsm font_poppins"
                href="#"
              >
                Forgotten Password?
              </a>
            </div>{" "}
            <button className="btn btn-primary fw-semibold w-100 fs_lg  rounded-3 mt-3 px-4 py-3">
              Sign In
            </button>
            <span className=" d-flex justify-content-center align-items-center mt-3 gap-2">
              <p className=" mb-0 text-black font_poppins fw-normal  fs_xsm">
                Don't have an account?
              </p>

              <a
                className=" text-decoration-none text-primary font_poppins fw-normal  fs_xsm"
                href="#"
              >
                Register
              </a>
            </span>
            <span className=" d-flex justify-content-center align-items-center mt-3 gap-2">
              <p className=" mb-0 text-black font_poppins fw-normal  fs_xsm">
                Continue As Guest
              </p>

              <a
                className=" text-decoration-none text-primary font_poppins fw-normal  fs_xsm"
                href="#"
              >
                Click Here
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
