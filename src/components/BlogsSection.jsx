import React from "react";

import blogimg from "../assets/img/webp/blogimg.webp";
import img1 from "../assets/img/webp/mainblogimg.webp";
import img2 from "../assets/img/webp/mainblogimg2.webp";
import Image from "next/image";

const BlogsSection = () => {
  return (
    <>
      <section className="py-5">
        <div className=" container mt-4 pt-5 max_width2">
          {" "}
          <p className=" mt-4 mb-4 text-center text-black font_poppins fw-semibold fs_xl">
            A day in Kaza: best spots for cafe hopping in Spiti Valley trip
          </p>
          <Image
            height={500}
            className=" w-100  rounded-4"
            src={img1}
            alt="img1"
          />
          <div className=" row position-relative justify-content-between pb-5">
            <div className=" pt-5 col-lg-8  ">
              <p className=" mb-0 fw-medium fs_xsm font_poppins text-black">
                Published On 09 May 2024
              </p>
              <p className=" mb-0 fw-normal fs_xsm font_poppins text-black mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita laudantium reprehenderit, in, dicta error dignissimos
                cupiditate similique amet, ipsum pariatur inventore sequi
                voluptatem! Magnam incidunt velit est vel non, enim dolorem
                quasi quas modi dicta inventore amet ad accusantium ullam
                asperiores repudiandae quibusdam beatae autem sequi perspiciatis
                nulla voluptates expedita ducimus corrupti? Labore iusto eos
                architecto excepturi est, laudantium blanditiis veritatis modi
                officia. Aperiam, quaerat fugit nam cum modi dicta eligendi
                explicabo laborum quam, maiores saepe soluta ipsa. Optio quasi
                iste, dolores quisquam explicabo enim cupiditate porro
                reiciendis expedita soluta iure, eos voluptates nam quod dolorem
                quo recusandae, quidem eius aut aspernatur! Nulla doloribus
                voluptatibus in cum quae vero et, asperiores eos recusandae
                possimus optio ducimus pariatur corrupti alias! Beatae mollitia
                autem veritatis ea, deleniti unde ipsa dolores alias sapiente
                architecto distinctio assumenda vel modi reiciendis, ut quasi
                aperiam doloremque dicta culpa vero. Tempore, dolore eius
                provident error alias ratione incidunt dignissimos tenetur
                consequuntur nemo dolorum asperiores sapiente, harum aut a quasi
                sint illum quaerat soluta ab rem saepe! Saepe consequatur
                repudiandae rerum provident iste impedit molestiae dolor
                repellendus consequuntur, veritatis nemo alias voluptatum, quos
                culpa dolorum, et ipsa dicta? Quisquam illum nisi maiores libero
                cum quaerat pariatur repellendus vel.
              </p>
              <Image className=" w-100  rounded-4 mt-5" src={img2} alt="img2" />
              <p className=" mt-4 mb-2 text-black font_poppins fw-semibold fs_lg">
                A day in Kaza: best spots for cafe hopping in Spiti Valley trip
              </p>
              <p className=" mb-0 fw-medium fs_xsm font_poppins text-black">
                Published On 09 May 2024
              </p>
              <p className=" mb-0 fw-normal fs_xsm font_poppins text-black mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita laudantium reprehenderit, in, dicta error dignissimos
                cupiditate similique amet, ipsum pariatur inventore sequi
                voluptatem! Magnam incidunt velit est vel non, enim dolorem
                quasi quas modi dicta inventore amet ad accusantium ullam
                asperiores repudiandae quibusdam beatae autem sequi perspiciatis
                nulla voluptates expedita ducimus corrupti? Labore iusto eos
                architecto excepturi est, laudantium blanditiis veritatis modi
                officia. Aperiam, quaerat fugit nam cum modi dicta eligendi
                explicabo laborum quam, maiores saepe soluta ipsa. Optio quasi
                iste, dolores quisquam explicabo enim cupiditate porro
                reiciendis expedita soluta iure, eos voluptates nam quod dolorem
                quo recusandae, quidem eius aut aspernatur! Nulla doloribus
                voluptatibus in cum quae vero et, asperiores eos recusandae
                possimus optio ducimus pariatur corrupti alias! Beatae mollitia
                autem veritatis ea, deleniti unde ipsa dolores alias sapiente
                architecto distinctio assumenda vel modi reiciendis, ut quasi
                aperiam doloremque dicta culpa vero. Tempore, dolore eius
                provident error alias ratione incidunt dignissimos tenetur
                consequuntur nemo dolorum asperiores sapiente, harum aut a quasi
                sint illum quaerat soluta ab rem saepe! Saepe consequatur
                repudiandae rerum provident iste impedit molestiae dolor
                repellendus consequuntur, veritatis nemo alias voluptatum, quos
                culpa dolorum, et ipsa dicta? Quisquam illum nisi maiores libero
                cum quaerat pariatur repellendus vel.
              </p>
            </div>
            <div className=" col-lg-4 ps-5 ">
              <div className=" top-10 position-sticky pt-5">
                <div className=" border-3 border rounded-3 p-4 mb-4 ">
                  <p className=" mb-2 font_poppins fw-semibold fs_md text-black text-center">
                    Have Doubts? Talk To Our Travel Experts!
                  </p>
                  <p className=" mb-0 font_poppins fw-medium fs-13 text-black text-center">
                    Allow Us to Call You Back
                  </p>
                  <a
                    className="white_space callback_btn fs_xsm fw-medium w-100 rounded-5 d-inline-block mt-3 text-center text-decoration-none"
                    href="#"
                  >
                    Request Callback
                  </a>
                </div>
                <Image
                  className="w-100 h_400 rounded-4   mb-5 "
                  src={blogimg}
                  alt="blogimg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSection;
