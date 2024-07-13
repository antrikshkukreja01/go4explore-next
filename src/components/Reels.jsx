import React from "react";
import Reel1 from "../assets/img/webp/reel1.webp";
import Reel2 from "../assets/img/webp/reel2.webp";
import Reel3 from "../assets/img/webp/reel3.webp";
import Reel4 from "../assets/img/webp/reel4.webp";
import play_btn from "../assets/img/png/play_btn.png";
import Image from "next/image";

const Reels = () => {
  return (
    <>
      <section className=" py-5">
        <div className=" container">
          <div className=" row">
            <div className=" py-4 px-lg-3 col-6  col-lg-3">
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C35JanXpEXA/?igsh=MWxseW11d2hsa3dobQ%3D%3D"
              >
                <div className="bg_gradient h-auto">
                  <div className=" position-relative">
                    <Image
                      className=" w-100 rounded-4 h-auto tranform"
                      src={Reel1}
                      alt="Reel"
                    />{" "}
                    <span className=" position-absolute start-50 top-50 d-flex justify-content-center translate-middle ">
                      <Image
                        width={60}
                        className=" play_btn"
                        src={play_btn}
                        alt="play_btn"
                      />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="py-4 px-lg-3 col-6  col-lg-3">
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C44_Js0pPf1/?igsh=eXdhN2N6ZDJ2bmYy"
              >
                <div className="bg_gradient h-auto">
                  <div className=" position-relative">
                    <Image
                      className=" w-100 rounded-4 h-auto tranform"
                      src={Reel2}
                      alt="Reel"
                    />{" "}
                    <span className=" position-absolute start-50 top-50 d-flex justify-content-center translate-middle ">
                      <Image
                        width={60}
                        className=" play_btn"
                        src={play_btn}
                        alt="play_btn"
                      />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="py-4 px-lg-3 col-6  col-lg-3">
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C0EpAIAJkQ-/?igsh=Y3k5Z3dmZHd2ZW51"
              >
                <div className="bg_gradient h-auto">
                  <div className=" position-relative">
                    <Image
                      className=" w-100 rounded-4 h-auto tranform"
                      src={Reel3}
                      alt="Reel"
                    />{" "}
                    <span className=" position-absolute start-50 top-50 d-flex justify-content-center translate-middle ">
                      <Image
                        width={60}
                        className=" play_btn"
                        src={play_btn}
                        alt="play_btn"
                      />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="py-4 px-lg-3 col-6  col-lg-3">
              <a
                target="_blank"
                href="https://www.instagram.com/reel/C6MOJe9JS8E/?igsh=Z3dndXlnd2o2Z3Nt"
              >
                <div className="bg_gradient h-auto">
                  <div className=" position-relative">
                    <Image
                      className=" w-100 rounded-4 h-auto tranform"
                      src={Reel4}
                      alt="Reel"
                    />{" "}
                    <span className=" position-absolute start-50 top-50 d-flex justify-content-center translate-middle ">
                      <Image
                        width={60}
                        className=" play_btn"
                        src={play_btn}
                        alt="play_btn"
                      />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reels;
