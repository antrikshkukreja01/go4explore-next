import React from "react";
import sahil from "../assets/img/webp/sahilsingh.webp";
import amit from "../assets/img/webp/amit.webp";
import amit2 from "../assets/img/webp/favicon.webp";
import tanya from "../assets/img/webp/tanyakochhar.webp";
import pankaj from "../assets/img/webp/PankajVerma.webp";
import priyanka from "../assets/img/webp/priyankajindal.webp";
import Image from "next/image";

const Ourteam = () => {
  return (
    <>
      <section className=" py-5">
        <div className=" container">
          <p className="font_poppins mb-0 mb-sm-5 fs_xxl fw-semibold text-capitalize text-black text-center">
            Say Hi To Our Core Team
          </p>
          <div className=" row justify-content-evenly gap-lg-2">
            <div className=" mt-4 col-6 col-lg-3">
              <div className=" borderbox d-flex  justify-content-center align-items-center flex-column p-2 p-lg-4 rounded-4">
                <article className=" borderbox w-75  p-2 rounded_100">
                  <Image
                    className=" w-100 rounded_100 h-100 "
                    src={sahil}
                    alt="sahil"
                  />
                </article>
                <p className=" py-2 rounded-5 bg_blue w-100 text-center fw-semibold fs_md text-white font_poppins mb-2 mt-3">
                  Sahil Singh
                </p>
                <p className=" fw-medium fs_xsm text-black fs_7 text-center font_poppins mb-0">
                  Business Development Manager
                </p>
              </div>
            </div>
            <div className=" mt-4 col-6 col-lg-3">
              <div className=" borderbox d-flex  justify-content-center align-items-center flex-column p-2 p-lg-4 rounded-4">
                <article className=" borderbox w-75  p-2 rounded_100">
                  <Image
                    className=" w-100 rounded_100 h-100 "
                    src={tanya}
                    alt="tanya"
                  />
                </article>
                <p className=" py-2 rounded-5 bg_blue w-100 text-center fw-semibold fs_md text-white font_poppins mb-2 mt-3">
                  Tanya Kochhar
                </p>
                <p className=" fw-medium fs_xsm text-black fs_7 text-center font_poppins mb-0">
                  Head of Sales
                </p>
              </div>
            </div>
            <div className=" mt-4 col-6 col-lg-3">
              <div className=" borderbox d-flex  justify-content-center align-items-center flex-column p-2 p-lg-4 rounded-4">
                <article className=" borderbox w-75  p-2 rounded_100">
                  <Image
                    className=" w-100 rounded_100 h-100 "
                    src={amit}
                    alt="amit"
                  />
                </article>
                <p className=" py-2 rounded-5 bg_blue w-100 text-center fw-semibold fs_md text-white font_poppins mb-2 mt-3">
                  Amit Aggarwal
                </p>
                <p className=" fw-medium fs_xsm text-black fs_7 text-center font_poppins mb-0">
                  Head of Operations
                </p>
              </div>
            </div>

            <div className=" mt-4 col-6 col-lg-3">
              <div className=" borderbox d-flex  justify-content-center align-items-center flex-column p-2 p-lg-4 rounded-4">
                <article className=" borderbox w-75  p-2 rounded_100">
                  <Image
                    className=" w-100 rounded_100 h-100 "
                    src={priyanka}
                    alt="priyanka"
                  />
                </article>
                <p className=" py-2 rounded-5 bg_blue w-100 text-center fw-semibold fs_md text-white font_poppins mb-2 mt-3">
                  Priyanka Jindal
                </p>
                <p className=" fw-medium fs_xsm text-black fs_7 text-center font_poppins mb-0">
                  Head of Finance
                </p>
              </div>
            </div>
            <div className=" mt-4 col-6 col-lg-3">
              <div className=" borderbox d-flex  justify-content-center align-items-center flex-column p-2 p-lg-4 rounded-4">
                <article className=" borderbox w-75  p-2 rounded_100">
                  <Image
                    className=" w-100 rounded_100 h-100 "
                    src={pankaj}
                    alt="pankaj"
                  />
                </article>
                <p className=" py-2 rounded-5 bg_blue w-100 text-center fw-semibold fs_md text-white font_poppins mb-2 mt-3">
                  Pankaj Verma
                </p>
                <p className=" fw-medium fs_xsm text-black fs_7 text-center font_poppins mb-0">
                  Senior Sales Executive
                </p>
              </div>
            </div>
            <div className=" mt-4 col-6 col-lg-3">
              <div className=" borderbox d-flex  justify-content-center align-items-center flex-column p-2 p-lg-4 rounded-4">
                <article className=" borderbox w-75  p-2 rounded_100">
                  <Image
                    className=" w-100 rounded_100 h-100  "
                    src={amit2}
                    alt="amit"
                  />
                </article>
                <p className=" py-2 rounded-5 bg_blue w-100 text-center fw-semibold fs_md text-white font_poppins mb-2 mt-3">
                  Ajit Singh
                </p>
                <p className=" fw-medium fs_xsm text-black fs_7 text-center font_poppins mb-0">
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourteam;
