import React from "react";

import story1 from "../assets/img/webp/story1.webp";
import story2 from "../assets/img/webp/story2.webp";
import story3 from "../assets/img/webp/story3.webp";
import Image from "next/image";

const StoryPublish = () => {
  return (
    <>
      <section className=" py-5">
        <div className=" container">
          <div className=" blue_border px-5 py-3">
            <div className=" text-center">
              <p className=" mb-4 fw-bold fs_xxl font_poppins text-black">
                Stories Published By You
              </p>
            </div>
            <div className=" row">
              <div className=" col-sm-4">
                <div className="d-flex justify-content-center w-100">
                  <Image
                    className=" rounded-4  w-75"
                    src={story1}
                    alt="story1"
                  />
                </div>
                <p className=" mb-0 fw-medium fs_md text-black font_poppins mt-3 text-center">
                  A day in Kaza: best spots for cafe hopping in Spiti Valley
                  trip
                </p>
                <p className=" mb-0 fw_medium fs_sm clr_gray font_poppins text-center mt-3">
                  Published 5 Mar 2024
                </p>
              </div>
              <div className=" col-sm-4">
                <div className="d-flex justify-content-center w-100">
                  <Image
                    className=" rounded-4  w-75"
                    src={story2}
                    alt="story2"
                  />
                </div>
                <p className=" mb-0 fw-medium fs_md text-black font_poppins mt-3 text-center">
                  A day in Kaza: best spots for cafe hopping in Spiti Valley
                  trip
                </p>
                <p className=" mb-0 fw_medium fs_sm clr_gray font_poppins text-center mt-3">
                  Published 5 Mar 2024
                </p>
              </div>
              <div className=" col-sm-4">
                <div className="d-flex justify-content-center w-100">
                  <Image
                    className=" rounded-4  w-75"
                    src={story3}
                    alt="story3"
                  />
                </div>
                <p className=" mb-0 fw-medium fs_md text-black font_poppins mt-3 text-center">
                  A day in Kaza: best spots for cafe hopping in Spiti Valley
                  trip
                </p>
                <p className=" mb-0 fw_medium fs_sm clr_gray font_poppins text-center mt-3">
                  Published 5 Mar 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoryPublish;
