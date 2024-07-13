// import React from "react";
// import line from "../assets/img/png/roadmap.png";
// import Image from "next/image";
// import bg from "../assets/img/webp/yellow-paper-bg.webp";

// const Roadmap = () => {
//   return (
//     <>
//       <section
//         style={{
//           backgroundImage: `url(${bg.src})`,
//           width: "100%",
//           height: "100%",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//         className=" py-4 py-sm-5  rounded-0  overflow-hidden "
//       >
//         <div className="roadmap_line position-relative d-flex align-items-center min-vh-50   ">
//           <Image className=" w-100 h-100 " src={line} alt="line" />
//           <span className=" position-absolute top-10 start-6 text-center">
//             <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
//               2017
//             </p>
//             <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
//               On 19th May, we started <br /> our journey to explore
//             </p>
//           </span>
//           <span className=" position-absolute bottom-10 start-17 text-center">
//             <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
//               2018
//             </p>
//             <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
//               On 19th May, we started <br /> our journey to explore
//             </p>
//           </span>
//           <span className=" position-absolute top-10 start-28 text-center">
//             <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
//               2019
//             </p>
//             <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
//               On 19th May, we started <br /> our journey to explore
//             </p>
//           </span>
//           <span className=" position-absolute bottom-10 start-42 text-center">
//             <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
//               2020
//             </p>
//             <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
//               On 19th May, we started <br /> our journey to explore
//             </p>
//           </span>
//           <span className=" position-absolute top-10 start-58 text-center">
//             <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
//               2021
//             </p>
//             <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
//               On 19th May, we started <br /> our journey to explore
//             </p>
//           </span>
//           <span className=" position-absolute bottom-10 start-70 text-center">
//             <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
//               2022
//             </p>
//             <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
//               On 19th May, we started <br /> our journey to explore
//             </p>
//           </span>
//           <span className=" position-absolute top-10 start-84 text-center me-3 me-xxl-0">
//             <p className=" fw-semibold fs_sm font_poppins clr_blue mb-0">
//               2021
//             </p>
//             <p className=" fw-medium fs_xsm font_poppins clr_blue mb-0">
//               On 19th May, we started <br /> our journey to explore
//             </p>
//           </span>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Roadmap;
"use client";
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
        className="py-4 py-sm-5 rounded-0 overflow-hidden"
      >
        <div className="roadmap_line position-relative d-flex align-items-center min-vh-50">
          <div className="roadmap_image_wrapper">
            <Image
              className="w-100 h-100 roadmap_image"
              src={line}
              alt="line"
            />
          </div>
          <span className="roadmap_item position-absolute top-10 start-6 text-center">
            <p className="fw-semibold fs_sm font_poppins clr_blue mb-0">2017</p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className="roadmap_item position-absolute bottom-10 start-17 text-center">
            <p className="fw-semibold fs_sm font_poppins clr_blue mb-0">2018</p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className="roadmap_item position-absolute top-10 start-28 text-center">
            <p className="fw-semibold fs_sm font_poppins clr_blue mb-0">2019</p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className="roadmap_item position-absolute bottom-10 start-42 text-center">
            <p className="fw-semibold fs_sm font_poppins clr_blue mb-0">2020</p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className="roadmap_item position-absolute top-10 start-58 text-center">
            <p className="fw-semibold fs_sm font_poppins clr_blue mb-0">2021</p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className="roadmap_item position-absolute bottom-10 start-70 text-center">
            <p className="fw-semibold fs_sm font_poppins clr_blue mb-0">2022</p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
          <span className="roadmap_item position-absolute top-10 start-84 text-center me-3 me-xxl-0">
            <p className="fw-semibold fs_sm font_poppins clr_blue mb-0">2023</p>
            <p className="fw-medium fs_xsm font_poppins clr_blue mb-0">
              On 19th May, we started <br /> our journey to explore
            </p>
          </span>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .roadmap_line {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
          }

          .roadmap_image_wrapper {
            transform: rotate(90deg);
            transform-origin: center;
            width: 100%;
            height: auto;
          }

          .roadmap_item {
            width: auto;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
          }

          .roadmap_item:nth-child(odd) {
            top: auto !important;
            bottom: auto !important;
            transform: translateX(-100%) translateY(-50%);
            text-align: right;
          }

          .roadmap_item:nth-child(even) {
            top: auto !important;
            bottom: auto !important;
            transform: translateX(0) translateY(-50%);
            text-align: left;
          }
        }

        @media (max-width: 576px) {
          .roadmap_item p {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
  );
};

export default Roadmap;
