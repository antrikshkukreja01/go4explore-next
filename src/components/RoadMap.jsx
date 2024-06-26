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
          <span className=" position-absolute top-10 start-6 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2017
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className=" position-absolute bottom-10 start-17 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2018
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className=" position-absolute top-10 start-28 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2019
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className=" position-absolute bottom-10 start-42 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2020
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className=" position-absolute top-10 start-58 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2021
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className=" position-absolute bottom-10 start-70 text-center">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2022
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className=" position-absolute top-10 start-84 text-center me-3 me-xxl-0">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2021
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
        </div>
        <div className=" d-lg-none position-relative min-vh-100">
          <Image
            className="rotate_90 position-absolute top-0"
            src={line}
            alt="line "
          />
          <span className=" position-absolute start-20  text-center me-3 me-xxl-0">
            <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
              2021
            </p>
            <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
