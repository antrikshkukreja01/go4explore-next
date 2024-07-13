import React from "react";
import travlingvan from "../assets/img/webp/van_white.webp";
import seven from "../assets/img/webp/seven_white.webp";
import thumbup from "../assets/img/webp/thumbup_white.webp";
import plane_img from "../assets/img/webp/travleing.webp";
import Image from "next/image";
import bg from "../assets/img/webp/aboutbg.webp";

const AboutUsSection = () => {
  return (
    <>
      <section>
        {" "}
        <div
          style={{
            backgroundImage: `url(${bg.src})`,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" py-5 px-2 px-lg-0   position-relative"
        >
          <p className=" fw-bolder fs_3xl font_poppins text-center pt-lg-4 pt-xl-0 d-xl-none  text-white mb-0 ">
            About Us
          </p>
          <span className=" d-none d-xl-flex position-absolute  start-0 top-50 translate-middle-y z-3">
            <p className=" fw-bolder fs_3xl font_poppins rotate-90 text-white mb-0 ">
              About Us
            </p>
          </span>
          <div class=" width-100  mx-auto  d-flex flex-column pt-4">
            <p className=" fw-bold fs_xxl text-center font_poppins text-white mb-3">
              Who We Are?
            </p>{" "}
            <p className=" fw-normal fs_sm  mx-auto font_poppins text-white mt-3 mt-lg-0 ">
              Go4Explore is a community of avid travellers badly bitten by the
              travel bug thus providing you an unmatched travel experience as
              per your interest and comfort. Using our & experience.We curate
              personalized and fun-filled trips to unexplored Himalayan
              destinations. Choose the destination which you want to explore and
              you're done. Our enthusiastic community of wanderers create
              journeys that will exceed your expectations. From being an
              experience promoter to provider, who knows travel better than us?
              We design well-planned trip itineraries, trekking & camping
              activities without exceeding your budget.
            </p>{" "}
            <div className=" row  align-items-center  my-3 my-lg-5 justify-content-center">
              <div className=" mt-4 col-6 col-lg-4 col-xl-3">
                <div className=" d-flex flex-column align-items-center justify-content-between User_box">
                  <Image
                    width={80}
                    className="w_50  h-auto"
                    src={travlingvan}
                    alt="travlingvan"
                  />
                  <p className=" fs_md text-white fw-semibold font_poppins mb-0 mt-2 mt-lg-0 text-center">
                    2500+ Trips Hosted PAN India & Abroad
                  </p>
                </div>
              </div>
              <div className=" mt-4 col-6 col-lg-4 col-xl-3">
                <div className=" d-flex flex-column align-items-center justify-content-between User_box">
                  <Image
                    width={80}
                    className="w_50  h-auto"
                    src={seven}
                    alt="seven"
                  />
                  <p className=" fs_md text-white fw-semibold font_poppins mb-0 mt-2 mt-lg-0 text-center">
                    7 Years of On- Ground Experience
                  </p>{" "}
                </div>
              </div>
              <div className=" mt-4 col-6 col-lg-4 col-xl-3">
                <div className=" d-flex flex-column align-items-center justify-content-between User_box">
                  <Image
                    width={100}
                    className="w_50  h-auto"
                    src={plane_img}
                    alt="plane_img"
                  />
                  <p className=" fs_md text-white fw-semibold font_poppins mb-0 mt-2 mt-lg-0 text-center">
                    30,000+ Satisfied Travelers
                  </p>{" "}
                </div>
              </div>
              <div className=" mt-4 col-6 col-lg-4 col-xl-3">
                <div className=" d-flex flex-column align-items-center justify-content-between User_box">
                  <Image
                    width={80}
                    className="w_50  h-auto"
                    src={thumbup}
                    alt="thumbup"
                  />
                  <p className=" fs_md text-white fw-semibold font_poppins mb-0 mt-2 mt-lg-0 text-center">
                    Rated 4.8 Stars on Google Reviews
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
