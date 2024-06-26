"use client";
import React from "react";
import header_img from "../assets/img/webp/header_img.webp";
import Image from "next/image";

const ProductPageHeader = () => {
  return (
    <>
      <section className="py-4 py-sm-5">
        <div className=" container">
          <Image
            className=" w-100 h_header2 rounded-4 "
            src={header_img}
            alt="header_img"
          />
        </div>
      </section>
    </>
  );
};

export default ProductPageHeader;
