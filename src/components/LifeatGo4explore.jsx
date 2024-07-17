import React from "react";
import grid_1 from "../assets/img/webp/grid1.webp";
import grid_2 from "../assets/img/webp/grid2.webp";
import grid_3 from "../assets/img/webp/grid3.webp";
import grid_4 from "../assets/img/webp/grid4.webp";
import grid_5 from "../assets/img/webp/grid5.webp";
import grid_6 from "../assets/img/webp/grid6.webp";
import grid_7 from "../assets/img/webp/party_img.webp";
import Image from "next/image";

const LifeatGo4explore = () => {
  return (
    <>
      <section className="py-5">
        <div className=" container">
          <div className=" d-flex align-items-center justify-content-center w-100 mt-5">
            <h2 className=" font_poppins text-black fw-bold fs_xl mb-0 ">
              Life at Go4Explore &#10024;
            </h2>
          </div>
          <div className="row py-5">
            <div className=" px-2 col-2">
              <Image
                className="rounded-4"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                src={grid_7}
                alt={grid_7}
                unoptimized
              />
            </div>
            <div className=" px-2 col-6">
              <div className="row">
                <div className=" px-2 col-8">
                  <Image
                    className="rounded-4"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "220px" }}
                    src={grid_6}
                    alt={grid_6}
                    unoptimized
                  />
                </div>
                <div className=" px-2 col-4">
                  <Image
                    className="rounded-4"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "220px" }}
                    src={grid_2}
                    alt={grid_2}
                    unoptimized
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className=" px-2 col-4">
                  <Image
                    className="rounded-4"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "200px" }}
                    src={grid_5}
                    alt={grid_5}
                    unoptimized
                  />
                </div>
                <div className=" px-2 col-4">
                  <Image
                    className="rounded-4"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "200px" }}
                    src={grid_4}
                    alt={grid_4}
                    unoptimized
                  />
                </div>
                <div className=" px-2 col-4">
                  <Image
                    className="rounded-4"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "200px" }}
                    src={grid_1}
                    alt={grid_1}
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div className=" px-2 col-4">
              <Image
                className="rounded-4"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                src={grid_3}
                alt={grid_3}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LifeatGo4explore;
