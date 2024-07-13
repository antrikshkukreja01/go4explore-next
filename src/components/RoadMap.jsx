import React from "react";
import line from "../assets/img/png/roadmap.png";
import Image from "next/image";
import bg from "../assets/img/webp/yellow-paper-bg.webp";

const Roadmap = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" py-4 py-sm-5  rounded-0 min-vh-50 overflow-hidden "
      >
        <div className="roadmap_line position-relative d-none align-items-center min-vh-50  d-lg-flex ">
          <Image className=" w-100 h-100 " src={line} alt="line" />
          <span className=" position-absolute top-10 start-0 ms-5 mt-1 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2017
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0 max_width_roadmap">
              On 19th May, we started our journey to explore
            </p>
          </span>
          <span className=" position-absolute bottom-10 start-10 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2018
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0 max_width_roadmap">
              Collaborated with Nepal Tourism Board for Himalayan Travel Mart
            </p>
          </span>
          <span className=" position-absolute top-10 start-24 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2019
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0 max_width_roadmap">
              Collaborated with Nepal Tourism Board for Himalayan Travel Mart
            </p>
          </span>
          <span className=" position-absolute bottom-10 start-36 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2020
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0 max_width_roadmap">
              Invited by Hon'ble tourism minister of India to discuss post-covid
              scenario
            </p>
          </span>
          <span className=" position-absolute top-10 start-50 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2021
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0 max_width_roadmap">
              Hosted travelers on our first ever International trip
            </p>
          </span>
          <span className=" position-absolute bottom-10 start-63 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2022
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0 max_width_roadmap">
              Managed travel ops of Indian Ice Hockey team (under 20) at Asia &
              Oceania Championship
            </p>
          </span>
          <span className=" position-absolute top-10 start-74 text-center me-3 me-xxl-0">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2023
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0 max_width_roadmap">
              Expanded our travel operations in 11+ countries{" "}
            </p>
          </span>
          <span className=" position-absolute bottom-10 start-85 text-center me-3 me-xxl-0">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2024
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0 max_width_roadmap">
              Here we are spreading happiness through travel
            </p>
          </span>
        </div>

        <div className="d-lg-none position-relative min-vh-100 flex-column d-flex gap-4 mt-3 timeline">
          <div className="line"></div>

          <span className="ms-5 mt-1 event">
            <p className="fw-semibold fs_sm font_poppins text-start clr_blue mb-0">
              2017
            </p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0 d-flex align-items-center">
              On 19th May, we started our journey to explore
            </p>
          </span>

          <span className="ms-5 mt-1 event">
            <p className="fw-semibold fs_sm font_poppins text-start clr_blue mb-0">
              2018
            </p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0 d-flex align-items-center">
              Collaborated with Nepal Tourism Board for Himalayan Travel Mart
            </p>
          </span>

          <span className="ms-5 mt-1 event">
            <p className="fw-semibold fs_sm font_poppins text-start clr_blue mb-0">
              2019
            </p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0 d-flex align-items-center">
              Collaborated with Nepal Tourism Board for Himalayan Travel Mart
            </p>
          </span>

          <span className="ms-5 mt-1 event">
            <p className="fw-semibold fs_sm font_poppins text-start clr_blue mb-0">
              2020
            </p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0 d-flex align-items-center">
              Invited by Hon'ble tourism minister of India to discuss post-covid
              scenario
            </p>
          </span>

          <span className="ms-5 mt-1 event">
            <p className="fw-semibold fs_sm font_poppins text-start clr_blue mb-0">
              2021
            </p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0 d-flex align-items-center">
              Hosted travelers on our first ever International trip
            </p>
          </span>

          <span className="ms-5 mt-1 event">
            <p className="fw-semibold fs_sm font_poppins text-start clr_blue mb-0">
              2022
            </p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0 d-flex align-items-center">
              Managed travel ops of Indian Ice Hockey team (under 20) at Asia &
              Oceania Championship
            </p>
          </span>

          <span className="ms-5 mt-1 event">
            <p className="fw-semibold fs_sm font_poppins text-start clr_blue mb-0">
              2023
            </p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0 d-flex align-items-center">
              Expanded our travel operations in 11+ countries
            </p>
          </span>

          <span className="ms-5 mt-1 event">
            <p className="fw-semibold fs_sm font_poppins text-start clr_blue mb-0">
              2024
            </p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0 d-flex align-items-center">
              Here we are spreading happiness through travel
            </p>
          </span>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
