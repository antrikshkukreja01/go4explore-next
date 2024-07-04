"use client";
import React, { useState } from "react";

// import Accordion from "react-bootstrap/Accordion";

const FaqSpiti = () => {
  const [showSpitiFaqMore, setShowSpitiFaqMore] = useState(false);
  return (
    <>
      <section className=" py-4 py-sm-5">
        <div className=" container">
          <div className=" d-flex align-items-center justify-content-center w-100">
            <h2 className=" font_poppins text-black fw-bold fs_xl mb-0 border-bottom border-3 d-inline-block pb-3">
              Spiti Valley Tour FAQs
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSpiti;
