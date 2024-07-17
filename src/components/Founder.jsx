import React from "react";
import founder_img from "../assets/img/webp/jonyfounder.webp";
import Image from "next/image";
import bg from "../assets/img/webp/founderbg.webp";

const Founder = () => {
  return (
    <>
      <section className="  overflow-hidden">
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
          className=" position-relative py-5 pt-5 pb-0 pb-lg-5  px-3 px-lg-0"
        >
          <p className=" fw-bolder fs_3xl font_poppins text-center text-white  d-lg-none mb-3 ">
            Founder
          </p>
          <span className=" position-absolute  start-0 top-50 d-none d-lg-inline  translate-middle-y z-3">
            <p className=" fw-bolder fs_3xl font_poppins rotate-90 text-white mb-0 ">
              Founder
            </p>
          </span>
          <div className=" position-absolute bottom-0 end-0 w-35 d-none d-lg-inline">
            <Image width={500} src={founder_img} alt="founder_img" />
          </div>
          <div className=" row  pt-4">
            <div className=" col-lg-9 ps-lg-5 ms-lg-5 pe-0">
              <div className=" founder_width mx-auto">
                <article className=" d-flex align-items-end">
                  <p className=" fw-bold fs_xl d-inline-block p-2 rounded-4  font_poppins clr_blue bg-white mb-3">
                    Jony Jindal{" "}
                  </p>{" "}
                  <p className=" mb-3 ms-2 fw-semibold fs_md text-white font_poppins">
                    CEO, Founder
                  </p>
                </article>
                <p className=" fw-normal fs_sm  mx-auto font_poppins text-white ">
                  In 2017, Mr Jony Jindal started his journey and went on his
                  solo trip from Kashmir to Kanyakumari & further Amritsar to
                  Manipur at the age of 19. He has successfully done some
                  amazing high altitude treks like Mount Everest base camp,
                  Gokyo Lake trek, Alpather Lake trek, climbed Mount Friendship
                  Peak and many more. <br />
                  <br /> He combined his passion for traveling and skills of
                  digital marketing to create a platform helping out people who
                  want to travel in a budget-friendly manner with like-minded
                  people. and solving the problem of traveling in Himalayan
                  regions by organizing group trips to offbeat and untouched
                  places. <br />
                  <br /> He worked with various tourism boards and hospitality
                  brands like Incredible India, Nepal Tourism, Manipur Tourism,
                  Madhya Pradesh Tourism, Delhi Tourism and Sterling Holidays to
                  name a few. Recently He got invited by the Ministry of Tourism
                  to discuss the “future of travel industry” with the Tourism
                  Minister of India. Mr Jony Jindal also managed the Indian Ice
                  Hockey team in the Asian Championship at Bangkok.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className=" d-flex align-items-center justify-content-center d-lg-none">
            <Image
              height={350}
              className="w-100"
              src={founder_img}
              alt="founder_img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;
