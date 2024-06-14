"use client";
import React from "react";
import customerservice from "../assets/img/webp/customerservice.webp";
import Image from "next/image";
import bg from "../assets/img/webp/yellow-paper-bg.webp";

const HaveDoubt = () => {
  return (
    <>
      <section className="py-4 py-sm-5 ">
        <div className="container">
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
              width: "100%",
              height: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className=" row py-5 mx-1 h-100 align-items-center rounded-4"
          >
            <div className=" col-md-6">
              <div className=" d-flex flex-column align-items-center">
                <Image src={customerservice} alt="customerservice" />
                <p className=" mb-0 mt-3 text-black font_poppins fw-semibold text-center fs_xl">
                  Have Doubts? Talk To <br /> Our Travel Experts!
                </p>
                <p className=" mb-0 mt-md-3 fs_md text-black fw-medium text-center text-lg-start font_poppins d-flex align-items-center gap-1">
                  we would{" "}
                  <span className=" text-danger fs-1 d-none d-lg-block">
                    {" "}
                    &#9829;
                  </span>{" "}
                  to craft a trip just for you.
                </p>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" d-flex flex-column align-items-center gap-3 gap-sm-4 mt-3 mt-md-0">
                <input
                  className=" input_width input_style_2 fs_xsm text-black fw-normal  rounded-5 py-2 text-center"
                  type="search"
                  placeholder="What should we call you?"
                />
                <input
                  className=" input_width input_style_2 fs_xsm text-black fw-normal  rounded-5 py-2 text-center"
                  type="search"
                  placeholder="Please, share your contact number?"
                />
                <input
                  className=" input_width input_style_2 fs_xsm text-black fw-normal  rounded-5 py-2 text-center"
                  type="search"
                  placeholder="Put your email here!"
                />
                <a
                  className=" callback_btn fs_sm fw-medium mt-sm-3  text-center text-decoration-none"
                  href="#"
                >
                  Request Callback
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HaveDoubt;
