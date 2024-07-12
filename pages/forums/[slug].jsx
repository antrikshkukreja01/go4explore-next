import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Footer from "@/components/Footer";
import Nav from "@/components/NavBar";
import axios from "axios";
import Image from "next/image";

const Test = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  if (data.error) return <div>Error loading data</div>;

  return (
    <>
      <Nav />

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="px-3" key={data.id}>
                <div className="d-flex align-items-center gap-2">
                  <Image
                    className="rounded-5"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "40px", height: "40px" }} // optional
                    src={data.data.user.image}
                    alt={data.data.user.name}
                  />
                  <p className="mb-0 clr_gray font_poppins fw-medium fs_xsm">
                    {data.data.user.name}
                  </p>
                </div>
                <p className="fw-semibold fs_md text-decoration-none text-black font_poppins mt-2">
                  {data.data.forum}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const res = await axios.get(
      `https://go4explore-api.cyberoze.com/api/forums/${slug}`
    );
    const data = res.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: { error: true },
      },
    };
  }
}

export default Test;
