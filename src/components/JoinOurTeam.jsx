import React from "react";
import bg_img from "../assets/img/webp/captionbg.webp";
import bg from "../assets/img/webp/grid6.webp";
import caption_img from "../assets/img/webp/tripcaptions.webp";
import Image from "next/image";

const JoinOurTeam = () => {
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage: `url(${bg_img.src})`,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="pt-4 pt-sm-5 position-relative "
        >
          <div className=" container">
            <div className=" row align-items-lg-center align-items-end justify-content-center team_height ">
              <div className=" col-lg-4">
                <p className=" mb-0 fs_xsm text-white font_poppins fw-normal">
                  We at Go4Explore are proud to boast that we have a team of
                  over
                  <span className=" clr_yellow fw-semibold">
                    50+ strong & coolest Trip Captains
                  </span>{" "}
                  who don't just have profound knowledge of the destination but
                  also are committed to providing the best travel experience to
                  our dear travellers.
                </p>
              </div>

              <div className="  col-lg-8">
                <div className="row align-items-center justify-content-end flex-column-reverse flex-md-row ">
                  <div className="col-4 position-absolute start-50 translate-middle-x bottom-0 d-none d-lg-inline-block">
                    <Image
                      className=" w-70 h_400"
                      src={caption_img}
                      alt="caption_img"
                    />
                  </div>
                  <div className="col-md-5  d-lg-none ">
                    <Image
                      className=" w-100 h-75"
                      src={caption_img}
                      alt="caption_img"
                    />
                  </div>
                  <div className="  col-md-7 mt-4 ">
                    {" "}
                    <p className=" mb-0 fs_xl text-white font_poppins fw-semibold">
                      <span className=" fs_5xl"> 50+</span> on-ground & coolest{" "}
                    </p>
                    <p className=" mb-0 fs_4xl text-white font_poppins fw-semibold">
                      Trip Captains
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg.src})`,
            width: "100%",
            height: "600px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="with-blur-backdrop text-center d-flex flex-column justify-content-end">
            <p className=" fw-semibold fs_sm font_poppins text-white mb-3">
              Here at <span className=" clr_yellow">Go4Explore</span>, we
              welcome your creativity, hard work and dedication you'll bring to
              the table.
            </p>{" "}
            <article>
              <a
                className="white_space clr_blue bg-white font_poppins fw-medium fs_sm py-2 px-3 rounded-3 joinbtn   d-inline-block text-center text-decoration-none"
                href="#"
              >
                Join Our Team
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinOurTeam;
