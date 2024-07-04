import bag from "../assets/img/webp/bag.webp";
import handshake from "../assets/img/webp/handshake.webp";
import van from "../assets/img/webp/van.webp";
import plane from "../assets/img/webp/plane.webp";
import glasses from "../assets/img/webp/glasses.webp";
import travleing from "../assets/img/webp/travleing.webp";
import Image from "next/image";

const Packages = () => {
  return (
    <>
      <section className=" py-4 py-sm-5">
        <div className=" container">
          <div className=" row  input_width mx-auto">
            <div className="mt-4 mt-lg-0 col-4 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="trips-category/backpacking-trips"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={bag} alt="bag" />
                </div>
                <p className="mb-0 font_poppins fs_xsm fw-semibold mt-3 text-black text-center">
                  Backpacking <br /> Trips
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-4 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="trips-category/weekend-trips"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={van} alt="van" />
                </div>
                <p className="mb-0 font_poppins fs_xsm fw-semibold mt-3 text-black text-center">
                  Weekend
                  <br /> Getaways
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-4 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="trips-category/international-trips"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={plane} alt="plane" />
                </div>
                <p className="mb-0 font_poppins fs_xsm fw-semibold mt-3 text-black text-center">
                  International
                  <br /> Trips
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-4 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="trips-category/adventure-trips"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={travleing} alt="travleing" />
                </div>
                <p className="mb-0 font_poppins fs_xsm fw-semibold mt-3 text-black text-center">
                  Adventure <br /> Treks
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-4 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="trips-category/honeymoon-packages"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={glasses} alt="glasses" />
                </div>
                <p className="mb-0 font_poppins fs_xsm fw-semibold mt-3 text-black text-center">
                  Honeymoon
                  <br /> Packages
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-4 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="trips-category/corporate-trips"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={handshake} alt="handshake" />
                </div>
                <p className="mb-0 font_poppins fs_xsm fw-semibold mt-3 text-black text-center">
                  Corporate
                  <br /> Trips
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
