import React from "react";
import sahil from "../assets/img/webp/sahilsingh.webp";
import downarrow from "../assets/img/webp/down_img.webp";
import Image from "next/image";

const UserHeader = () => {
  return (
    <>
      <section className=" py-5">
        <div className=" container pt-5 mt-sm-5 ">
          {" "}
          <br />
          <div className=" guest_width mx-auto bg_gray rounded-4 py-3 h_170 px-4 d-flex flex-column mt-lg-5  align-items-center position-relative justify-content-center">
            <article className=" borderbox w_170  p-2 rounded_100 position_absolute   ">
              <Image
                className=" w-100 rounded_100 h-100 "
                src={sahil}
                alt="sahil"
              />
            </article>
            <article className=" text-center mt-lg-5 pt-4">
              <p className=" mb-0 fw-semibold fs_lg text-black font_poppins">
                Welcome, Sahil Singh
              </p>
              <p className=" mb-0 fw-normal fs_xsm text-black font_poppins">
                Member Since June 2018
              </p>
            </article>
          </div>
          <div className=" d-flex align-items-center gap-3"></div>
          <div className=" row align-items-center guest_width mx-auto mt-1 mt-xl-4">
            <div className="  mt-3 mt-xl-0 col-sm-6 col-md-4 col-xl-3">
              {" "}
              <a
                className=" text-center blue_border w-100 d-inline-block fw-medium fs_xsm text-black font_poppins text-decoration-none py-2 rounded-3"
                href="#"
              >
                Trip Bookings
              </a>
            </div>
            <div className="  mt-3 mt-xl-0 col-sm-6 col-md-4 col-xl-3">
              {" "}
              <a
                className=" text-center blue_border w-100 d-inline-block fw-medium fs_xsm text-black font_poppins text-decoration-none py-2 rounded-3"
                href="#"
              >
                My Published Stories
              </a>
            </div>
            <div className="  mt-3 mt-xl-0 col-sm-6 col-md-4 col-xl-3">
              {" "}
              <a
                className=" text-center blue_border w-100 d-inline-block fw-medium fs_xsm text-black font_poppins text-decoration-none py-2 rounded-3"
                href="#"
              >
                Story Drafts
              </a>
            </div>
            <div className="  mt-3 mt-xl-0 col-sm-6 col-md-4 col-xl-3">
              {" "}
              <a
                className=" text-center blue_border w-100 d-inline-block fw-medium fs_xsm text-black font_poppins text-decoration-none py-2 rounded-3"
                href="#"
              >
                Update Personal Details
              </a>
            </div>
          </div>
          <div className=" row mt-5">
            <div className=" col-lg-6">
              <div className=" blue_border p-3 rounded-3 position-relative User_box  ">
                <span className=" position-absolute  start-0 top-50 translate-middle-y  d-none d-sm-block  ">
                  <p className=" mb-0 p-3 rounded-3 text-success text-center rotate-90 fw-medium fs_xsm font_poppins bg_gray">
                    Upcoming
                  </p>{" "}
                </span>{" "}
                <span className=" d-sm-none">
                  <p className=" mb-0 p-3 rounded-3 text-success text-center fw-medium fs_xsm font_poppins bg_gray">
                    Upcoming
                  </p>{" "}
                </span>{" "}
                <article className=" ps-sm-5 ms-sm-3 d-flex flex-column justify-content-between h-100 ">
                  <div className=" d-flex align-items-baseline justify-content-between">
                    <p className=" mb-0 fw-medium fs_sm text-black font_poppins mx_width2">
                      Spiti Valley Full-Circuit From Shimla - Backpacking Trip
                    </p>
                    <p className=" mb-0 fw-semibold fs_md text-black font_poppins">
                      ₹ 21,000
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-between mt-3">
                    <p className=" fw-medium fs_xsm clr_gray font_poppins mb-0">
                      Saturday, 8 June 2024
                    </p>
                    <p className=" fw-normal fs_xsm text-black font_poppins mb-0">
                      Booking ID #35272
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className=" col-lg-6 mt-4 mt-lg-0">
              <div className=" blue_border p-3 rounded-3 position-relative User_box  ">
                <span className=" position-absolute  start-0 top-50 translate-middle-y  d-none d-sm-block ">
                  <p className=" mb-0 p-3 rounded-3 text-danger text-center rotate-90 fw-medium fs_xsm font_poppins bg_gray">
                    Completed
                  </p>{" "}
                </span>{" "}
                <span className=" d-sm-none">
                  <p className=" mb-0 p-3 rounded-3 text-danger text-center fw-medium fs_xsm font_poppins bg_gray">
                    Completed
                  </p>{" "}
                </span>{" "}
                <article className=" ps-sm-5 ms-sm-3 d-flex flex-column justify-content-between h-100 ">
                  <div className=" d-flex align-items-baseline justify-content-between">
                    <p className=" mb-0 fw-medium fs_sm text-black font_poppins mx_width2">
                      Chopta Tungnath Deoriatal
                    </p>
                    <p className=" mb-0 fw-semibold fs_md text-black font_poppins">
                      ₹ 6300
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-between mt-3">
                    <p className=" fw-medium fs_xsm clr_gray font_poppins mb-0">
                      Friday, 12 January 2024
                    </p>
                    <p className=" fw-normal fs_xsm text-black font_poppins mb-0">
                      Booking ID #5689
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className=" mt-5 d-flex align-items-center justify-content-center">
              <a
                href="#"
                className=" text-decoration-none fw-semibold fs_xsm font_poppins text-black"
              >
                See All Bookings{" "}
                <Image
                  width={15}
                  className="  ms-1"
                  src={downarrow}
                  alt="downarrow"
                />
              </a>
            </div>
          </div>{" "}
          <div className=" mt-3 d-flex align-items-center justify-content-end">
            <a
              href="#"
              className=" text-decoration-none fw-semibold fs_xsm font_poppins text-black"
            >
              Booking Details
              <Image
                width={15}
                className="  ms-1"
                src={downarrow}
                alt="downarrow"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserHeader;
