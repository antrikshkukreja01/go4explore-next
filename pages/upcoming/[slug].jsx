import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import "../App.css";
import Footer from "@/components/Footer";
import Nav from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

const Test = ({ slug }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://go4explore-api.cyberoze.com/api/upcoming-trips/${slug}`
        );
        setData(res.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [slug]);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px , 40px ",
        },
      },
    ],
  };
  return (
    <>
      <Nav />
      <header className=" h_500 bg_blue d-flex align-items-center justify-content-center">
        <h1 className=" text-white fw-bold fs_xxl font_poppins">Trips</h1>
        {/* {data.data.category.map((category) => (
          <div key={category.id}>
            <h1 className=" text-white fw-bold fs_xxl font_poppins">
              {category.categoryname}
            </h1>
          </div>
        ))} */}
      </header>
      <section className=" py-5">
        <div className=" container">
          <Slider {...settings}>
            {data.data.packages.map((pkg) => (
              <div className="px-3" key={pkg.id}>
                <div className="position-relative mb-4">
                  <Image
                    className="rounded-4 "
                    src={pkg.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "280px" }} // optional
                    alt="img"
                  />
                  <p className=" bg_yellow rounded-3 position-absolute text-black top-100 start-50 translate-middle fw-normal fs_xsm font_poppins px-2 py-1">
                    {pkg.duration}
                  </p>
                </div>
                <div className="h_160 flex-column d-flex justify-content-between">
                  <article>
                    <h2 className="pt-2 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                      {pkg.slug}
                    </h2>
                    {pkg.discounted_price ? (
                      <div className="d-flex align-items-center gap-4">
                        <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                          ₹{pkg.price}
                        </p>
                        <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                          ₹{pkg.discounted_price} per person
                        </p>
                      </div>
                    ) : (
                      <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                        ₹{pkg.price} per person
                      </p>
                    )}
                    {pkg.discount && (
                      <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                        Discount: ₹{pkg.discount}
                      </p>
                    )}
                  </article>
                  <div className="d-flex flex-column flex-sm-row align-items-center flex-xl-column flex-xxl-row gap-2 mt-3">
                    <Link
                      href={`/trips/${encodeURIComponent(pkg.slug)}`}
                      className="tripDetail_btn white_space fs_xsm fw-medium text-center w-100 text-decoration-none"
                    >
                      Trip Details
                    </Link>
                    <a
                      className="white_space callback_btn fs_xsm fw-medium w-100 text-center text-decoration-none"
                      href="#"
                    >
                      Request Callback
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <Footer />
    </>
  );
};

// Assuming you're using Next.js and want to fetch the slug server-side
export async function getServerSideProps(context) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}

export default Test;
